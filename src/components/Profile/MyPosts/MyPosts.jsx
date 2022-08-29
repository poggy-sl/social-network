import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from 'redux-form';
import {required, maxLength10} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormsControls';


const MyPosts = (props) => {

  let postsElements = props.posts.map( p => 
    <Post message={p.message} likes={p.likesCount} key={p.key} />
  );

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newPostText" placeholder="Enter new post..." validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;
