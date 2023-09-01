import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div<{ isSelected: boolean }>`
  margin: 50px;
  font-size: 50px;
  border-bottom: ${(props) => (props.isSelected ? "4px solid black" : "none")};
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
  font-size: 50px;
`;
