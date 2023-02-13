import { Link } from "react-router-dom";
import styled from "styled-components";
import vector from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import doneLogo from "../../assets/done.png";
import errorLogo from "../../assets/error.png";

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

const EInputContainer = (props: any) => {
  const { experienceInfo, setExperienceInfo, onSaveLocalStorage } = props;
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    let isAllFieldGood = true;
    let result = { ...experienceInfo };
    Object.keys(experienceInfo).forEach((key) => {
      let obj = experienceInfo[key];
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
    setExperienceInfo(result);
    if (isAllFieldGood) {
      navigate("/educationinfo");
    }
  };

  const onChange = (key: any, value: any) => {
    let obj = experienceInfo[key];
    obj.value = value;

    if (obj.required) {
      obj.validation =
        value && obj.min <= value.trim().length && checkRegex(key, value);
    }

    setExperienceInfo({ ...experienceInfo, obj });
    onSaveLocalStorage({ ...experienceInfo, obj }, "experienceInfo");
  };

  const checkRegex = (key: any, value: any) => {
    let obj = experienceInfo[key];
    return new RegExp(obj.regex).test(value);
  };

  const isFieldErorr = (key: any) => {
    let obj = experienceInfo[key];
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
    let obj = experienceInfo[key];
    let temp = { ...styles.generalInput };
    if (obj.validation) {
      temp.border = "1px solid #98E37E";
    } else {
      !isFieldErorr(key) && (temp.border = "1px solid red");
    }
    return temp;
  };
  const getErrorStyles = (key: any) => {
    let obj = experienceInfo[key];
    if (obj.validation) {
      return {
        backgroundImage: `url(${doneLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
      };
    } else if (!isFieldErorr(key)) {
      return {
        backgroundImage: `url(${errorLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
      };
    }
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
            <span>გამოცდილება</span>
            <PageNumber>2/3</PageNumber>
          </Header>
          <div
            style={{
              paddingTop: "70px",
              borderBottom: "1px solid #C1C1C1",
              paddingBottom: "50px",
            }}
          >
            <div style={{ paddingBottom: "30px" }}>
              <div style={{ ...getLabelStyles("position") }}>თანამდებობა</div>
              <input
                style={{
                  ...getInputStyles("position"),
                  ...getErrorStyles("position"),
                }}
                onChange={(e) => onChange("position", e.target.value)}
                value={experienceInfo.position.value}
              />
              <p style={{ ...styles.inputHelper }}>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <label style={{ ...getLabelStyles("employer") }}>
                დამსაქმებელი
              </label>
              <input
                style={{
                  ...getInputStyles("employer"),
                  ...getErrorStyles("employer"),
                }}
                onChange={(e) => onChange("employer", e.target.value)}
                value={experienceInfo.employer.value}
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
                <label style={{ ...getLabelStyles("startDate") }}>
                  დაწყების რიცხვი
                </label>
                <input
                  style={{ ...getInputStyles("startDate") }}
                  onChange={(e) => onChange("startDate", e.target.value)}
                  type="date"
                  value={experienceInfo.startDate.value}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label style={{ ...getLabelStyles("endDate") }}>
                  დამთავრების რიცხვი
                </label>
                <input
                  style={{ ...getInputStyles("endDate") }}
                  onChange={(e) => onChange("endDate", e.target.value)}
                  type="date"
                  value={experienceInfo.endDate.value}
                />
              </div>
            </div>
            <div>
              <label style={{ ...getLabelStyles("description") }}>აღწერა</label>
              <textarea
                style={{
                  ...getInputStyles("description"),
                  resize: "none",
                  height: "120px",
                }}
                onChange={(e) => onChange("description", e.target.value)}
                value={experienceInfo.description.value}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "80px",
            }}
          >
            <Link to={"/personalinfo"}>
              <BackBottomButton type="submit">
                <p>უკან</p>
              </BackBottomButton>
            </Link>
            <Link to={"/educationinfo"}>
              <NextButton type="submit">
                <p onClick={(e) => onSubmit(e)}>შემდეგი</p>
              </NextButton>
            </Link>
          </div>
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
const NextButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: #ffffff;
  width: 151px;
  height: 48px;
  background: #6b40e3;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
const BackBottomButton = styled.button`
  width: 113px;
  height: 48px;
  background: #6b40e3;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: #ffffff;
`;

const PageNumber = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export default EInputContainer;
