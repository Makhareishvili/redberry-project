import { EmailIcon, PhoneIcon } from "../../icons/svg";

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
  aboutMe: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: " #000000",
    maxHeight: "200px",
    overflow: "auto",
  },
};

const PersonalPageInfoLive = ({ personalInfo }: any) => {
  console.log(personalInfo.image.value);
  return (
    <div style={{ flex: 2, padding: "45px 80px", background: "#FFFFFF" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "2", paddingTop: "20px", flexDirection: "row" }}>
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
              {Boolean(personalInfo.email.value) && (
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
              <p style={{ paddingTop: "35px" }}>ჩემ შესახებ</p>
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
    </div>
  );
};

export default PersonalPageInfoLive;
