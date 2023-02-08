import styled from "styled-components";
import homelogo from "../../assets/home.png";
import redberrylogo from "../../assets/redberry.png";
import logo from "../../assets/logo.png";

const Homepage = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <RedberryDiv></RedberryDiv>
        <Hr />
        <LogoDiv></LogoDiv>
        <Button>
          <P>რეზიუმეს დამატება</P>
        </Button>
      </MainContainer>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #ffffff;
`;

const MainContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  background-image: url(${homelogo});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RedberryDiv = styled.div`
  position: absolute;
  width: 236px;
  height: 38px;
  left: 70px;
  top: 25px;
  background-image: url(${redberrylogo});
  background-repeat: no-repeat;
`;

const Hr = styled.hr`
  position: absolute;
  height: 0px;
  left: 70px;
  right: 70px;
  top: 89px;

  /* off black */

  border: 1px solid #1a1a1a;
`;

const LogoDiv = styled.div`
  position: absolute;
  width: 299px;
  height: 299px;
  left: 1076px;
  top: 473px;

  background: url(${logo});
  mix-blend-mode: multiply;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;

  position: absolute;
  width: 464px;
  height: 60px;
  left: calc(50% - 464px / 2);
  top: 513px;

  /* off black */

  background: #1a1a1a;
  border-radius: 8px;
`;

const P = styled.p`
  width: 212px;
  height: 24px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default Homepage;
