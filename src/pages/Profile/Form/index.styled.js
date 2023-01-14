import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10%;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  .form-items {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  button {
    margin: 10px;
  }

  svg {
    padding-right: 5px;
  }

`;

export {
    StyledForm
};
