import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={d.dialogs}>
            < div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='enter your message'
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}