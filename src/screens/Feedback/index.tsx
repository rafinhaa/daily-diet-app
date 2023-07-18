import { FC } from "react";
import { Container, FeedbackImage } from "./styles";
import { Button, Space, Typographic } from "@components";

import feedbackSuccess from "../../assets/images/feedback-success.png";
import feedbackFail from "../../assets/images/feedback-fail.png";

const Feedback: FC = () => {
  const SuccessMessage: FC = () => (
    <Typographic.Body bold={false}>
      Você continua <Typographic.Body bold>dentro da dieta.</Typographic.Body>{" "}
      Muito bem!
    </Typographic.Body>
  );

  const FailMessage: FC = () => (
    <Typographic.Body bold={false} style={{ textAlign: "center" }}>
      Você <Typographic.Body bold>saiu da dieta.</Typographic.Body> dessa vez,
      mas continue se esforçando e não desista!
    </Typographic.Body>
  );

  const SuccessTitle: FC = () => (
    <Typographic.Title size="EXTRA_LARGE" color="GREEN_DARK">
      Parabéns!
    </Typographic.Title>
  );

  const FailTitle: FC = () => (
    <Typographic.Title size="EXTRA_LARGE" color="RED_DARK">
      Que Pena!
    </Typographic.Title>
  );

  const FeedbackMapping = {
    success: {
      Message: SuccessMessage,
      image: feedbackSuccess,
      Title: SuccessTitle,
    },
    fail: {
      Message: FailMessage,
      image: feedbackFail,
      Title: FailTitle,
    },
  }["success"];

  return (
    <Container>
      <FeedbackMapping.Title />
      <Space size={8} />
      <FeedbackMapping.Message />
      <Space size={40} />
      <FeedbackImage source={FeedbackMapping.image} />
      <Space size={32} />
      <Button label="Ir para a página inicial" />
    </Container>
  );
};

export default Feedback;
