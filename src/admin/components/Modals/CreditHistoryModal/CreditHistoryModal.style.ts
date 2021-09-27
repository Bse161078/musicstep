import { Header } from './../../../../stories/Header';
import styled from "styled-components"

export const CreditHistoryModalStyle = styled.div`
   .header {
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #0000004D;
       padding-bottom:10px;
   } 
   .header div {
       display: flex;
       gap: 50px;
   }   
   .rows {
       display: flex;
       justify-content:space-between;
       padding: 10px  0px;
       border-bottom: 1px solid #0000004D;
   }
   .rows div {
       display: flex;
       gap: 37px;
       text-align: start;
       font-weight: bold;
   }
   .rows h1 {
       font-size: 20px;
       
   }
   .rows p {
       opacity: 0.5;
       font-weight: normal;
       padding-top: 5px;
   }
`