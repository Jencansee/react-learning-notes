import styled from 'styled-components';
import ModalCard from './Card/Card';
import { StyledButton } from './Button';
import { BackDrop } from './Backdrop';
import ReactDOM from 'react-dom';

const Header = styled.header`
  padding: 40px;
  background-color: #315C64;
  color: #fff; font-weight: 600; border-top-left-radius: 14px; border-top-right-radius: 14px;
  h2 { margin: 0; }
`;

const Content = styled.div`
  text-align: left;
  padding: 20px 40px; font-size: 1.2rem;
  background-color: #fff;
`;

const ErrorModal = props => {
  return(
    <>
      { ReactDOM.createPortal(<BackDrop onClick={props.closeModal} />, document.getElementById('backdrop-root')) }
      { ReactDOM.createPortal(
        <ModalCard modal={props.modal}>
          <Header><h2>{props.title}</h2></Header>
          <Content><p>{props.content}</p></Content>
          <StyledButton btnWidth='60%' margin="0 auto" onClick={props.closeModal}>Got it</StyledButton>
        </ModalCard>,
        document.getElementById('overlay-root')
      ) }
    </>
  );
};

export default ErrorModal;