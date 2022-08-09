
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
      
    </div>
  );
};

export default ProfileInfo;
