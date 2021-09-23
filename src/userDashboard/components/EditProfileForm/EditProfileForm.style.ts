import styled from "styled-components"

export const EditProfileFormStyle = styled.div`
    .form-wrapper {
        display: grid;
        grid-template-columns: 470px 250px;
        grid-gap: 125px;

        .form-left {
            display: grid;
            grid-gap: 30px;
        }

        .multi-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }

        .custom-columns {
            display: grid;
            grid-template-columns: 170px 1fr;
            grid-gap: 20px;
        }

        .avatar-wrapper {
            display: grid;
            justify-content: center;
            grid-gap: 30px;

            .avatar {
                margin: auto;
                max-width: 250px;
                width: 100%;
            }
        }
    }
`