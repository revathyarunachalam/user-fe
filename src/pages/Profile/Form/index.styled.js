import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  background: white;
  .form-items {
    display: grid;
    grid-template-columns: auto auto;
  }
  button {
    margin: 10px;
  }

  svg {
    padding-right: 5px;
  }

  .form-buttons {
    display: flex;
    justify-content: center;
  }

`;

export {
    StyledForm
};
