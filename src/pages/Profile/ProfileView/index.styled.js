import styled from "styled-components";

const ProfileStyled = styled.div`
    font-family: Poppins, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .profile-image {
        width: 70%;
    }

    .profile-info {
        color: rgb(86, 90, 92);
        font-size: 16px;
        padding-bottom: 5px;
    }
`;

export default ProfileStyled;