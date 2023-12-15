import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #fff;
  background: transparent;
  padding: 20px 20px;
  border-radius: 50px;
  width: 500px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  position: relative;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 140px;
    width: 200px;
  }
`;

export default Input;
