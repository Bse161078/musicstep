import styled from 'styled-components'

const TimePickerModalStyle = styled.div`

display: flex;
flex-direction: column;
gap: 5px;
align-items:flex-start;
justify-content:left;
font-size: 18px important;
.input-label {
   font-size: 14px;
   color: #0c0c0c;
   font-weight: 500;
   margin-left: 15px;
}
.react-time-picker {
   display: inline-flex;
   position: relative;
   height: 53px;
   border-radius: 50px;
   border: 1px solid #0c0c0c;
   outline: 0;
   padding: 15px 25px;
   font-size: 18px;
   width: 100%;
   max-width: 200px;
 }
 .react-time-picker,
 .react-time-picker *,
 .react-time-picker *:before,
 .react-time-picker *:after {
   -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
 }
 .react-time-picker--disabled {
   background-color: #f0f0f0;
   color: #6d6d6d;
 }
 .react-time-picker__wrapper {
   display: flex;
   flex-grow: 1;
   flex-shrink: 0;
   border: 0px solid gray;
   width: 100%;

 }
 .react-time-picker__inputGroup {
   min-width: calc((4px * 3) +  0.54em * 6  +  0.217em * 2);
   flex-grow: 1;
   padding: 0 2px;
   box-sizing: content-box;
 }
 .react-time-picker__inputGroup__divider {
   padding: 1px 10px;
   white-space: pre;
 }
 .react-time-picker__inputGroup__input {
   min-width: 0.54em;
  //  width: 25px !important;
   height: 100%;
   position: relative;
   padding: 0 1px;
   border: 0;
   background: none;
   font: inherit;
   box-sizing: content-box;
   -moz-appearance: textfield;
   border:0px;
   &:focus-visible {
      outline: 0px dashed darkorange;  
   }

 }
 .react-time-picker__inputGroup__input::-webkit-outer-spin-button,
 .react-time-picker__inputGroup__input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
 }
 .react-time-picker__inputGroup__input:invalid {
   background: rgba(255, 0, 0, 0.1);
 }
 .react-time-picker__inputGroup__input--hasLeadingZero {
   margin-left: -0.54em;
   padding-left: calc(1px +  0.54em);
 }
 .react-time-picker__inputGroup__amPm {
   font: inherit;
   -moz-appearance: menulist;
 }
 .react-time-picker__button {
   border: 0;
   background: transparent;
   padding: 4px 6px;
 }
 .react-time-picker__button:enabled {
   cursor: pointer;
 }
 .react-time-picker__button:enabled:hover .react-time-picker__button__icon,
 .react-time-picker__button:enabled:focus .react-time-picker__button__icon {
   stroke: #0078d7;
 }
 .react-time-picker__button:disabled .react-time-picker__button__icon {
   stroke: #6d6d6d;
 }
 .react-time-picker__button svg {
   display: inherit;
 }
 
`

export default TimePickerModalStyle
