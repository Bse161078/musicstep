import { Modal } from 'antd'
import styled from 'styled-components'
import { FilledButtonStyle } from '../../../../styles/Common.style'

export const ModalWrapperStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 32px;
    box-shadow: 0px 0px 99px #0000004d;
    padding: 10px;

    .ant-modal-header {
      border-radius: 32px 32px 0 0;
      border-bottom: 0;
      padding: 36px;

      .ant-modal-title {
        font-weight: 700;
        font-size: 36px;
        text-align: center;

        @media (max-width: 767px) {
          font-size: 24px;
        }
      }
    }

    .ant-modal-body {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-weight: 600;
      padding: 0 30px;
      padding-bottom: 30px;

      @media (max-width: 767px) {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .modal-message {
      font-size: 20px;
      margin-top: 30px;
    }

    .ant-modal-footer {
      display: flex;
      justify-content: center;
      gap: 20px;
      border-top: 0;
    }
    label {
      display: flex;
      color: #0c0c0c;
      opacity: 1;
      margin-left: 13px;
      font-size: 18px;
      font-weight: 550;
    }
  }

  ${FilledButtonStyle} {
    background-color: #100840;
  }

  .description {
    font-size: 17px;
    color: black;
    font-weight: 250;
    padding-bottom: 30px;
  }
  .bold-description {
    font-size: 17px;
    color: #ff33cc;
    font-weight: 700;
    padding-bottom: 30px;
    cursor: pointer;
  }
`
