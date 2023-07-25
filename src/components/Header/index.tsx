import { FC } from "react";

import { BackButton, BackIcon, Container, Title, Content } from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ title, children, type }) => {
  return (
    <Container type={type} hasChildren={!!children}>
      <Content>
        <BackButton>
          <BackIcon type={type} />
        </BackButton>
        {title && <Title>{title}</Title>}
      </Content>
      {children}
    </Container>
  );
};

export default Header;
