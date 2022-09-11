import s from "./Post.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg"></img>
        <div><FontAwesomeIcon icon={faHeart}/> {props.likes}</div>
      </div>

      <div className={s.postText}>{props.message}</div>
    </div>
  );
};

export default Post;
