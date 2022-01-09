import React from "react";
import CreateTicketModalStyle from "./CreateTicketModal.style";
import { InputBox, SelectBox } from "..";
import { Formik, Form } from "formik";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";

type CreateTicketModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const CreateTicketModal = (props: CreateTicketModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Cricket Tickets"
      rightButtonTitle="Create Tickets"
      leftButtonTitle="Cancel"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      width="660px"
    >
      <CreateTicketModalStyle>
        <Formik
          initialValues={{
            title: "",
            numberOfTickets: "",
            description: "",
          }}
          onSubmit={handleSubmit}
        >
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
                    name="title"
                    width="660px"
                  />
                  <SelectBox
                    label="Discount(%)"
                    name="discount"
                    options={[{ key: "", value: "" }]}
                  />
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
          </Form>
        </Formik>
      </CreateTicketModalStyle>
    </ModalWrapper>
  );
};
export default CreateTicketModal;
