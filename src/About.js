import React from "react";
import qs from "qs";

const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === "true";
  return (
    <div>
      About
      <div>{detail && <p>sss</p>}</div>
    </div>
  );
};

export default About;
