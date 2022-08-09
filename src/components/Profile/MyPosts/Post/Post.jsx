import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg"></img>
      {props.message}

      <div>
        <span>Likes </span>
        {props.likes}
      </div>
    </div>
  );
};

export default Post;
