import styled from "styled-components";
export const DashboardStyle = styled.div`
  .dashboard-section-wrapper {
    display: grid;
    grid-template-columns: 280px auto;
    align-items: flex-start;
    gap: 60px;
    max-width: 1920px;
    margin: auto;
    width:102vw;
    padding: 0 60px;
    background:white;
    z-index:1;
    @media (max-width: 1024px) {
      grid-template-columns: 250px 1fr;
      padding: 20px;
      gap: 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`;
