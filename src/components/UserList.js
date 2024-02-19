import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import "./userList.css";

function UserList() {
    const [userList,setUserList] = useState([]);
    async function getUsers(){
        try {
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            console.log(data);
            setUserList(data);
            // console.log(userList);
          } catch (error) {
            console.error('Error fetching users', error);
          }
    }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <>
    {(userList.length>0)?(
        <div className='user-list'>
            <h2>Users List</h2>
            <List>
                {userList.map((user)=>(
                    <ListItem key={user.id} component={Link} to={`/user/${user.login}`} alignItems="center">
                        <ListItemAvatar>
                            <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        </ListItemAvatar>
                        <ListItemText primary={`${user.login}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    ):
        <h2>Loading ....</h2>
    }
    </>
  )
}

export default UserList