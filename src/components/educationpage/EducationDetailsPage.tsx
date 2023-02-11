import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import vector from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const styles = {
  generalLabel: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "35px",
    color: "#000000",
  },
  generalInput: {
    background: "#FFFFFF",
    border: "1px solid #BCBCBC",
    borderRadius: "4px",
    width: "100%",
    height: "48px",
  },
  inputHelper: {
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#2E2E2E",
  },
};

const InputContainer = (props: any) => {
  const { educationInfo, setEducationInfo, onSaveLocalStorage } = props;
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    let isAllFieldGood = true;
    let result = { ...educationInfo };
    Object.keys(educationInfo).forEach((key) => {
      let obj = educationInfo[key];
      if (obj.required) {
        obj.validation = obj.value && obj.value.trim().length >= obj.min;
        if (isAllFieldGood) {
          isAllFieldGood = obj.value && obj.value.trim().length >= obj.min;
        }

        if (obj.regex) {
          obj.validation = checkRegex(key, obj.value);
          if (isAllFieldGood) {
            isAllFieldGood = checkRegex(key, obj.value);
          }
        }
      } else if (obj.regex) {
        obj.validation = obj.value ? checkRegex(key, obj.value) : true;
        if (isAllFieldGood) {
          isAllFieldGood = obj.value ? checkRegex(key, obj.value) : true;
        }
      } else {
        obj.validation = true;
      }
      result[key] = obj;
    });
    setEducationInfo(result);
    if (isAllFieldGood) {
      navigate("/final");
    }
  };

  const onChange = (key: any, value: any) => {
    let obj = educationInfo[key];
    obj.value = value;

    if (obj.required) {
      obj.validation =
        value && obj.min <= value.trim().length && checkRegex(key, value);
    }

    setEducationInfo({ ...educationInfo, obj });
    onSaveLocalStorage({ ...educationInfo, obj }, "educationInfo");
  };

  const checkRegex = (key: any, value: any) => {
    let obj = educationInfo[key];
    return new RegExp(obj.regex).test(value);
  };
  const isFieldErorr = (key: any) => {
    let obj = educationInfo[key];
    if (obj.validation === null || obj.validation) {
      return true;
    }

    return false;
  };

  const getLabelStyles = (key: any): any => {
    let obj = { ...styles.generalLabel };
    isFieldErorr(key) ? (obj.color = "black") : (obj.color = "red");
    return obj;
  };

  const getInputStyles = (key: any): any => {
    let obj = educationInfo[key];
    let temp = { ...styles.generalInput };
    if (obj.validation) {
      temp.border = "1px solid #98E37E";
    } else {
      !isFieldErorr(key) && (temp.border = "1px solid red");
    }
    return temp;
  };

  return (
    <>
      <div style={{ flex: 3, background: "#F9F9F9" }}>
        <Link to={"/personalInfo"}>
          <BackButton>
            <img src={vector} />
          </BackButton>
        </Link>
        <div style={{ padding: "45px 149px" }}>
          <Header>
            <span>განათლება</span>
            <PageNumber>3/3</PageNumber>
          </Header>
          <div
            style={{
              paddingTop: "70px",
              borderBottom: "1px solid #C1C1C1",
              paddingBottom: "50px",
            }}
          >
            <div style={{ paddingBottom: "30px" }}>
              <div style={{ ...getLabelStyles("institute") }}>სასწვლებელი</div>
              <input
                style={{ ...getInputStyles("institute") }}
                onChange={(e) => onChange("institute", e.target.value)}
              />
              <p style={{ ...styles.inputHelper }}>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "55px",
                paddingBottom: "30px",
              }}
            >
              <div style={{ width: "100%" }}>
                <label style={{ ...getLabelStyles("degree") }}>
                  ხარისხი (დროპ-დაუნ ლისტი)
                </label>
                <input
                  style={{ ...getInputStyles("degree") }}
                  onChange={(e) => onChange("degree", e.target.value)}
                />
                <p style={{ ...styles.inputHelper }}>მინიმუმ 2 სიმბოლო</p>
              </div>
              <div style={{ width: "100%" }}>
                <label style={{ ...getLabelStyles("endDate") }}>
                  დამთავრების რიცხვი
                </label>
                <input
                  style={{ ...getInputStyles("endDate") }}
                  onChange={(e) => onChange("endDate", e.target.value)}
                  type="date"
                />
              </div>
            </div>
            <div>
              <label style={{ ...getLabelStyles("description") }}>აღწერა</label>
              <input
                style={{ ...getInputStyles("description") }}
                onChange={(e) => onChange("description", e.target.value)}
              />
            </div>
          </div>
          <button type="submit">
            <p>უკან</p>
          </button>
          <button type="submit">
            <p onClick={(e) => onSubmit(e)}>დასრულება</p>
          </button>
        </div>
      </div>
    </>
  );
};
const BackButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 48px;
  top: 45px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const PageNumber = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
export default InputContainer;
