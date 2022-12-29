import { Player } from 'react-tuby';
// import "react-tuby/css/main.css";
import ReactHlsPlayer from "react-hls-player";

export default function Watch() {

  return (
    <>
    <div>hello</div>
    <Player src="https://wwwx11.gofcdn.com/videos/hls/hQEIvEO80vDAP0Ys5l36Dw/1672234055/196910/550de95a547a825b0fd3d409d5b4f5bb/ep.4.1672209356.m3u8"
      subtitles={[
          {
            lang: "en",
            url:
              "https://cc.zorores.com/3d/05/3d052af09359351c46869b6b15c913be/eng-2.vtt",
          },
        ]}>
 {(ref,props) => <ReactHlsPlayer playerRef={ref} {...props}/>}
    </Player>
     
    </>
  );
}
