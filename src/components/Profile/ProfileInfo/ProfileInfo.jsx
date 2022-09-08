import Preloader from '../../common/preloader/Preloader';
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/png-icon.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, { useState } from "react";
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  const refInput = React.useRef(null);
  
  if(!profile){
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
  if(e.target.files.length){
    savePhoto(e.target.files[0]);
  }
}

const onSubmit =  (formData) => {
  saveProfile(formData).then(() => {
    setEditMode(false);
  })
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
          { editMode 
          ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/> 
          : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b> : {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
    </div>
    { profile.lookingForAJob &&
      <div>
        <b>My professional skills</b> : {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b> : {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
    </div>
  </div>
};


const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b> : {contactValue}
  </div>
}



export default ProfileInfo;
