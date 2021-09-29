import { rgba } from "polished";
import styled from "styled-components";
import { OutlineButtonStyle } from "../../styles/Common.style";
import { TabsStyle } from "../../styles/Fields.style";

export const VenueDetailsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;

  @media (max-width: 1600px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }

  .table-wrapper {
    @media (max-width: 767px) {
      overflow: auto;
      width: 85vw;
      display: grid;
    }
  }

  .left-side {
    padding: 0 60px;
    padding-left: 120px;

    @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .buttons-wrapper {
    display: flex;
    grid-column-gap: 20px;
    justify-content: flex-start;
    padding: 30px 0 40px 0;

    ${OutlineButtonStyle} {
      border: solid 1px rgba(12, 12, 12, 0.3);
    }
  }

  ${TabsStyle} {
    .ant-tabs-nav {
      background: #f7f7f7;
      border-radius: 50px;
      margin-bottom: 30px;

      &:before {
        border-bottom: 0;
      }

      .ant-tabs-tab-btn {
        font-size: 16px;
      }
    }

    .ant-tabs-ink-bar {
      display: none;
    }
  }

  .icon-with-content {
    display: flex;
    grid-column-gap: 15px;
    margin-bottom: 20px;
    align-items: center;

    span {
      color: #0c0c0c;
      opacity: 0.5;
      font-size: 20px;
    }
  }

  .venue-info-wrapper {
    padding: 0 60px;
    border-left: 1px solid ${rgba("#0c0c0c", 0.3)};
    position: sticky;
    top: 106px;

    @media (max-width: 767px) {
      padding: 0 20px;
    }
  }

  .map-wrapper {
    margin-bottom: 30px;

    .map {
      max-width: 645px;
      width: 100%;
    }
  }
`;

export const HeadingWithContentStyle = styled.div`
  .heading {
    color: #0c0c0c;
    font-size: 24px;
    margin: 30px 0;
  }

  .description {
    color: #0c0c0c;
    opacity: 0.5;
    font-size: 20px;
  }
`;
