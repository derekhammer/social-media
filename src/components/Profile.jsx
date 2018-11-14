import React from "react";
import ProfileColorBlock from "./ProfileColorBlock";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";

function Profile(){
    return(
        <div>
            <ProfileColorBlock/>
            <ProfileImage/>
            <ProfileName/>
        </div>
    );
}

export default Profile;