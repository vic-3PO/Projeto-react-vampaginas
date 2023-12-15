import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #fff;
  background: transparent;
  padding: 20px 20px;
  border-radius: 50px;
  width: 70%; /* Adjust width based on your design */
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  position: relative;

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    width: 500px; /* Keep the original width for larger screens */
  }
`;

export default Input;
