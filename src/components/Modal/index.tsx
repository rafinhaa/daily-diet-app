import { FC, useState } from "react";
import { Backdrop, ButtonWrapper, Container, Content, Title } from "./styles";
import Button from "../Button";
import Space from "../Space";
import { ModalProps } from "./types";
import { Dimensions, LayoutChangeEvent } from "react-native";

const Modal: FC<ModalProps> = ({
  onRequestClose,
  onRequestConfirm,
  primaryButtonLabel,
  secondaryButtonLabel,
  title,
  ...rest
}) => {
  const [topDistance, setTopDistance] = useState(0);

  const handleContentHeight = (e: LayoutChangeEvent) => {
    const deviceHeight = Dimensions.get("screen").height;
    const contentHeight = e.nativeEvent.layout.height;
    const centerScreen = deviceHeight / 2 - contentHeight / 2;

    setTopDistance(centerScreen);
  };

  return (
    <Container animationType="fade" transparent={true} {...rest}>
      <Backdrop onPress={onRequestClose} />
      <Content onLayout={handleContentHeight} topDistance={topDistance}>
        {title && <Title size="LARGE">{title}</Title>}
        <Space size={32} />
        <ButtonWrapper>
          {secondaryButtonLabel && (
            <Button
              label={secondaryButtonLabel}
              variant="secondary"
              onPress={onRequestClose}
            />
          )}
          {primaryButtonLabel && (
            <Button label={primaryButtonLabel} onPress={onRequestConfirm} />
          )}
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default Modal;
