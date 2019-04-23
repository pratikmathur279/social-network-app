import React from 'react';

const ProfileDataContent = (props) => {
    console.log(props);
    return(
        <div>
            <div label="Note">
                See ya later, <em>Alligator</em>!
            </div>
            <div label="Followers">
                After &apos;while, <em>Crocodile</em>!
            </div>
            <div label="Following">
                Nothing to see here, this tab is <em>extinct</em>!
            </div>

        </div>
    )
}

export default ProfileDataContent;