import React from "react";
import "../css/home.css";
import SmallPost from "../layout/SmallPost";

const images = ["https://picsum.photos/id/1/5616/3744"
  , "https://picsum.photos/id/10/2500/1667"
  , "https://picsum.photos/id/100/2500/1656"
  , "https://picsum.photos/id/1000/5626/3635"
  , "https://picsum.photos/id/1001/5616/3744"
  , "https://picsum.photos/id/1002/4312/2868"
  , "https://picsum.photos/id/1003/1181/1772"
  , "https://picsum.photos/id/1004/5616/3744"
  , "https://picsum.photos/id/1005/5760/3840"
  , "https://picsum.photos/id/1006/3000/2000"
  , "https://picsum.photos/id/1008/5616/3744"
  , "https://picsum.photos/id/1009/5000/7502"
  , "https://picsum.photos/id/101/2621/1747"
  , "https://picsum.photos/id/1010/5184/3456"
  , "https://picsum.photos/id/1011/5472/3648"
  , "https://picsum.photos/id/1012/3973/2639"
  , "https://picsum.photos/id/1013/4256/2832"
  , "https://picsum.photos/id/1014/6016/4000"
  , "https://picsum.photos/id/1015/6000/4000"
  , "https://picsum.photos/id/1016/3844/2563"
  , "https://picsum.photos/id/1018/3914/2935"
  , "https://picsum.photos/id/1019/5472/3648"
  , "https://picsum.photos/id/102/4320/3240"
  , "https://picsum.photos/id/1020/4288/2848"
  , "https://picsum.photos/id/1021/2048/1206"
  , "https://picsum.photos/id/1022/6000/3376"
  , "https://picsum.photos/id/1023/3955/2094"
  , "https://picsum.photos/id/0/5616/3744"
  , "https://picsum.photos/id/1024/1920/1280"]

const dumydata = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit ut nemo aliquid? In cum totam soluta laboriosam alias, voluptatibus necessitatibus laudantium id quo. Et voluptate ratione odio accusantium recusandae. "

const Home = () => {
  return (
    <div className="home">
      <div className="LogoBOX">
        <div className="logoCointainer">
          <img src="TechnoJam.png" alt="TecnoJam Logo" />
        </div>
        <div className="slogon">
          Throttle
          <p className="lite">
            &nbsp;to&nbsp;
          </p>
          <p className="italic">
            Learn
          </p>
        </div>
      </div>

      <div className="smallPostCards">
        {images.map(element => {
          return <SmallPost
            imageURI={element}
            heading="This is Test Heading ????"
            text={dumydata}
            like={()=>console.log(1)}
          />
        }
        )}
      </div>
    </div>

  );
};

export default Home;
