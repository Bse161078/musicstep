import React, { useState } from "react";
import CreateTicketModalStyle from "./CreateTicketModal.style";
import { InputBox, MessageModal, SelectBox } from "..";
import { useFormikContext, Formik, Form } from "formik";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { TicketFormValidationSchema } from "./validation";
import { useHistory } from "react-router-dom";

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
  const history = useHistory()
  const {
    isModalVisible,
    setIsModalVisible,
    setTickets,
    tickets,
    ticket,
  } = props;
  const [message, setmessage] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [ticketForm, setTicketForm] = useState<any>(null);
  const submitRef: any = React.createRef();
  const ticketFromRef: any = React.createRef();

  let initialValues: any = {
    title: ticket ? ticket.title : "",
    numberOfTickets: ticket ? ticket.numberOfTickets : "",
    description: ticket ? ticket.description : "",
    price: ticket ? ticket.price : 0,
    discount: ticket ? ticket.discount : 0,
    credits: ticket ? ticket.credits : 0,
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
        credits: 0,
      };
    }
  };

  const getCredits = (price: number, discount: number) => {
    switch (discount) {
      case 50:
        return price / 3.75;
      case 60:
        return price / 4.5;
      case 70:
        return price / 5.25;
      case 80:
        return price / 6;
    }
    return 1;
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
            ref={ticketFromRef}
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
                    type="number"
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
                        type="number"
                      />
                      <span>
                        <SelectBox
                          label="Discount(%)"
                          name="discount"
                          disabled={form.values.price === 0}
                          options={[
                            { key: "50", value: "50%" },
                            { key: "60", value: "60%" },
                            { key: "70", value: "70%" },
                            { key: "80", value: "80%" },
                          ]}
                          values={["50","60","70","80"]}
                          setFieldValue={form.setFieldValue}
                          handleSelectBoxChange={(e: any) => {
                            form.setFieldValue(
                              "credits",

                              Math.round(
                                getCredits(form.values.price, parseInt(e))
                              )
                            );
                          }}
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
                        <h3 className="title">{form.values.price}$</h3>
                      </div>
                      <div className="payout-price">
                        <p className="price-label">Payout to brand</p>
                        <h3 className="title">
                          {form.values.price && form.values.discount
                            ? Math.round(
                                form.values.price *
                                  (form.values.discount * 0.01)
                              )
                            : 0}
                          $({form.values.discount}%)
                        </h3>
                      </div>
                    </div>
                    <div className="right-section">
                      <p className="price-label">Value in Musicpass Credits</p>
                      <h3 className="title">{form.values.credits} Credits</h3>
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

                {/* {parseInt(form.values.discount) !== selectedDiscount &&
                  setSelectedDiscount(parseInt(form.values.discount))} */}
                {/* 
                {parseInt(form.values.discount) !== selectedDiscount &&
                  form.setFieldValue("credits", 10)} */}

                {/* {console.log(parseInt(form.values.discount), selectedDiscount)} */}
                {/* {setTicketForm(form)} */}
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
