import React from "react";
import qs from "qs";

const About = ({ match }) => {
  return <div>about {match.params.username}</div>;
};

export default About;
