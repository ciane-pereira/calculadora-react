import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}     
      </ButtonContainer>
    );
  }
  
  export default Button;

//se precisar alterar button da aplicação é aqui que faço, refletar em todas as páginas 