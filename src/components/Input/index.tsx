import { FC, useState } from "react";

import { Container, Label, TextInput, Content } from "./styles";

import { InputProps } from "./types";

const Input: FC<InputProps> = ({ label, ...rest }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <Content focus={focus}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
      </Content>
    </Container>
  );
};

export default Input;
