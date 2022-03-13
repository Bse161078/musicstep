import styled from 'styled-components'

const DatePickerModalStyle = styled.div`

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

.react-date-picker {
  display: inline-flex;
  position: relative;
  height: 53px;
  border-radius: 50px;
  border: 1px solid #0c0c0c;
  outline: 0;
  padding: 15px 25px;
  font-size: 18px;
  width: 100%;
  max-width: 230px;

}
.react-date-picker,
.react-date-picker *,
.react-date-picker *:before,
.react-date-picker *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-date-picker--disabled {
  background-color: #f0f0f0;
  color: #6d6d6d;
}
.react-date-picker__wrapper {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  border: 0px solid gray;
}
.react-date-picker__inputGroup {
  min-width: calc((4px * 3) +  0.54em * 8  +  0.217em * 2);
  flex-grow: 1;
  padding: 0 2px;
  box-sizing: content-box;
}
.react-date-picker__inputGroup__divider {
  padding: 1px 0;
  white-space: pre;
}
.react-date-picker__inputGroup__input {
  min-width: 0.54em;
  height: 100%;
  position: relative;
  padding: 0 1px;
  border: 0;
  background: none;
  font: inherit;
  box-sizing: content-box;
  -moz-appearance: textfield;
  width: 25px !important;
  &:focus-visible{
    outline:0px
  }
  
}
.react-date-picker__inputGroup__year {
  width: 50px !important;
}
.react-date-picker__inputGroup__input::-webkit-outer-spin-button,
.react-date-picker__inputGroup__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.react-date-picker__inputGroup__input:invalid {
  background: rgba(255, 0, 0, 0.1);
}
.react-date-picker__inputGroup__input--hasLeadingZero {
  margin-left: -0.54em;
  padding-left: calc(1px +  0.54em);
}
.react-date-picker__button {
  border: 0;
  background: transparent;
  padding: 4px 6px;
}
.react-date-picker__button:enabled {
  cursor: pointer;
}
.react-date-picker__button:enabled:hover .react-date-picker__button__icon,
.react-date-picker__button:enabled:focus .react-date-picker__button__icon {
  stroke: #0078d7;
}
.react-date-picker__button:disabled .react-date-picker__button__icon {
  stroke: #6d6d6d;
}
.react-date-picker__button svg {
  display: inherit;
}
.react-date-picker__calendar {
  width: 350px;
  max-width: 100vw;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
}
.react-date-picker__calendar--closed {
  display: none;
}
.react-date-picker__calendar .react-calendar {
  border-width: thin;
}
`

export default DatePickerModalStyle
