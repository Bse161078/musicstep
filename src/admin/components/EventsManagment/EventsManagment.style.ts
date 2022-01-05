import styled from "styled-components";
export const EventsManagmentStyle = styled.div`
  .searchbar-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
  }
  .table-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const EventsManagmentListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .event-date {
    color: #0c0c0c;
    opacity: 0.7;
    font-size: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 30px;
    margin: 20px 0 10px;
    padding-left: 30px;
    
    .date-border {
      border-bottom: 2px solid #0C0C0C;
      opacity: 0.5;
    }
  }

  .table-header {
    padding: 20px 30px;
    background: rgba(16, 8, 64, 0.1);
    color: #0c0c0c;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    margin-top: 20px;
    @media (min-width: 766px) and (max-width: 1024px) {
      grid-template-columns: 50px 1fr 1fr 106px;
    }
  }
`;

export const EventsManagmentListItemStyle = styled.div`
  .content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    background: #f7f7f7;
    border-radius: 16px;
    padding: 16px;
    align-items: center;
  }
  .event-details,
  .engagments {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
  }
  .event-name,
  .event-date,
  .org-name {
    font-size: 20px;
  }
  .event-name,
  .org-name {
    font-weight: 700;
  }
`;
