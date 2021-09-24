import styled from "styled-components";

type SectionWrapperStyleProps = {
  type?: "light" | "dark";
};

export const SectionWrapperStyle = styled.section<SectionWrapperStyleProps>`
  background: ${(props) => (props.type === "dark" ? "#F7F7F7" : "#fff")};
  padding: 90px 15px;

  .section-heading {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    color: #0c0c0c;
  }
`;
