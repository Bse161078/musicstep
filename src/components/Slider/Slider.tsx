import React from "react";

import {UploadFile} from "../../admin/components";
import {SliderStyle} from "./Slider.style";


import Slider from "react-slick";
import {Grid, ImageList, ImageListItem} from "@mui/material";


type SliderProps = {
    handleAdditionalPhoto?: () => void;
    handleImageClick?: (e: any) => void;
    previewAdditionalImage?: any;
    form?:any;
    onDeleteFile?:any
};
const SliderCustom = (props: SliderProps) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <SliderStyle>

                {/* <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      /> */}
                <ImageList

                    sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr)) !important",
                        gridAutoColumns: "minmax(350px, 1fr)",
                        textAlign:"left"
                    }}
                >
                    <ImageListItem >
                        <UploadFile
                            buttonType="large"
                            handleClick={props.handleAdditionalPhoto}
                        />
                    </ImageListItem>
                    {props.previewAdditionalImage &&
                    props.previewAdditionalImage.map((imageurl: any, index: any) => {
                        return (
                            <ImageListItem>
                                <Grid container style={{position:"relative"}}>
                                    <Grid item style={{zIndex:0}}>
                                        <img
                                            key={index}
                                            className="carousel-image"
                                            alt="carousel tab"
                                            src={imageurl}
                                            onClick={(e) =>
                                                props.handleImageClick && props.handleImageClick(e)
                                            }
                                            style={{padding:10,height:"220px",width:"350px"}}
                                        />
                                    </Grid>
                                    <Grid item style={{position:"absolute",top:10,right:0,zIndex:21}}>
                                        <img src={"/images/cross-small.svg"} style={{width:"32px",height:"32px",cursor:"pointer"}}
                                        onClick={(e)=>props.onDeleteFile(props.form,index)}/>
                                    </Grid>
                                </Grid>

                            </ImageListItem>
                        );
                    })}
                </ImageList>

                {/* <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      />
      <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      /> */}
            </SliderStyle>
        </>
    );
};

export default SliderCustom;
