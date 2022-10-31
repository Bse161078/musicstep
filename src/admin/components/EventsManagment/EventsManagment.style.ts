import styled from "styled-components";
export const EventsManagmentStyle = styled.div`
  z-index:1;
  background:white;

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

  .event-date-name{
    display: flex;
    align-items: baseline;
  }
  .event-date {
    color: #0c0c0c;
    opacity: 0.7;
    font-size: 20px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 10px;
    margin: 20px 0 10px;
    padding-left: 20px;
  
  }
  .event-date-bold {
    font-weight: bold;
  }
  .event-address{
    padding-left:0px; 
  }

  .table-header {
    padding: 20px 30px;
    background: rgba(16, 8, 64, 0.1);
    color: #0c0c0c;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr;
    margin-top: 20px;
    @media (min-width: 766px) and (max-width: 1024px) {
      grid-template-columns: 50px 1fr 1fr 106px;
    }
  }
  .date-border {
    border-bottom: 2px solid #0C0C0C;
    opacity: 0.5;
  }
`;

export const EventsManagmentListItemStyle = styled.div`
  margin-bottom:10px; 
  .content-wrapper {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr;
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
