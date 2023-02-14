import React from "react";

import { UploadFile } from "../../admin/components";
import { SliderStyle } from "./Slider.style";

import Slider from "react-slick";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import './style.css';
type SliderProps = {
  handleAdditionalPhoto?: () => void;
  handleImageClick?: (e: any) => void;
  previewAdditionalImage?: any;
  form?: any;
  onDeleteFile?: any;
};
const SliderCustom = (props: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <SliderStyle>
        {/* <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      /> */}

          <Grid container>
              <Grid item xs={5}>
                  <ImageListItem>
                      <UploadFile
                          buttonType="large"
                          handleClick={props.handleAdditionalPhoto}
                      />
                  </ImageListItem>
              </Grid>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={6.5} className="slider-scrollbar">
                  <ImageList
                      sx={{
                          gridAutoFlow: "column",
                          gridTemplateColumns:
                              "repeat(auto-fill,minmax(350px,1fr)) !important",
                          gridAutoColumns: "minmax(350px, 1fr)",
                          textAlign: "left",
                      }}
                  >
                      {props.previewAdditionalImage &&
                      props.previewAdditionalImage.map((imageurl: any, index: any) => {
                          return (
                              <ImageListItem>
                                  <Grid container style={{ position: "relative" }}>
                                      <Grid
                                          item
                                          // style={{ zIndex: 0 }}
                                          style={{ position: "relative", zIndex: 0 }}
                                      >
                                          <img
                                              key={index}
                                              className="carousel-image crosimg"
                                              alt="carousel tab"
                                              src={imageurl}
                                              onClick={(e) =>
                                                  props.handleImageClick && props.handleImageClick(e)
                                              }
                                              style={{ padding: 10, height: "220px", width: "350px",objectFit:"scale-down",background:"#ececec" }}
                                          />
                                          <img
                                              src={"/images/cross-small.svg"}
                                              style={{
                                                  width: "32px",
                                                  height: "32px",
                                                  top: "7%",
                                                  right: "5%",
                                                  position: "absolute",
                                                  cursor: "pointer",
                                              }}
                                              onClick={(e) => {
                                                  props.onDeleteFile(props.form, index);
                                              }}
                                          />
                                          {/* <Grid
                        item
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 0,
                          zIndex: 21,
                        }}
                      >

                      </Grid> */}
                                      </Grid>
                                  </Grid>
                              </ImageListItem>
                          );
                      })}
                  </ImageList>
              </Grid>
          </Grid>

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
