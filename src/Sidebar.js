import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {Avatar} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
//import IconButton from '@mui/material/IconButton';
//import DonutLargeIcon from '@mui/icons-material/DonutLarge';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Avatar from '@mui/material/Avatar';
//import ChatIcon from '@mui/icons-material/Chat';



function Sidebar(){
    return (<div className="sidebar">
        
        <div className="sidebar_header">

            <div className="sidebar_headerRight">
                <Avatar/>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                
               
              
            </div>
    

        </div>
        <div className="sidebar_search">

            <div className="sidebar_searchContainer">
                <SearchOutlined/>
                <input placeholder="Search Chat" type="text"/>
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
    );
}

export default Sidebar;