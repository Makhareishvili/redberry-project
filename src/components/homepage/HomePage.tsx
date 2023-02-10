import styled from "styled-components";
import homelogo from "../../assets/home.png";
import logo from "../../assets/redberry.png";
import logo2 from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container>
      <Header>
        <img src={logo} />
      </Header>
      <Body>
        <img
          src={logo2}
          width={"300px"}
          height={"300px"}
          style={{ position: "fixed", right: 545, bottom: 308 }}
        />
        <Link to={"/personalinfo"}>
          <Button>რეზიუმის შექმნა</Button>
        </Link>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  padding: 25px 70px;
  background-image: url(${homelogo});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = styled.div`
  border-bottom: 1px solid #1a1a1a;
  height: 65px;
`;

const Body = styled.div``;

const Button = styled.button`
  width: 464px;
  padding: 18px 60px;
  position: fixed;
  left: calc(50% - 464px / 2);
  top: 395px;
  background: #1a1a1a;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
`;

export default Homepage;
