import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import _ from 'lodash';
import Form from './Form';
import ProfileView from './ProfileView';
import { getUser, updateUser } from '../../shared/api/user';

const Profile = () => {

    const [user, setUser] = useState({})

    const getUserData = async () => {
        const userResponse = await getUser();
        setUser(userResponse);
    }

    useEffect(() => {
        getUserData();
    }, [])

    const {
        displayname,
    } = user;

    const onSubmit = async (user) => {
        console.log('In onSubmit');
        await updateUser(user);
        await getUserData();
    }

  return (
    <Box
        sx={{ flexGrow: 1, textAlign: 'left', paddingLeft: '20px' }}
    >
        <h1>Good Morning, {displayname}</h1>
        <Box
            sx={{ display: 'flex', flexGrow: 1, height: '100%', width: '100%'}}
        >
            <Box
                sx={{ flexGrow: 1, width: '70%' }}
            >
                {<Form user={user} onSubmit={onSubmit} />}
            </Box>
            <Box
                sx={{ display: 'flex', flexGrow: 1, width: { sm: '30%' }, background: 'white'}}
            >
                <ProfileView user={user} />
            </Box>
        </Box>
    </Box>
  );
}

export default Profile;