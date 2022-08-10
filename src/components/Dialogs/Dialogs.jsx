import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
    .map( d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages
    .map( m => <Message message={m.message} />)
    
    let newMessage = React.createRef();

    let sendMessage = () => {
        let msg = newMessage.current.value;
        alert(msg);
    }

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
        <div>
            <div>
                <textarea ref = { newMessage }></textarea>
            </div>
            <div>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </div>
    </div>
);
}

export default Dialogs;