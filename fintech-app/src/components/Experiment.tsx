import { PinInput, PinInputField, Stack } from "@chakra-ui/react";

import React, { useState } from "react";

const Experiment = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  return (
    <>
      <Stack direction="row">
        <PinInput mask>
          <PinInputField
            h="40px"
            fontSize="20px"
            value={pin1}
            w="100%"
            onChange={(e) => setPin1(e.target.value)}
          />
          <PinInputField
            fontSize="20px"
            value={pin2}
            w="100%"
            onChange={(e) => setPin2(e.target.value)}
          />
          <PinInputField
            fontSize="20px"
            value={pin3}
            w="100%"
            onChange={(e) => setPin3(e.target.value)}
          />
          <PinInputField
            value={pin4}
            fontSize="20px"
            w="100%"
            onChange={(e) => setPin4(e.target.value)}
          />
        </PinInput>
      </Stack>
    </>
  );
};

export default Experiment;
