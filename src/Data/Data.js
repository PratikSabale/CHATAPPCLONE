import { faker } from "@faker-js/faker";
import { Title } from "@mui/icons-material";
import {
  Camera,
  ChatCircleDots,
  File,
  Gear,
  Image,
  Phone,
  SignOut,
  Sticker,
  User,
} from "phosphor-react";
import React from "react";

export const Nav_Butons = [
  { index: 0, icon: <ChatCircleDots size={28} /> },
  { index: 1, icon: <User size={28} /> },
  { index: 2, icon: <Phone size={28} /> },
];

export const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:46",
    unread: 2,
    pinned: false,
    online: false,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "3:21",
    unread: 7,
    pinned: true,
    online: false,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "4:20",
    unread: 5,
    pinned: false,
    online: false,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "2:43",
    unread: 9,
    pinned: false,
    online: false,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "5:56",
    unread: 1,
    pinned: false,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "8:16",
    unread: 4,
    pinned: false,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "1:05",
    unread: 4,
    pinned: false,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "1:05",
    unread: 4,
    pinned: false,
    online: true,
  },
];

export const Chat_History = [
  {
    type: "msg",
    message: "Hi,How are you",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "today",
  },
  {
    type: "msg",
    message: "Hello,I am good",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me todays assignment ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here you go",
    img: faker.image.avatar(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.avatar(),
    message: "Yep ,I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is reply",
    message: "Yep ,I can alsp do that",
    incoming: false,
    outgoing: true,
  },
];

export const Actions = [
  { color: "#4da5fe", icon: <Image size={24} />, y: 102, title: "Photo/Video" },
  { color: "#1b8cfe", icon: <Sticker size={24} />, y: 172, title: "Stickers" },
  { color: "#0172e4", icon: <Camera size={24} />, y: 242, title: "Image" },
  { color: "#0159b2", icon: <File size={24} />, y: 312, title: "Document" },
  { color: "#013f7f", icon: <User size={24} />, y: 382, title: "Contact" },
];

export const Message_Options = [
  { title: "Reply" },
  { title: "React to message" },
  { title: "Forword message" },
  { title: "Star message" },
  { title: "Report" },
  { title: "Delete Message" },
];

export const User_Profile = [
  { title: "Profile", icon: <User /> },
  { title: "Settings", icon: <Gear /> },
  { title: "Logout", icon: <SignOut /> },
];
