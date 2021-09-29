import styled from "styled-components";
export const DashboardStyle = styled.div`
  .dashboard-section-wrapper {
    display: grid;
    grid-template-columns: 360px auto;
    gap: 60px;
    max-width: 1920px;
    margin: auto;
    padding: 0 60px;

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
