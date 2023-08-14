import { FC } from "react";
import Space from "@components/Space";
import { Label } from "./styles";

import { TextErrorProps } from "./types";

const TextError: FC<TextErrorProps> = ({ message }) => {
  return (
    <>
      <Space size={2} />
      {message ? <Label>{message}</Label> : null}
    </>
  );
};

export default TextError;
