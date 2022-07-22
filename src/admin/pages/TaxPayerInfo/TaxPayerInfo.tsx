import React, {useEffect, useState} from "react";

import {TaxPayerAfterSubmission} from "../../components/TaxpayerAfterSubmission";
import {
    Dashboard,
    DashboardHeader,
    TaxpayerInfoSteps,
} from "../../components";
import {TaxPayerInfoStyle} from "./TaxPayerInfo.style";
import axios from "axios";
import {useLoginContext} from "../../../context/authenticationContext";
import {Loading} from "../../../components/Loading";
import {TaxpayerInfoStepsStyle} from "../../components/TaxpayerInfoSteps/TaxpayerInfoSteps.style";

export default function TaxPayerInfo() {
    const [currentPage, setCurrentPage] = useState("taxpayer-home");
    const [isLoading, setLoading] = useState(false);
    const {state} = useLoginContext();
    const [count, setCount] = useState(0);
    const [taxInfo, setTaxInfo] = useState<any>({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEditTaxPayerClick = () => {
        setCurrentPage("taxpayer-steps");
    };


    const hideModal=()=>{
        setIsModalVisible(false);
    }

    const getPartner = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/v1/partners", {headers: {Authorization: `Bearer ${state.authToken}`}});
            if ((response.data).taxInfo) {
                setCount(count + 1);
                setTaxInfo(response.data.taxInfo);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }


    const updatePartnerTaxInfo = async () => {
        try {
            setLoading(true);
            const response = await axios.put("/v1/partners/tax/info", {...taxInfo}, {headers: {Authorization: `Bearer ${state.authToken}`}});
            setIsModalVisible(true)
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }


    useEffect(() => {
        getPartner();
    }, [])

    const onChangeForm = (form: any) => {
        setTaxInfo({...taxInfo,...form.values});
    }


    const onChangeInput = (value: any) => {
        setTaxInfo({...taxInfo, "number": value});
    }

    const onChangeSignature = (value: any) => {
        setTaxInfo({...taxInfo, "signature": value});
    }


    return (
        <Dashboard>
            {isLoading&&<Loading/>}
            <TaxPayerInfoStyle>
                <DashboardHeader
                    heading="Taxpayer Information"
                    description="Choose a tax status that represents you the best. If you need help, check the IRS Definition or visit our Tax Help Center."
                />
                {currentPage === "taxpayer-home" ? (
                    <TaxPayerAfterSubmission handleEditClick={handleEditTaxPayerClick}/>
                ) : (
                    <TaxpayerInfoSteps setCurrentPage={setCurrentPage}  hideModal={hideModal}
                                       onChangeForm={onChangeForm} taxInfo={taxInfo} count={count}
                                       onChangeInput={onChangeInput} onChangeSignature={onChangeSignature}
                                       isLoading={isLoading} updatePartnerTaxInfo={updatePartnerTaxInfo}
                                       isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                )}
            </TaxPayerInfoStyle>
        </Dashboard>
    );
}
