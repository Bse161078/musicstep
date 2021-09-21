import { rgba } from "polished";
import styled from "styled-components";

export const VenueCardStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 460px;
  grid-column-gap: 30px;

  .venue-thumbnail {
    max-width: 320px;
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
