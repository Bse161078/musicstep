import styled from "styled-components";

export const ExploreVenueStyle = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  padding: 60px;

  @media (max-width: 1028px) {
    grid-gap: 70px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .venues-list {
    display: grid;
    grid-gap: 30px;

    @media (max-width: 767px) {
      grid-gap: 50px;
    }
  }

  .maps-wrapper {
    max-width: 570px;
    width: 100%;
    position: sticky;
    top: 80px;
  }
`;

export const DropdownsListStyle = styled.div`
  .drodown-form-wrapper {
    display: flex;
    grid-gap: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    overflow-x: scroll;
  }
  
`;
export const TrialButton = styled.div`
.free-trial-btn {
  position: relative;
  color: white;
  font-family: bitter;
  font-size: 36px;
  line-height: 36px;
  padding: 17px 24px 14px 24px;
  border-radius: 5px;
  background-color: #f3c;
  box-shadow: 0 6px #f3c;
  border: none;
  width: 95%;
  max-width: 960px;
  white-space: normal;
  
  &:hover {
      box-shadow: 0 4px #f3c;
      top: 2px;
      color: #fff;
      text-decoration: none;
  }
  
  &:active, &:focus, &:active:focus {
      color: #fff;
      top: 3px;
      box-shadow: 0 3px #f3c;
      outline: none;
  }
  
  .btn-subtext {
      display: block;
      font-size: 21px;
      font-family: Lato, 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
      font-weight: 300;
  }
}

.free-trial-secondary {
  width: auto;
  font-size: 28px;
}
`;