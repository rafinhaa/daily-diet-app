import { FC, useState } from "react";
import TextError from "../TextError";

import { Container, Label, TextInput, Content } from "./styles";

import { InputProps } from "./types";

const Input: FC<InputProps> = ({ label, containerStyle, error, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container style={containerStyle}>
      <Label>{label}</Label>
      <Content focus={focus} error={!!error}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
      </Content>
      <TextError message={error} />
    </Container>
  );
};

export default Input;
