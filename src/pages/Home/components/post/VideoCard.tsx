import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LikeIcon, CommentIcon, ShareIcon } from "../../../../components/icons";
import video from "../../../../video.mp4";

const VideoCardHeader = () => {
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div>
        <div className="flex items-center gap-x-2">
          <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/871c8a05987085ba220c7e07f97611ef~c5_100x100.jpeg?x-expires=1675602000&x-signature=PpeNk4towuk1ouDpbXmLP2CrRBE%3D" alt="" className="w-10 h-10 rounded-full object-cover md:hidden" />
          <div>
            <div className="flex items-center gap-x-2">
              <h4 className="font-semibold">markdx</h4>
              <span className="text-gray-500 text-xs hidden md:block">full stack developer</span>
            </div>
            <p className="text-gray-500 text-xs md:hidden">full stack developer</p>
          </div>
        </div>

        <div className="text-sm mt-2 md:mt-0">
          <span className="text-gray-500">iPhone 14 Pro VS iPhone 6 😱</span>
          {[...Array("#iphone6", "#iphone14pro", "#iphone14", "#fyp", "#viral", "#foryou", "#comparison", "#tech")].map((tag, index) => (
            <Link key={index} to="/tags">
              <span className="cursor-pointer hover:underline inline-block font-medium">{tag}&nbsp;</span>
            </Link>
          ))}
        </div>
      </div>

      <button className="border border-primary-900 text-primary-900 hover:bg-[#fff1f4] active:bg-[#ffcad4] rounded-md text-sm py-1.5 px-5 mr-3">Follow</button>
    </div>
  );
};

const VideoCardInteractions = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <button>
        <div className="bg-gray-200 p-3 rounded-full">
          <LikeIcon className="text-[24px]" />
        </div>
        <p className="text-xs text-gray-700 mt-1.5 font-medium">321K</p>
      </button>
      <button>
        <div className="bg-gray-200 p-3 rounded-full">
          <CommentIcon className="text-[24px]" />
        </div>
        <p className="text-xs text-gray-700 mt-1.5 font-medium">1625</p>
      </button>
      <button>
        <div className="bg-gray-200 p-3 rounded-full">
          <ShareIcon className="text-[24px]" />
        </div>
        <p className="text-xs text-gray-700 mt-1.5 font-medium">1197</p>
      </button>
    </div>
  );
};

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // document.addEventListener("scroll", (e) => {});
    videoRef.current!.addEventListener("loadeddata", () => {
      videoRef.current!.play();
      console.log("OK");
    });

    // const observer = new IntersectionObserver(
    //   (entries, observer) => {
    //     entries.forEach((entry) => {
    //       entry.isIntersecting && videoRef.current!.paused;
    //       if (entry.isIntersecting) {
    //         if (videoRef.current!.paused) {
    //           videoRef.current!.play();
    //         }
    //       } else {
    //         videoRef.current!.pause();
    //       }
    //     });
    //   },
    //   { threshold: 0.8 }
    // );
    // observer.observe(videoRef.current!);
  }, []);

  return <video controls loop ref={videoRef} src={video} className="max-w-[223px] min-h-[390px] md:max-w-[280px] md:min-h-[500px] overflow-hidden bg-black rounded-xl"></video>;
};

const VideoCard = () => {
  return (
    <div className="flex gap-x-4 mb-5">
      <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/871c8a05987085ba220c7e07f97611ef~c5_100x100.jpeg?x-expires=1675602000&x-signature=PpeNk4towuk1ouDpbXmLP2CrRBE%3D" alt="" className="w-14 h-14 rounded-full object-cover hidden md:block" />
      <div>
        <VideoCardHeader />
        <div className="mt-2 flex items-end gap-x-4">
          <Video />
          <VideoCardInteractions />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
