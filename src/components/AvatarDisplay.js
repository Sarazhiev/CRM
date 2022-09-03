import React from 'react';
import blankAvatar from '../images/user.jpeg'

const AvatarDisplay = ({ticket}) => {
    return (
        <div className='avatar-container'>
            <div className='img-container'>
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt="avatar of profile"/>

            </div>
        </div>
    );
};

export default AvatarDisplay;