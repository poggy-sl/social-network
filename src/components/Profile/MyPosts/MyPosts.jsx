import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from 'redux-form';
import {required, maxLength100} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormsControls';


const MyPosts = React.memo(props => {

  let postsElements = 
    [...props.posts]
      .reverse()
      .map( p => 
        <Post key={p.id} message={p.message} likes={p.likesCount} />
      );

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3 className={s.title}>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field className={s.enterPost} component={Textarea} name="newPostText" placeholder="Enter new post..." validate={[required, maxLength100]} />
        </div>
        <div>
          <button className={s.addPostButton}>Add post</button>
        </div>
      </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;
