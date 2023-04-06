import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import ThemeSwitcher from '../features/theme/ThemeSwitcher';
import { useClearUp } from '../features/controls/useClearUp';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;


export const Header = () => {
  const clearUp = useClearUp();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={clearUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
