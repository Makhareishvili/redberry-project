import { EmailIcon, PhoneIcon } from "../../icons/svg";
import ResumeIcon from "../../assets/bottomstar.png";

const styles = {
  fullName: {
    lineBreak: "anywhere",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 700,
    fontSize: "34px",
    lineHeight: "42px",
    color: " #F93B1D",
  },
  profileImg: {
    width: "250px",
    height: "250px",
    borderRadius: "133px",
  },
  email: {
    lineBreak: "anywhere",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "350px",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "21px",
    color: " #1A1A1A",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#F93B1D",
    paddingTop: "35px",
    paddingBottom: "15px",
    width: "118px",
    height: "22px",
  },
  aboutMe: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: " #000000",
    maxHeight: "150px",
    overflow: "auto",
    maxWidth: "420px",
    overflowWrap: "break-word",
  },
};

const PersonalPageInfoLive = ({
  personalInfo,
  experienceInfo,
  educationInfo,
  isFinal,
}: any) => {
  return (
    <div
      style={{
        width: `${isFinal && "820px"}`,
        flex: `${!isFinal && 2}`,
        padding: `${!isFinal && "45px 80px"}`,
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
        border: `${isFinal && "1px solid #000000"}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${isFinal && "48px 75px 45px 80px"}`,
          width: "100%",
        }}
      >
        <div>
          {personalInfo && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  flex: "2",
                  paddingTop: "20px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <h1 style={{ ...styles.fullName }}>
                    {personalInfo.firstName.value} {personalInfo.lastName.value}
                  </h1>
                </div>
                <div style={{ paddingTop: "17px", ...styles.email }}>
                  {Boolean(personalInfo.email.value) && (
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <EmailIcon />
                      <span style={{ marginLeft: "10px" }}>
                        {personalInfo.email.value}
                      </span>
                    </p>
                  )}
                  <p style={{ paddingTop: "10px" }}>
                    {Boolean(personalInfo.phone.value) && (
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <PhoneIcon />
                        <span style={{ marginLeft: "10px" }}>
                          {personalInfo.phone.value}
                        </span>
                      </p>
                    )}
                  </p>
                </div>
                {personalInfo.aboutMe.value && (
                  <>
                    <p style={{ ...styles.title }}>ჩემ შესახებ</p>
                    <p style={{ paddingTop: "15px", ...styles.aboutMe }}>
                      {personalInfo.aboutMe.value}
                    </p>
                  </>
                )}
              </div>
              <div style={{ flex: 1.2 }}>
                <div>
                  {personalInfo.image.value && (
                    <img
                      src={personalInfo.image.value}
                      alt="image"
                      style={{ ...styles.profileImg }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
          {experienceInfo && (
            <div
              style={{
                borderTop: "1px solid #C8C8C8",
                marginTop: "20px",
              }}
            >
              <p style={{ ...styles.title, paddingTop: "24px" }}>გამოცდილება</p>
              <div
                style={{
                  display: "flex",
                  paddingTop: "20px",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#1A1A1A",
                    paddingBottom: "7px",
                  }}
                >
                  {experienceInfo.position.value}{" "}
                  {experienceInfo.employer.value}
                </p>
                {Boolean(experienceInfo.startDate.value) && (
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#919191",
                      paddingBottom: "16px",
                    }}
                  >
                    {experienceInfo.startDate.value} -{" "}
                    {experienceInfo.endDate.value}
                  </p>
                )}
                <p
                  style={{
                    maxHeight: "150px",
                    overflow: "auto",
                    overflowWrap: "break-word",
                    //
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "22px",

                    textTransform: "capitalize",
                    lineBreak: "anywhere",
                    color: "#000000",
                  }}
                >
                  {experienceInfo.description.value}
                </p>
              </div>
            </div>
          )}
          {educationInfo && (
            <div
              style={{
                borderTop: "1px solid #C8C8C8",
                marginTop: "20px",
              }}
            >
              <p style={{ ...styles.title, paddingTop: "24px" }}>განათლება</p>
              <div
                style={{
                  display: "flex",
                  paddingTop: "15px",
                  paddingBottom: "7px",
                }}
              >
                <p>
                  {educationInfo.institute.value}
                  {Boolean(educationInfo.degree.value) && <>,</>}
                </p>
                <p style={{ paddingLeft: "15px" }}>
                  {educationInfo.degree.value}
                </p>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#919191",
                  paddingBottom: "15px",
                }}
              >
                {educationInfo.endDate.value}
              </p>
              <p
                style={{
                  maxHeight: "150px",
                  overflow: "auto",
                  overflowWrap: "break-word",
                  //
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "22px",

                  textTransform: "capitalize",
                  lineBreak: "anywhere",
                  color: "#000000",
                }}
              >
                {educationInfo.description.value}
              </p>
            </div>
          )}
        </div>
        <div style={{ bottom: "45px" }}>
          <img src={ResumeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PersonalPageInfoLive;
