import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import React from "react";
import {Navigate} from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.key} id={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.key} id={m.id}/>)
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if(props.isAuth === false) return <Navigate to={'/login'} />

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            <div>{ messagesElements }</div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    </div>
);
}



export default Dialogs;