import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.push("/posts")}>홈</button>
    </div>
  );
};

export default Home;
