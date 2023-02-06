import React, {useState} from "react";
import CreateTicketModalStyle from "./CreateTicketModal.style";
import {InputBox, MessageModal, SelectBox} from "..";
import {useFormikContext, Formik, Form} from "formik";
import {ModalWrapper} from "../../admin/components/Modals/ModalWrapper";
import {TicketFormValidationSchema} from "./validation";
import {useHistory} from "react-router-dom";
import {Grid} from "@mui/material";

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
    const history = useHistory();
    const {
        isModalVisible,
        setIsModalVisible,
        setTickets,
        tickets,
        ticket,
        index
    } = props;
    const [message, setmessage] = useState("");
    const [selectedDiscount, setSelectedDiscount] = useState(0);
    const [ticketForm, setTicketForm] = useState<any>(null);
    const submitRef: any = React.createRef();
    const ticketFromRef: any = React.createRef();
    const [discount, setDiscount] = useState("Level 1");
    const [price, setPrice] = useState(ticket ? ticket.price : "");
    const [error, setError] = useState({show: false, value: ""});
    let initialValues: any = {
        title: ticket ? ticket.title : "",
        numberOfTickets: ticket ? ticket.numberOfTickets : "",
        description: ticket ? ticket.description : "",
        price: ticket ? ticket.price : 0,
        discount: ticket ? ticket.discount : "Level 1",
        credits: ticket ? ticket.credits : 0,
    };

    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handleSubmit = (e: any, {resetForm}: any) => {
        if (parseInt(price) && parseInt(price) > 0) {
            if (ticket) {
                props.handleEditTicket(props.index, {
                    ...e,
                    credits: Math.floor(getCredits(price, discount)),
                });
                setSuccessModalVisible(true);
                setIsModalVisible(false);
                setmessage("Reservation updated successfully");
            } else {
                setTickets([
                    {...e, credits: Math.floor(getCredits(price, discount)),price:price},
                    ...tickets,
                ]);
                setSuccessModalVisible(true);
                setIsModalVisible(false);
                resetForm();
                setmessage("Reservation created successfully");

                initialValues = {
                    title: "",
                    numberOfTickets: "",
                    description: "",
                    price: 0,
                    discount: "Level 1",
                    credits: 0,
                };
            }
        } else {
            setError({show: true, value: "Price must be greater than zero"})
        }
    };


    const checkLengthAndNumber = (str: any, length: any) => {
        return str.replace(/[^0-9\+]/g, '') && str.replace(/[^0-9\+]/g, '').length <= length ?
            str.replace(/[^0-9\+]/g, '') : ""
    }

    const getValueFromDiscount = (discount: string) => {
        switch (discount) {
            case "Level 1":
                return 3.75;
            case "Level 2":
                return 4.5;
            case "Level 3":
                return 5.25;
            case "Level 4":
                return 6;
        }
        return 1;
    };


    const getCredits = (price: number, discount: string) => {

        switch (discount) {
            case "Level 1":
                return price / 3.75;
            case "Level 2":
                return price / 4.5;
            case "Level 3":
                return price / 5.25;
            case "Level 4":
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
                heading={!ticket?"Create a Reservation":"Update reservation"}
                rightButtonTitle={!ticket?"Create Reservation":"Update reservation"}
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
                                        label="Reservation Type/Title"
                                        placeholder="Premium Ticket"
                                        name="title"
                                    />
                                    <InputBox
                                        label="Open Seats or Spots Available "
                                        placeholder="50"
                                        name="numberOfTickets"
                                        type="number"
                                    />
                                </div>

                                <InputBox
                                    label="Description of Reservation Type"
                                    name="description"
                                    placeholder="Anytime entry"
                                />
                                <div className="second-row">
                                    <div>
                                        <div className="secondrow-leftsection">
                                            <InputBox
                                                label="Retail Price Equivalent for this type of seat or spot"
                                                placeholder="50"
                                                name="price"
                                                width="660px"
                                                type="text"
                                                ticket_price={"$" + price}
                                                setSearch={(value: any) => {
                                                    if (value && value.length > 1) {
                                                        const convertedToNumber = checkLengthAndNumber(value.slice(1, value.length), 10);
                                                        setPrice(convertedToNumber);
                                                        if(error.show) setError({show:false,value:""});
                                                    } else {
                                                        setPrice("");
                                                    }
                                                }}
                                            />
                                            <span>
                        <SelectBox
                            label="Discount Level=(higher level=higher discount)"
                            name="Level 1"
                            disabled={form.values.price === 0}
                            options={[
                                {key: 1, value: "Level 1"},
                                {key: 2, value: "Level 2"},
                                {key: 3, value: "Level 3"},
                                {key: 4, value: "Level 4"},
                            ]}
                            defaultValue={"Level1"}
                            values={["Level 1", "Level 2", "Level 3", "Level 4"]}
                            setFieldValue={form.setFieldValue}
                            handleSelectBoxChange={(e: any) => {
                                setDiscount(e);
                                form.setFieldValue(
                                    "credits",

                                    Math.round(getCredits(parseInt(price), e))
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
                                            {error.show && (
                                                <p className="bottom-text">
                                                    < span className="error-message">{error.value}</span>
                                                </p>
                                            )}
                                            <p className="bottom-text">
                                                You can offer minimum 50% discount of retail.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="price-holder">
                                        {/* <div>
                      <div className="retail-price">
                        <p className="price-label">Retail Price</p>
                        <h3 className="title">{form.values.price}$</h3>
                      </div>
                      <div className="payout-price">
                        <p className="price-label">Payout to brand</p>
                        <h3 className="title">
                          {`${form.values.price}/${getValueFromDiscount(
                            discount
                          )}`}
                        </h3>
                      </div>
                    </div> */}
                                        <div className="right-section">
                                            <p className="price-label">Value in MusicPass Credits</p>
                                            <h3 className="title">
                                                {Math.floor(getCredits(parseInt(price), discount))||0}{" "}
                                                Credits
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Submit"
                                    ref={submitRef}
                                    style={{display: "none"}}
                                    onClick={() => {
                                    }}
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
