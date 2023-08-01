import { FC } from "react";

import { BackButton, BackIcon, Container, Title, Content } from "./styles";
import { HeaderProps } from "./types";
import { useNavigation } from "@react-navigation/native";

const Header: FC<HeaderProps> = ({ title, children, type }) => {
  const { goBack } = useNavigation();

  return (
    <Container type={type} hasChildren={!!children}>
      <Content>
        <BackButton onPress={goBack}>
          <BackIcon type={type} />
        </BackButton>
        {title && <Title>{title}</Title>}
      </Content>
      {children}
    </Container>
  );
};

export default Header;
