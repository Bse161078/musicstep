import React, {useEffect, useRef, useState} from "react";
import {Formik, Form} from "formik";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {InputBox} from "../../../../components/InputBox";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../../styles/Common.style";
import {ModalWrapper} from "../ModalWrapper";
import {PayeeCodeInfoModalStyle} from "./PayeeCodeInfoModal.style";
import {useLoginContext} from "../../../../context/authenticationContext";
import {MessageModal} from "../../../../components";
import {Grid} from "@mui/material";


const PayeeCodeInfoModal = (props: any) => {
    const {isModalVisible, setIsModalVisible, ticketIndex} = props;




    return (


            <ModalWrapper
                heading="Payee code info"
                width="617px"
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                button={[]}
            >
                <Grid container direction={"column"} alignItems={"left"} justifyContent={"left"}>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>The following codes identify payees that are exempt from backup withholding:</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>1 --	An organization exempt from tax under section 501(a), any IRA, or a custodial account under section 403(b)(7) if the account satisfies the requirements of section 401(f)(2)</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>2 --	The United States or any of its agencies or instrumentalities</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>3 --	A state, the District of Columbia, a possession of the United States, or any of their political subdivisions or instrumentalities</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>4 --	A foreign government or any of its political subdivisions, agencies, or instrumentalities</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>5 --	A corporation</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>6 --	A dealer in securities or commodities required to register in the United States, the District of Columbia, or a possession of the United States</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>7 --	A futures commission merchant registered with the Commodity Futures Trading Commission</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>8 --	A real estate investment trust</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>9 --	An entity registered at all times during the tax year under the Investment Company Act of 1940</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>10 --	A common trust fund operated by a bank under section 584(a)</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>11 --	A financial institution</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>12 --	A middleman known in the investment community as a nominee or custodian</p>
                    <p className="description" style={{textAlign:"left",fontWeight:"bold"}}>13 -- 	A trust exempt from tax under section 664 or described in section 4947</p>
                </Grid>
            </ModalWrapper>
    );
};

export default PayeeCodeInfoModal;
