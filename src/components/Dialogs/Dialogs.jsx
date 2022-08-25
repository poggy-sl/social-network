import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import React from "react";
import {Navigate} from 'react-router-dom';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.key} id={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.key} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if(props.isAuth === false) return <Navigate to={'/login'} />

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            <div>{ messagesElements }</div>
            <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter a message"></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    </div>
);
}

export default Dialogs;