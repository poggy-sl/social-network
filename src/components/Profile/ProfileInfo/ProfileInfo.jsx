import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus }) => {
  if(!profile){
    return <Preloader />
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large}></img>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      
    </div>
  );
};

export default ProfileInfo;
