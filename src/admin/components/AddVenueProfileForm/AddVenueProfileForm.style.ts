import styled from "styled-components";

export const AddVenueProfileFormStyle = styled.div`
  padding-bottom: 120px;

  .file-wrapper {
    display: flex;
    gap: 30px;
    padding: 20px 0px;
    flex-direction: column;

    .child-Filewrapper {
      display: flex;
      gap: 30px;
    }
  }

  .socialLinks-wrapper {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  .location-and-amenstiesWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media ( max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .location-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-wrapper {
    display: grid;
    gap: 20px;
  }

  .amenties-wrapper {
    background: #f7f7f7;
    border-radius: 32px;
    padding: 20px;

  }

  .policy-list {
    display: grid;
    grid-template-columns: 1fr 1fr;

    label.ant-checkbox-wrapper {
      font-size: 20px;
      margin-left: 0;
    }
  }

  .list-wrapper {
    display: grid;
    border-radius: 1px solid red;
    grid-template-columns: 1fr 1fr;

    label {
      font-size: 20px;
      margin-left: 0;
    }
  }
`;
