"use client";

import {
  PageWrapper,
  GeneralInfoWrapper,
  SpecificInfoWrapper,
  FormsWrapper,
  Title,
  SubTitle,
  ButtonWrapper,
} from "@/app/dashboard/quotes/styles";

import TextInput from "@/app/ui/design-system/TextInput";
import Button from "@/app/ui/design-system/Button";
import { useState } from "react";

export default function Page() {
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [detailingDificutyLevel, setDetailingDificutyLevel] = useState("");
  const [width, setWidth] = useState("");
  const [lenght, setLenght] = useState("");
  const [centres, setCentres] = useState("");
  const [floorHeight, setFloorHeight] = useState("");
  const [distancePosts, setDistancePosts] = useState("");
  const [rhsSize, setRhsSize] = useState("150x50x4");
  const [qtyBearers, setQtyBearers] = useState("");

  return (
    <PageWrapper>
      <Title>Quotes</Title>
      <FormsWrapper>
        <GeneralInfoWrapper>
          <SubTitle>General Information</SubTitle>
          <TextInput
            label="Project name"
            value={projectName}
            setStateHandler={setProjectName}
          />
          <TextInput
            label="Client name"
            value={clientName}
            setStateHandler={setClientName}
          />
          <TextInput
            label="Client address"
            value={clientAddress}
            setStateHandler={setClientAddress}
          />
          <TextInput
            label="Detailing Dificuty Level"
            value={detailingDificutyLevel}
            setStateHandler={setDetailingDificutyLevel}
          />
          <TextInput
            label="Width (mm)"
            value={width}
            setStateHandler={setWidth}
          />
          <TextInput
            label="Lenght (mm)"
            value={lenght}
            setStateHandler={setLenght}
          />
          <TextInput
            label="Centres (mm)"
            value={centres}
            setStateHandler={setCentres}
          />
          <TextInput
            label="Floor Height (mm)"
            value={floorHeight}
            setStateHandler={setFloorHeight}
          />
          <TextInput
            label="Distance between posts (mm)"
            value={distancePosts}
            setStateHandler={setDistancePosts}
          />
          <TextInput
            label="RHS Size"
            value={rhsSize}
            setStateHandler={setRhsSize}
          />
          <TextInput
            label="Quantity of Bearers"
            value={qtyBearers}
            setStateHandler={setQtyBearers}
          />
        </GeneralInfoWrapper>
        <SpecificInfoWrapper>
          <SubTitle>Floor System Information</SubTitle>
        </SpecificInfoWrapper>
      </FormsWrapper>
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </PageWrapper>
  );
}
