import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {

  //   }, [dispatch]);

  return (
    <>
      <h1>Home Screen</h1>
    </>
  );
};

export default HomeScreen;
