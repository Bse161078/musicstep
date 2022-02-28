import React, { useState } from "react";
import CreateTicketModalStyle from "./CreateTicketModal.style";
import { InputBox, MessageModal, SelectBox } from "..";
import { Formik, Form } from "formik";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { TicketFormValidationSchema } from "./validation";

type CreateTicketModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  setTickets?: any;
  tickets?: any;
  ticket?: any;
  handleEditTicket?: any;
  index?: number;
};
const CreateTicketModal = (props: CreateTicketModalProps) => {
  const {
    isModalVisible,
    setIsModalVisible,
    setTickets,
    tickets,
    ticket,
  } = props;
  const [message, setmessage] = useState("");
  const submitRef: any = React.createRef();
  let initialValues: any = {
    title: ticket ? ticket.title : "",
    numberOfTickets: ticket ? ticket.numberOfTickets : "",
    description: ticket ? ticket.description : "",
    price: ticket ? ticket.price : 0,
    discount: ticket ? ticket.discount : 0,
  };
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleSubmit = (e: any, { resetForm }: any) => {
    if (ticket) {
      props.handleEditTicket(props.index, e);
      setSuccessModalVisible(true);
      setIsModalVisible(false);
      setmessage("Ticket Updated Successfully");
    } else {
      setTickets([e, ...tickets]);
      setSuccessModalVisible(true);
      setIsModalVisible(false);
      resetForm();
      setmessage("Ticket Created Successfully");

      initialValues = {
        title: "",
        numberOfTickets: "",
        description: "",
        price: 0,
        discount: 0,
      };
    }
  };

  const handleFormSubmit = () => {
    submitRef.current.click();
  };
  return (
    <>
      <ModalWrapper
        heading="Cricket Tickets"
        rightButtonTitle="Create Tickets"
        leftButtonTitle="Cancel"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        width="660px"
        handleOkClick={handleFormSubmit}
      >
        <CreateTicketModalStyle>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={TicketFormValidationSchema}
            enableReinitialize={true}
          >
            {(form) => (
              <Form className="form-wrapper">
                <div className="first-row">
                  <InputBox
                    label="Ticket Title"
                    placeholder="Premium Ticket"
                    name="title"
                  />
                  <InputBox
                    label="Ticekts Available"
                    placeholder="50"
                    name="numberOfTickets"
                  />
                </div>

                <InputBox
                  label="Ticket Description"
                  name="description"
                  placeholder="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
                />
                <div className="second-row">
                  <div>
                    <div className="secondrow-leftsection">
                      <InputBox
                        label="Ticket Price($)"
                        placeholder="$50"
                        name="price"
                        width="660px"
                      />
                      <span>
                        <SelectBox
                          label="Discount(%)"
                          name="discount"
                          options={[
                            { key: "50", value: "50%" },
                            { key: "60", value: "60%" },
                            { key: "70", value: "70%" },
                            { key: "80", value: "80%" },
                          ]}
                          setFieldValue={form.setFieldValue}
                        />
                        {/* <InputBox
                        label="Discount(%)"
                        name="discount"
                        placeholder="50%"
                        width="660px"
                      /> */}
                        {form.touched.discount && form.errors.discount && (
                          <span className="error-message">
                            {form.errors.discount}
                          </span>
                        )}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <p className="bottom-text">
                        You can offer minimum 50% discount of retail.
                      </p>
                    </div>
                  </div>

                  <div className="price-holder">
                    <div>
                      <div className="retail-price">
                        <p className="price-label">Retail Price</p>
                        <h3 className="title">50$</h3>
                      </div>
                      <div className="payout-price">
                        <p className="price-label">Payout to brand</p>
                        <h3 className="title">25$(50%)</h3>
                      </div>
                    </div>
                    <div className="right-section">
                      <p className="price-label">Value in Musicpass Credits</p>
                      <h3 className="title">7 Credits</h3>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  ref={submitRef}
                  style={{ display: "none" }}
                  onClick={() => {}}
                />
                {console.log(form)}
              </Form>
            )}
          </Formik>
        </CreateTicketModalStyle>
      </ModalWrapper>
      <MessageModal
        isModalVisible={isSuccessModalVisible}
        setIsModalVisible={setSuccessModalVisible}
        heading="Success"
        message={message}
      />
    </>
  );
};
export default CreateTicketModal;
