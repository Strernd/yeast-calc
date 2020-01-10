import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import InputContainer from "./InputContainer";
import { useYeastCalculator } from "../hooks/useYeastCalculator";
import Info from "./Info";

function Calculator({ children, setResults, ...props }) {
  const [gravity, setGravity] = useState(36);
  const [volume, setVolume] = useState(2000);
  const [initial, setInitial] = useState(100);
  const [viability, setViability] = useState(50);
  const [retention, setRetention] = useState(20);
  const [loss, setLoss] = useState(10);
  useYeastCalculator(
    setResults,
    gravity,
    volume,
    initial,
    viability,
    retention,
    loss
  );
  return (
    <div>
      <InputContainer>
        <Input value={gravity} setValue={setGravity} />
        <Label>Gravity Points</Label>
      </InputContainer>
      <Info>Original Gravity of the starter in gravity points. E.g. for 1.036 use 36</Info>

      <InputContainer>
        <Input value={volume} setValue={setVolume} />
        <Label>Starter Size (ml)</Label>
      </InputContainer>
      <Info>Size of the starter.</Info>


      <InputContainer>
        <Input value={initial} setValue={setInitial} />
        <Label>Initial Cell Count (Billion)</Label>
      </InputContainer>
      <Info>Count of cells for the first starter. (Probably from a bought yeast package)</Info>


      <InputContainer>
        <Input value={viability} setValue={setViability} />
        <Label>Viability Remain (%)</Label>
      </InputContainer>
      <Info>How many cells will survive until you make the next starter. 50% is pretty conservative (for months) (Need sources)</Info>

      <InputContainer>
        <Input value={retention} setValue={setRetention} />
        <Label>Retention (%)</Label>
      </InputContainer>
      <Info>Percentage of the starter you keep for making the next starter.</Info>

      <InputContainer>
        <Input value={loss} setValue={setLoss} />
        <Label>Loss (%)</Label>
      </InputContainer>
      <Info>Loss of cells from the starter for Pitch. (Possibly through cold crashing) Should be zero if you pitch without cold crashing.</Info>

    </div>
  );
}

export default Calculator;
