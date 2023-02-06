import {useHistory} from "react-router";
import {useEffect, useState} from "react";
import {useLoginContext} from "../../context/authenticationContext";
import axios from "axios";
import {Loading} from "../../components/Loading";
import Grid from "@mui/material/Grid/Grid";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,ContentState,convertToRaw,convertFromHTML  } from 'draft-js';
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";
import {HeadingWithContent} from "../../components";
import {PrivacyPolicyStyle} from "./PrivacyPolicy.style";


const StaticPrivacyPolicy=()=>{

    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const [count, setCount] = useState(0);
    const {state, dispatch} = useLoginContext();


    const saveStaticDataFromServer=(data)=>{

        setContent(data);
        setCount(count+1);
    }

    const getStaticData = async (type) => {
        try {
            const response = await axios.get(`/v1/users/static-data/${type}`);
            const data=response.data;
            if(data && data.data){
                saveStaticDataFromServer(data.data);
            }else{
                saveStaticDataFromServer('');

            }
        } catch (e) {

        }
    }


    useEffect(() => {
        getStaticData('privacy-policy')
    }, []);

    return(
        <>
            {isLoading === true && <Loading/>}
            <PrivacyPolicyStyle>
                <HeadingWithContent
                    handleButtonClick={() => {
                        history.goBack()
                    }}
                    heading="Privacy Policy"
                    content={[]}
                />
                <div dangerouslySetInnerHTML={{__html: content}} />
            </PrivacyPolicyStyle>
        </>
    )

}

export default StaticPrivacyPolicy;