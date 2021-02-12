import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 10px;
`;

export const AppName = styled.Text`
  color: white;
  margin-top: 4px;
`;

export const Avatar = styled.Image`
  border: 2px solid #8e2de2;
  width: 45px;
  height: 45px;
  border-radius: 24px;
`;
