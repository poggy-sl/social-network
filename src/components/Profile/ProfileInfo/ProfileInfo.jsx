import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/png-icon.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React from 'react';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
  const refInput = React.useRef(null);
  
  if(!profile){
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
  if(e.target.files.length){
    savePhoto(e.target.files[0]);
  }
}




  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}></img>
        { isOwner && 
        <div>
          <div className={s.photoChange} onClick={() => refInput.current.click()}></div>
          <input type={"file"} onChange={onMainPhotoSelected} ref={refInput} style={{display: 'none'}} />
        </div>
          }
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      
    </div>
  );
};



export default ProfileInfo;
