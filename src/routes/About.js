import React from "react";
import qs from "qs";
const About = ({ match, location }) => {
  const query = qs.parse(location.search,{
    ignoreQueryPrefix:true
  });

  console.log(query)
  return (
    <>
      <div>about {match.params.username}</div>
      <p>Hello</p>
    </>
  )
};

export default About;
