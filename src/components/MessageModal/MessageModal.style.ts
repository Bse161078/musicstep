import { Modal } from "antd"
import styled from "styled-components"
import { FilledButtonStyle } from "../../styles/Common.style"

export const MessageModalStyle = styled(Modal)`
    .ant-modal-content {
        border-radius: 32px;
        box-shadow: 0px 0px 99px #0000004D;

        .ant-modal-header {
            border-radius: 32px 32px 0 0;
            border-bottom: 0;
            padding: 36px;

            .ant-modal-title {
                font-size: 36px;
                text-align: center;
            }
        }

        .ant-modal-body {
            text-align: center;
            padding: 0 30px;
            padding-bottom: 30px;
        }

        .modal-message {
            font-size: 20px;
            margin-top: 30px;
        }

        .ant-modal-footer {
            padding: 0 30px 30px;
            border-top: 0;
            text-align: center;
        }
    }

    ${FilledButtonStyle} {
        background-color: #100840;
    }
`