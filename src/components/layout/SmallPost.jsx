import React from "react";
import "../css/SmallPost.css";


const SmallPost = ({imageURI,text,like,share}) => (
  <div className="smallPost">
    <div className="imageCointainer">
      <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400" alt="" />
    </div>
    <div className="textConintainer">
        <h2 className="heading"></h2>
        <h5 className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa sit incidunt maiores voluptas corporis temporibus quas natus modi, quisquam in exercitationem veritatis amet nam culpa ducimus autem, molestias eaque!
        </h5>
        <div className="boaltText">
        ...more
        </div>
    </div>
    <div className="shareCointainer">
        <div className="icon like"></div>
        <div className="icon comment"></div>
        <div className="icon share"></div>
    </div>
  </div>
);

export default SmallPost;
