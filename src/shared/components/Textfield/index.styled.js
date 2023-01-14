import styled from "styled-components";

const StyledInputFieldContainer = styled.div`
  margin: 0px 10px;
  padding-bottom: 20px;
  .input-field-container {
    display: flex;
    flex-direction: row-reverse;
  }

  svg {
   position: absolute;
  }

  .error-text {
    border: #A82333;
    color: #A82333;
    padding-top: 4px;
    text-align: left;
    font-size: 14px;
  }

  .error-icon {
    display: relative;
    color: #A82333;
    padding: 10px 14px 10px;
  }

  .label {
    height: 16px;
    flex-grow: 0;
    font-size: 15px;
    line-height: 1.2;
    text-align: left;
    color: #0E1720;
    padding: 10px 0px;
  }

  .input-field {
    font-size: 16px;
    text-align: left;
    border: solid 1px #C3CCD5;
    color: #0E1720;
    width: 100%;
    padding-top: 4px;
    padding: 8px;
    background-color: #FFFFFF;
    &.error-input {
      border-color: #A82333;
      padding-right: 30px;
    }
  } 

  input {
    height: 19px;
  }

  textarea {
    height: 48px;
  } 
`;

export default StyledInputFieldContainer;
