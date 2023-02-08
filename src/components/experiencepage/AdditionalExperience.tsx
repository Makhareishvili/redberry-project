import styled from "styled-components";
import AdditionalExperienceInputs from "./AdditionalExperienceInputs";

interface Props {
  allow: boolean;
  setAllow: React.Dispatch<React.SetStateAction<boolean>>;
}
const AdditionalExperience = (props: Props) => {
  const { allow, setAllow } = props;
  return (
    <>
      {allow && <AdditionalExperienceInputs />}
      <AdditionalExperienceButton
        allow={allow}
        onClick={() => setAllow((current) => !current)}
      >
        <AdditionalButtonText>მეტი გამოცდილების დამატება</AdditionalButtonText>
      </AdditionalExperienceButton>
    </>
  );
};
interface Type {
  allow: boolean;
}
const AdditionalExperienceButton = styled.button<Type>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;
  border: none;

  position: absolute;
  width: 289px;
  height: 48px;
  left: ${({ allow }) =>
    allow
      ? "calc(50% - 289px / 2 - 664.5px)"
      : "calc(50% - 289px / 2 - 666.5px)"};
  top: ${({ allow }) => (allow ? "1435px" : "804px")};

  background: #62a1eb;
  border-radius: 4px;

  cursor: pointer;
`;
const AdditionalButtonText = styled.p`
  width: 247px;
  height: 20px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default AdditionalExperience;
