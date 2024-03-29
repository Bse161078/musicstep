import styled from "styled-components";

export const SelectWithInputStyle = styled.div`
  max-width: 900px;
  width: 57%;

  @media (max-width: 800px){
  display:none;
  }
  .search-form-wrapper {
    display: flex;
    align-items: center;

    .input-label {
      display: none;
      text-align:left;
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
          width: 150px;
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
      display: block;
      width: 100%;

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
