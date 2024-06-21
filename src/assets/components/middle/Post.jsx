import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar></Avatar>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Mahmut{" "}
              <span className="post_headerUsername">
                {" "}
                <VerifiedIcon className="verify_badge" /> @Mahmut
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Mahmut'un twitter Clone demo maceraları</p>
          </div>
          <img src="https://staticg.sportskeeda.com/editor/2023/11/27d3b-16996554432517-1920.jpg" />
          <div className="post_footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
