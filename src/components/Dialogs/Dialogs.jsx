import React from 'react'
import d from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
    const newMessageElement = React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current.value;
        alert(text)
    };
    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={d.dialogs}>
            < div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}/>
            </div>
            <div>
                <button onClick={addMessage}>отправить</button>
            </div>
        </div>
    )
}