import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const GeneralInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: #f3f3f3;
  border-radius: 16px;
  padding: 32px 24px;
`;

export const SpecificInfoWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  background-color: #f3f3f3;
  border-radius: 16px;
  padding: 32px 24px;
`;

export const FormsWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding: 16px;
`;
