import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength50} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormsControls';
import s from '../../Profile/MyPosts/MyPosts.module.css';


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field className={s.enterMessage} component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter a message"/></div>
                <div><button className={s.addPostButton}>Send</button></div>
            </form>
    )
}

export default reduxForm({
    form: "dialogAddMessageForm",
})(AddMessageForm);