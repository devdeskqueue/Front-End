import React, { Component } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import Dashboard from "../components/Dashboard";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: fit-content;

  padding: 10px 20px;

  border: 1px solid black;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 50px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;


export default class Ticket extends Component {
  render() {
    return( 
        <Container>
        <NavContainer>
          <LogoContainer>
            <p>DevDesk_Q</p>
          </LogoContainer>
          <NavBar>
            <Link to="login">Log In</Link>
            <Link to="signup">Sign Up</Link>
            <Link to="dashboard">Dashboard</Link>
          </NavBar>
        </NavContainer>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        </Container>
    );

  }
}