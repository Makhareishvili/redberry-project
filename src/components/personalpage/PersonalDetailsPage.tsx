import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";

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
    height: "48px",
    width: "100%",
  },
  inputHelper: {
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "35px",
    color: "#2E2E2E",
  },
  imgText: {
    backgroundColor: "#0E80BF",
    color: "white",
    padding: "4px 19px",
    cursor: "pointer",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
    borderRadius: "4px",
  },
};

const PersonalDetailsPage = (props: any) => {
  const { personalInfo, setPersonalInfo } = props;
  const imgInputRef = useRef<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    let result = { ...personalInfo };
    Object.keys(personalInfo).forEach((key) => {
      let obj = personalInfo[key];
      if (obj.required) {
        obj.validation = obj.value && obj.value.trim().length >= obj.min;

        if (obj.regex) {
          obj.validation = checkRegex(key, obj.value);
        }
      } else {
        obj.validation = true;
      }
      result[key] = obj;
    });
    setPersonalInfo(result);
  };
  //
  const setPhoneValue = () => {
    let value = personalInfo.phone.value;
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (i < 4) {
        result += value[i];
      } else if (i === 4) {
        result += " " + value[i];
      } else if (i >= 5 && i <= 6) {
        result += value[i];
      } else if (i === 7 || i === 8) {
        if (i === 7) {
          result += " " + value[i];
        } else {
          result += value[i];
        }
      } else if (i === 9 || i === 10) {
        if (i === 9) {
          result += " " + value[i];
        } else {
          result += value[i];
        }
      } else if (i === 11 || i === 12) {
        if (i === 11) {
          result += " " + value[i];
        } else {
          result += value[i];
        }
      }
    }
    return result;
  };
  //
  const checkRegex = (key: any, value: any) => {
    let obj = personalInfo[key];
    return obj.regex?.test(value);
  };
  const onChange = (key: any, value: any) => {
    let obj = personalInfo[key];
    obj.value = value;

    if (obj.required) {
      //
      if (key === "phone") {
        obj.value = value.replaceAll(" ", "");
        obj.validation = value && checkRegex(key, obj.value);
      } else {
        obj.validation =
          value && obj.min <= value.trim().length && checkRegex(key, value);
      }
      //
    }
    setPersonalInfo({ ...personalInfo, obj });
  };

  const isFieldErorr = (key: any) => {
    let obj = personalInfo[key];
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
    let obj = personalInfo[key];
    let temp = { ...styles.generalInput };
    if (obj.validation) {
      temp.border = "1px solid #98E37E";
    } else {
      !isFieldErorr(key) && (temp.border = "1px solid red");
    }
    return temp;
  };

  const onImageChange = (event: any) => {
    const [files]: any = event.target.files;
    let value = URL.createObjectURL(files);
    let image = personalInfo.image;
    image.validation = true;
    image.value = value;
    setPersonalInfo({ ...personalInfo, image: image });
  };

  return (
    <div style={{ flex: 3, background: "#F9F9F9" }}>
      <Link to={"/"}>
        <BackButton>
          <img src={vector} />
        </BackButton>
      </Link>
      <div style={{ padding: "45px 149px" }}>
        <Header>
          <span>პირადი ინფორმაცია</span>
          <PageNumber>1/3</PageNumber>
        </Header>
        <div style={{ paddingTop: "70px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "55px",
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ ...getLabelStyles("firstName") }}>სახელი</div>
              <input
                style={{ ...getInputStyles("firstName") }}
                onChange={(e) => onChange("firstName", e.target.value)}
              />
              <p style={{ ...styles.inputHelper }}>
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ ...getLabelStyles("lastName") }}>გვარი</div>
              <input
                style={{ ...getInputStyles("lastName") }}
                onChange={(e) => onChange("lastName", e.target.value)}
              />
              <p style={{ ...styles.inputHelper }}>
                მინიმუმ 2 სიმბოლო, ქართული ასოები
              </p>
            </div>
          </div>
          <div
            style={{
              paddingTop: "54px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <label style={{ ...getLabelStyles("image") }}>
              პირადი ფოტოს ატვირთვა
            </label>
            <input id="file" type="file" style={{ display: "none" }} />
            <label
              style={{
                ...styles.imgText,
              }}
              onClick={() => imgInputRef.current.click()}
            >
              ატვირთვა
            </label>
            <input
              type={"file"}
              onChange={(event) => onImageChange(event)}
              hidden
              ref={imgInputRef}
            />
          </div>
          <div style={{ paddingTop: "54px" }}>
            <div style={{ ...getLabelStyles("aboutMe") }}>
              ჩემ შესახებ (არასავალდებულო)
            </div>
            <input
              style={{ ...getInputStyles("aboutMe") }}
              onChange={(e) => onChange("aboutMe", e.target.value)}
            />
          </div>
          <div style={{ paddingTop: "33px" }}>
            <div style={{ ...getLabelStyles("email") }}>ელ.ფოსტა</div>
            <input
              style={{ ...getInputStyles("email"), width: "100%" }}
              onChange={(e) => onChange("email", e.target.value)}
            />
            <p style={{ ...styles.inputHelper }}>
              უნდა მთავრდებოდეს @redberry.ge-ით
            </p>
          </div>
          <div style={{ paddingTop: "29px" }}>
            <div style={{ ...getLabelStyles("phone") }}>მობილურის ნომერი</div>
            <input
              style={{ ...getInputStyles("phone"), width: "100%" }}
              onChange={(e) => onChange("phone", e.target.value)}
              value={setPhoneValue()}
              maxLength={17}
            />
            <p style={{ ...styles.inputHelper }}>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </div>
        <NextButton type="submit" onClick={(e) => onSubmit(e)}>
          შემდეგი
        </NextButton>
      </div>
    </div>
  );
};

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

const NextButton = styled.button`
  float: right;
  width: 150px;
  height: 48px;
  right: 1200px;
  bottom: 65px;
  background: #6b40e3;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  margin-top: 20px;

  cursor: pointer;
`;

export default PersonalDetailsPage;
