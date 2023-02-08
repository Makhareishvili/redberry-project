import styled from "styled-components";
import vector from "../../assets/Vector.png";

const InputContainer = (props: any) => {
  const { setFirstName, setLastName } = props;
  return (
    <>
      <BackDiv>
        <Ellipse>
          <Img src={vector} />
        </Ellipse>
      </BackDiv>
      <PersonalInfo>პირადი ინფო</PersonalInfo>
      <PageNumber>1/3</PageNumber>
      <Line />
      <form>
        <NameDiv>
          <NameLabel>სახელი</NameLabel>
          <NameInput onChange={(e) => setFirstName(e.target.value)} />
          <NameInputHint>მინიმუმ 2 ასო, ქართული ასოები</NameInputHint>
        </NameDiv>
        <LastNameDiv>
          <LastNameLabel>გვარი</LastNameLabel>
          <LastNameInput onChange={(e) => setLastName(e.target.value)} />
          <LastNameHint>მინიმუმ 2 ასო, ქართული ასოები</LastNameHint>
        </LastNameDiv>
        <div>
          <PhotoUploadText>პირადი ფოტოს ატვირთვა</PhotoUploadText>
          <UploadInput />
        </div>
        <AboutMeDiv>
          <AboutMe>ჩემ შესახებ (არასავალდებულო)</AboutMe>
          <AboutMeTextarea />
        </AboutMeDiv>
        <EmailDiv>
          <EmailLabel>ელ.ფოსტა</EmailLabel>
          <EmailInput />
          <EmailInputHint>უნდა მთავრდებოეს @redberry.ge-ით</EmailInputHint>
        </EmailDiv>
        <PhoneDiv>
          <PhoneLabel>მობილურის ნომერი</PhoneLabel>
          <PhoneInput />
          <PhoneInputHint>
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </PhoneInputHint>
        </PhoneDiv>
        <NextButton>
          <NextButtonText>შემდეგი</NextButtonText>
        </NextButton>
      </form>
    </>
  );
};

const PersonalInfo = styled.p`
  position: absolute;
  width: 179px;
  height: 29px;
  left: 149px;
  top: 47px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  /* off black */

  color: #1a1a1a;
`;

const PageNumber = styled.p`
  position: absolute;
  width: 29px;
  height: 24px;
  left: 920px;
  top: 49px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: right;

  /* off black */

  color: #1a1a1a;
`;

const Line = styled.hr`
  position: absolute;
  width: 798px;
  height: 0px;
  left: 150px;
  top: 88px;

  /* off black */

  border: 1px solid #1a1a1a;
`;

const BackDiv = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;
`;

const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;

  border-radius: 20px;

  background: #ffffff;
`;

const Img = styled.img`
  /* position: absolute; */
  width: 9.21px;
  height: 16px;
  left: 62px;
  top: 57px;

  /* შავი/500 */

  /* background: #2e2e2e; */
`;
// First Name
const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 419px;
  height: 122px;
  left: calc(50% - 419px / 2 - 624.5px);
  top: 157px;
`;
const NameLabel = styled.div`
  width: 371px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const NameInput = styled.input`
  box-sizing: border-box;

  width: 371px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
const NameInputHint = styled.p`
  width: 371px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* შავი/500 */

  color: #2e2e2e;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;
// Last Name
const LastNameDiv = styled(NameDiv)`
  left: calc(50% - 419px / 2 - 197.5px);
`;
const LastNameLabel = styled(NameLabel)``;
const LastNameInput = styled(NameInput)``;
const LastNameHint = styled(NameInputHint)``;
// Photo upload
const PhotoUploadText = styled.p`
  position: absolute;
  width: 232px;
  height: 22px;
  left: 150px;
  top: 325px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  /* off black */

  color: #1a1a1a;
`;
const UploadInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 12px;
  gap: 10px;

  position: absolute;
  width: 107px;
  height: 27px;
  left: 401px;
  top: 325px;

  background: #0e80bf;
  border-radius: 4px;

  border: none;

  width: 69px;
  height: 17px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
// About me
const AboutMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 148px;
  left: calc(50% - 846px / 2 - 411px);
  top: 393px;
`;
const AboutMe = styled.label`
  width: 798px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const AboutMeTextarea = styled.textarea`
  box-sizing: border-box;

  width: 798px;
  height: 103px;

  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;

  resize: none;
`;
// Email
const EmailDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 122px;
  left: calc(50% - 846px / 2 - 411px);
  top: 558px;
`;
const EmailLabel = styled.label`
  width: 798px;
  height: 21px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const EmailInput = styled(NameInput)`
  width: 798px;
`;
const EmailInputHint = styled(NameInputHint)`
  width: 798px;
`;
// Phone
const PhoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 24px;
  gap: 8px;

  position: absolute;
  width: 846px;
  height: 122px;
  left: calc(50% - 846px / 2 - 411px);
  top: 693px;
`;
const PhoneLabel = styled(NameLabel)``;
const PhoneInput = styled(EmailInput)``;
const PhoneInputHint = styled(EmailInputHint)``;
// Next Button
const NextButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;

  border: none;
  position: absolute;
  width: 151px;
  height: 48px;
  right: 972px;
  bottom: 65px;

  background: #6b40e3;
  border-radius: 4px;
`;
const NextButtonText = styled.p`
  width: 81px;
  height: 20px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export default InputContainer;
