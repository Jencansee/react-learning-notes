import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 14px; box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ModalCard = styled(StyledCard)`
   position: fixed; z-index: 35;
   top: 50%; left: 50%;
   transform: translate(-50%, -50%);
   width: 40%; min-height: 320px;
   display: flex; justify-content: space-between; flex-direction: column;
   background-color: #fff;
   padding-bottom: 40px;
`;

const Card = props => {
  return props.modal ? <ModalCard>{props.children}</ModalCard>
    : <StyledCard className={props.className}>{ props.children }</StyledCard>
};

export default Card;