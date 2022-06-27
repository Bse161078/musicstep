import { Collapse } from "antd";
import { rgba } from "polished";
import styled from "styled-components";

export const VenueCardStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  cursor: pointer;

  @media ( max-width: 1440px ) {
    grid-template-columns: 1fr;
  }

  .venue-thumbnail {
    max-width: 320px;
    width:240px;
    height:135px;
    border-radius: 16px;
  }
  .top-heading {
    color: #0c0c0c;
    font-size: 20px;
    margin-bottom: 5px;
    opacity: 0.5;
  }

  .heading {
    color: #0c0c0c;
    font-size: 24px;
    margin-bottom: 5px;
  }

  .address {
    color: #0c0c0c;
    font-size: 20px;
    margin-bottom: 15px;
  }

  .row{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .star-wrapper {
    display: flex;
    color: #0c0c0c;
    font-size: 20px;
    align-items: center;

    svg {
      margin-right: 5px;
    }
    
    span {
      margin-left: 5px;
      opacity: 0.5;
    }
  }

  .guidelines-wrapper {
    display: flex;
    align-items: center;
    margin-top: 10px;

    svg {
      margin-right: 5px;
    }
  }

  .venue-description {
    color: #0c0c0c;
    opacity: 0.5;
    font-size: 16px;
    padding-left: 20px;
    border-left: solid 1px ${rgba("#0c0c0c", 0.3)};
  }


`;

export const CollapseStyle = styled(Collapse)`
  background: #F7F7F7;
  border: 0;
  border-radius: 24px;
   height:auto;
   .ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-bottom: 0;
    border-radius: 5px;
}
  .ant-collapse-header {
    color: #100840;
    font-weight: bold;
  }

  .ant-collapse-content {
    background: transparent;
  }
`