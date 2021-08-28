import React from "react";
import {
  NearMeOutlined,
  ThumbUpAlt,
  Comment
} from '@material-ui/icons/';
import "../css/SmallPost.css";

const SmallPost = ({ imageURI, text, like }) => {
  // console.log(imageURI);
  return (
  <div className="smallPost">
    <div className="imageCointainer">
      <img src={imageURI} alt="random post image" />
    </div>
    <div className="textConintainer">
      <h2 className="heading">This is MF heading</h2>
      <h5 className="content">
        {text}
      </h5>
      <div className="moreintext bolt">
        ...more
      </div>
    </div>
    <div className="shareCointainer">
      <div className="icon like">
        < ThumbUpAlt fontSize="large" />
      </div>
      <div className="icon comment">
        < Comment fontSize="large" />
      </div>
      <div className="icon share">
        < NearMeOutlined fontSize="large" />
      </div>
      <div className="readmore bolt">
        Read More...
      </div>
    </div>
  </div>
)};

export default SmallPost;
