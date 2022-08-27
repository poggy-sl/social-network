import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg"></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}></img>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      
    </div>
  );
};

export default ProfileInfo;
