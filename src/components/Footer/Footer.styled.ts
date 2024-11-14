import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;
