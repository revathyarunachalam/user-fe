import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { TextField } from '../../../shared/components/Textfield';
import {
  StyledForm,
} from "./index.styled";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    red: createColor('#F40B27'),
  },
});


const Form = ({ user, onSubmit }) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const resetFormChanges = () => reset(user)

  useEffect(() => {
    resetFormChanges();
  }, [user]);

  console.log(user, errors);

  return (
    <>
    <ThemeProvider theme={theme}>
    <h2>My Profile</h2>
    <StyledForm data-testid="request-form">
      {!(_.isEmpty(errors)) && !success 
        && <Alert severity="error">This is an error alert — check it out!</Alert>}

      {success
        && (
          <>
          <Alert severity="success">Successfully saved</Alert>
          </>
        )}

      {(
          <form
            onSubmit={handleSubmit(async (data) => {
              console.log(data);
              onSubmit(data);
              setSuccess(true);
            })}
          >
            <div className='form-items'>
              <TextField
                name="firstname"
                register={register}
                required="First name is required"
                maxLength={150}
                minLength={2}
                pattern= {{
                  value: /^[a-zA-Z ]*$/,
                  message: 'First name should be alphanumeric'
                }}
                label="First Name"
                error={errors.firstname}
                type="string" />

              <TextField
                name="lastname"
                register={register}
                required="Last name is required"
                maxLength={150}
                minLength={2}
                pattern={{
                  value: /^[a-zA-Z ]*$/,
                  message: 'Last name should be alphanumeric'
                }}
                label="Last Name"
                error={errors.lastname}
                type="string" />

              <TextField
                name="displayname"
                register={register}
                required="Display name is required"
                maxLength={150}
                minLength={2}
                pattern={{
                  value: /^[a-zA-Z ]*$/,
                  message: 'Display name should be alphanumeric'
                }}
                label="Display Name"
                error={errors.displayname}
                type="string" />

              <TextField
                name="email"
                register={register}
                required="Email is required"
                maxLength={30}
                pattern={{
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: 'Invalid email',
                }}
                label="Email"
                error={errors.email}
                type="string" />
              <TextField
                name="phonenumber"
                register={register}
                required="Phone number is required"
                maxLength={15}
                minLength={10}
                pattern={{
                  value: /^\+?[0-9][0-9]{7,14}$/,
                  message: 'Invalid phone number'
                }}
                label="Phone No(work)"
                error={errors.phonenumber}
                type="Bigint" />
              <TextField
                name="phonenumber_secondary"
                register={register}
                // required="Phone number is required"
                maxLength={15}
                minLength={10}
                pattern={{
                  value: /^\+?[0-9][0-9]{7,14}$/,
                  message: 'Invalid phone number'
                }}
                label="Phone No(work)"
                error={errors.phonenumber_secondary}
                type="Bigint" />
              
              <TextField
                name="location"
                register={register}
                // required="Location is required"
                maxLength={150}
                minLength={2}
                pattern={{
                  value: /^[a-zA-Z ]*$/,
                  message: 'location should be alphanumeric'
                }}
                label="Location"
                error={errors.location}
                type="string" />
              
            </div>
            <div className='form-buttons'>
              <Button color="red" type='submit' variant="contained" >Submit</Button>
              <Button color="red" variant="outlined" onClick={resetFormChanges}>Reset</Button>
            </div>
          </form>
        )}
    </StyledForm>
    </ThemeProvider>
    </>
  );
};

export default Form;
