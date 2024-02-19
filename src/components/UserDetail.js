// src/components/UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./userDetail.css";

const UserDetail = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <>
    {user?(
    <Card className='user-detail'>
      {(user.message==="Not Found" || user==null)? 
      <>
        <CardContent style={{textAlign:"center"}}>
            <Typography variant='h5'>No User Found</Typography>
            <List>
              <ListItem> 
                <ListItemButton onClick={()=>navigate("/")} style={{textAlign:"center"}}> 
                    <ListItemIcon>
                        <ArrowBackIcon/>
                    </ListItemIcon> 
                    <ListItemText primary="Back" /> 
                </ListItemButton> 
              </ListItem> 
            </List>
        </CardContent>
      </>
      : (
        <>
          <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} variant='circular'/>
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="subtitle1">@{user.login}</Typography>
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary={`Company: ${user.company || 'N/A'}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Followers: ${user.followers}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Following: ${user.following}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Public Repositories: ${user.public_repos}`} />
              </ListItem>
              <ListItem> 
                <ListItemButton style={{textAlign:"center"}} onClick={()=>navigate("/")}> 
                    <ListItemIcon> 
                        <ArrowBackIcon/>
                    </ListItemIcon> 
                    <ListItemText  
                    primary="Back" /> 
                </ListItemButton> 
              </ListItem> 
            </List>
          </CardContent>
        </>
      )}
    </Card>)
    :(<h1 style={{textAlign:"center"}}>Loading....</h1>)}
    </>
  );
};

export default UserDetail;