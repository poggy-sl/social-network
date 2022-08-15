import React from "react";
import styles from "./users.module.css";


let Users = (props) => {
    if(props.users.length === 0){
    props.setUsers([
            {id: 1, followed: false, photoUrl: 'https://mir-optik.ru/i/Stati/tony.png', fullName: 'Dmitriy', status: 'I`m a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, followed: true, photoUrl: 'https://mir-optik.ru/i/Stati/tony.png', fullName: 'Sasha', status: 'I`m a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, followed: false, photoUrl: 'https://mir-optik.ru/i/Stati/tony.png', fullName: 'Andrew', status: 'I`m a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
        ])
    }
    
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
        </div>
}

export default Users;