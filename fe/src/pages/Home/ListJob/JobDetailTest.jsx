import React, { Component } from "react";
import { useParams } from 'react-router-dom';
const JobDetailTest = () => {
  let { id } = useParams();
  return <h2> got ID with value: {id}</h2>;
};

export default JobDetailTest;
