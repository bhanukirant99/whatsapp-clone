import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from '../../firebase';

function Chat() {
    const [input, setinput] = useState("");
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        const message = input;
        setinput("")
        console.log(message)
    }

    return (
        <div className='chat'>
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} className='sidebarChat_avatar'/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className="chat_name">name</span>
                        hi
                    <span className="chat_timeStamp">
                        4:11pm
                    </span>
                </p>
            </div>
            <div className="chat_footer">
                <EmojiEmotionsIcon />
                <form>
                    <input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
