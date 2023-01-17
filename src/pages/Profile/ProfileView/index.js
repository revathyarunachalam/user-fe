import ProfileStyled from "./index.styled";

const ProfileView = ({ user }) => {
    const {
        firstname,
        lastname,
        displayname,
        email,
        phonenumber,
        phonenumber_secondary: secPhoneNumber,
        location,
    } = user;

    return (
        <ProfileStyled>
            <img className="profile-image" src="profile.png" alt="profile" />
            <h2 className="profile-name">{firstname} {lastname} ({displayname})</h2>
            <div className="profile-info" >{email}</div>
            {(phonenumber || secPhoneNumber) 
            && <>
            <div className="profile-info">{phonenumber}</div>
            <div className="profile-info">{secPhoneNumber}</div>
            </>
            }
            {location && <div className="profile-info">{location}</div>}
        </ProfileStyled>
    )
}

export default ProfileView;