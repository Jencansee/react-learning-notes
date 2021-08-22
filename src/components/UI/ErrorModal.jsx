import styled from 'styled-components';
import ModalCard from './Card/Card';
import { StyledButton } from './Button';
import { BackDrop } from './Backdrop';

const Header = styled.header`
  padding: 40px 0;
  background-color: #315C64;
  color: #fff; font-weight: 600; border-top-left-radius: 14px; border-top-right-radius: 14px;
  h2 { margin: 0;  }
`;

const Content = styled.div`
  text-align: left;
  padding: 20px 40px; font-size: 1.2rem;
  background-color: #fff;
`,

Footer = styled.footer``;

const ErrorModal = props => {
  return(
    <>
      <BackDrop onClick={props.closeModal} />
      <ModalCard modal={props.modal}>
        <Header>
          <h2>{props.title}</h2>
        </Header>

        <Content>
          <p>{props.content}</p>
        </Content>
        <Footer>
          <StyledButton btnWidth='60%' onClick={props.closeModal}>Got it</StyledButton>
        </Footer>
      </ModalCard>
    </>
  );
};

export default ErrorModal;