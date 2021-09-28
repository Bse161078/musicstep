import { rgba } from "polished";
import styled from "styled-components";

export const UserSidebarStyle = styled.div`
  background: #f7f7f7;
  border-radius: 32px;
  padding: 30px 15px;
  max-width: 360px;

  .divider {
    height: 1px;
    width: 90%;
    margin: 10px auto;
    background: #0c0c0c;
    opacity: 0.1;
    display: block;
  }

  .cards-wrapper {
    display: grid;
    grid-gap: 10px;
  }

  .heading {
    font-size: 14px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 5px;
  }

  .person-info-wrapper {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: solid 1px ${rgba("#0c0c0c", 0.5)};
    display: grid;
    grid-row-gap: 30px;
    justify-content: center;

    .avatar-wrapper {
      position: relative;

      .action-buttons-wrapper {
        position: absolute;
        top: 0;
        right: -70px;
        display: flex;
        flex-direction: column;

        @media ( max-width: 767px ) {
          right: -55px;
        }
      }
    }

    .person-name {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #0c0c0c;
    }

    .avatar {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
`;
