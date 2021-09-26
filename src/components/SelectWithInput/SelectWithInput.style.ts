import styled from "styled-components";

export const SelectWithInputStyle = styled.div`
  .search-form-wrapper {
    display: flex;
    align-items: center;

    .input-label {
      display: none;
    }

    .select-wrapper {
      @media (max-width: 767px) {
        .ant-select-arrow svg {
          width: 10px;
        }

        .ant-select-arrow {
          right: 10px;
        }
      }

      .ant-select {
        width: 370px;
        margin: 0;

        @media (max-width: 1440px) {
          width: 200px;
        }

        @media (max-width: 1280px) {
          width: 100px;
        }
      }

      .ant-select-selector {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        @media (max-width: 767px) {
          height: 32px;

          .ant-select-arrow svg {
            width: 10px;
          }
        }
      }
    }

    .input-wrapper {
      input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
        max-width: 570px;
        width: 100%;

        @media (max-width: 767px) {
          height: 30px;
        }
      }
    }
  }

  .search-button {
    margin-left: 10px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
          width: 30px;
    }
  }
`;
