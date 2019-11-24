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

const Profile = ({ match }) => {
  console.dir(match);
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
