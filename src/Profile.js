import React from "react";

const profileData = {
  devJang: {
    name: "gi",
    description: "front engineer "
  },
  hommer: {
    name: "hommer sim",
    description: "sismsmsmsmsm"
  }
};

//자동으로 넣어주는 값입니다.
const Profile = ({ match }) => {
  console.dir("--",match);
  //url parameter
  const { username } = match.params;
  const profile = profileData[username];
  console.log(match.params);
  if (!profile) {
    return <div>Not Found User</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
