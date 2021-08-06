import { IconButton, Button } from "@material-ui/core";
import { SearchRounded, StarBorderRounded } from "@material-ui/icons";
import { PlayArrowRounded } from "@material-ui/icons";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import React from "react";
import styles from "./ChatExpert.module.scss";
const ChatExpert = () => {
  return (
    <div className={styles.ChatExpert}>
      <div className={styles.ChatExpert_Left}>
        <div className={styles.ChatExpert_Left_Top}>
          <select>
            <option value="All">All Conversions(1)</option>
            <option value="Favorite">Favorite</option>
          </select>
          <IconButton>
            <SearchRounded />
          </IconButton>
        </div>
        <Chats chatName="Robin" timeStamp="just now" />
        <Chats chatName="Aryan" timeStamp="Typing..." />
        <Chats chatName="Anuj" timeStamp="last seen 22:00" />
      </div>
      <div className={styles.ChatExpert_Right}>
        <div className={styles.ChatExpert_Right_Top}>
          <div className={styles.ChatExpert_Right_Top_Image}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="chatlogo"
              />
            </div>
            <div>
              <h4>{"Robin"}</h4>
              <p>{"online"}</p>
            </div>
          </div>
          <div className={styles.ChatExpert_Right_Top_Button}>
            <IconButton>
              <VideocamRoundedIcon />
            </IconButton>
            <IconButton>
              <CallRoundedIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles.ChatExpert_Right_Container}>
          <TextComponent
            text={"I want to listen a music with heavy bass"}
            position={"flex-end"}
          />
          <TextComponent text={"Okay"} position={"flex-start"} />
          <TextComponent text={"Play Yalgaar"} position={"flex-start"} />
          <MusicComponent position={"flex-end"} />
          <TextComponent text={"And one Wallpaper"} position={"flex-end"} />
          <ImageComponent position={"flex-start"} />
        </div>
        <div className={styles.ChatExpert_Right_Bottom}>
          <div className={styles.ChatExpert_Right_Bottom_input}>
            <div>
              <input type="text" placeholder="Type your message..." />
              <IconButton>
                <CameraAltOutlinedIcon />
              </IconButton>
              <IconButton>
                <ImageOutlinedIcon />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <MicRoundedIcon />
              </IconButton>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatExpert;

const Chats = ({ chatName, timeStamp, imageSrc, isFavorite = false }) => {
  return (
    <div className={styles.ChatExpert_Left_Chats}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="chatlogo"
        />
      </div>
      <div>
        <h4>{chatName}</h4>
        <p>{timeStamp}</p>
      </div>
      <div>
        <IconButton>{isFavorite ? null : <StarBorderRounded />}</IconButton>
      </div>
    </div>
  );
};

///position flex-start|| flex-end
const TextComponent = ({ position, text }) => {
  return (
    <div style={{ alignSelf: position }} className={styles.ChatBox_Text}>
      <div>{text}</div>
      <div>
        <p>Name</p>
        <p>05:41 AM </p>
      </div>
    </div>
  );
};
const ImageComponent = ({ position }) => {
  return (
    <div style={{ alignSelf: position }} className={styles.ChatBox_Image}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817__480.jpg"
          alt="okay"
        />
      </div>
      <div>
        <p>You</p>
        <p>05:41 AM </p>
      </div>
    </div>
  );
};
const MusicComponent = ({ position }) => {
  return (
    <div style={{ alignSelf: position }} className={styles.ChatBox_Music}>
      <div>
        <IconButton>
          <PlayArrowRounded />
        </IconButton>
      </div>
      <div>
        <input type="range" />
      </div>
      <div>
        <p>00:09</p>
      </div>
    </div>
  );
};
