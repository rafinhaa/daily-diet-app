import { FC } from "react";
import { LoadingProps } from "./types";
import { Container, LoadingIndicator } from "./styles";

const Loading: FC<LoadingProps> = ({ size = "large", ...rest }) => {
  return (
    <Container>
      <LoadingIndicator size={size} {...rest} />
    </Container>
  );
};

export default Loading;
