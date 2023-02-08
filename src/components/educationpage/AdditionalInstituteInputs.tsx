import styled from "styled-components";

const AdditionalInstituteInputs = () => {
  return (
    <>
      <AdditionalInstituteButton>
        <AdditionalButtonText>სხვა სასწავლებლის დამატება</AdditionalButtonText>
      </AdditionalInstituteButton>
    </>
  );
};
const AdditionalInstituteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 60px;
  gap: 20px;

  position: absolute;
  width: 289px;
  height: 48px;
  left: calc(50% - 289px / 2 - 665.5px);
  top: 719px;

  background: #62a1eb;
  border-radius: 4px;

  border: none;
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
export default AdditionalInstituteInputs;
