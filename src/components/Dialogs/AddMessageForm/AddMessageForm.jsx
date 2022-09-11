import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength50} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormsControls';



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter a message"/></div>
                <div><button>Send</button></div>
            </form>
    )
}

export default reduxForm({
    form: "dialogAddMessageForm",
})(AddMessageForm);