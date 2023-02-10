import videoUrl from "../../../video.mp4";
import { LikeIcon, CommentIcon, ShareIcon } from "../../../components/icons";

const VideoCard = () => {
  return (
    <div className="flex gap-x-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:mb-7 [&:not(:last-child)]:pb-7">
      <img className="w-14 h-14 object-cover rounded-full hidden md:block" src="https://www.tubefilter.com/wp-content/uploads/2022/09/khaby-lame-acting.jpg" alt="" />

      <div>
        <div className="text-sm">
          <div className="flex items-center gap-x-4 mb-2 md:mb-0">
            <img className="w-11 h-11 object-cover rounded-full md:hidden" src="https://www.tubefilter.com/wp-content/uploads/2022/09/khaby-lame-acting.jpg" alt="" />
            <div className="flex flex-col md:flex-row gap-x-2">
              <h3 className="font-semibold">noelgoescrazy</h3>
              <p className="text-gray-500">front_end developer</p>
            </div>
          </div>

          <div>
            <span className="text-gray-500">Lorem ipsum dolor sit amet </span>
            {["#karungjantan", "#tokokarungjantan", "#Januarihokisale", "#karungjantan", "#tokokarungjantan", "#Januarihokisale"].map((tag, index) => (
              <span className="inline-block font-semibold cursor-pointer hover:underline" key={index}>
                {tag}&nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-x-4">
          <video className="max-w-[215px] sm:max-w-[280px] md mt-2 rounded-md" src={videoUrl} controls></video>
          <div className="flex flex-col gap-y-4">
            <button>
              <div className="bg-gray-200 p-3 rounded-full">
                <LikeIcon className="text-[20px] sm:text-[24px]" />
              </div>
              <p className="text-xs text-gray-700 mt-1.5 font-medium">321K</p>
            </button>
            <button>
              <div className="bg-gray-200 p-3 rounded-full">
                <CommentIcon className="text-[20px] sm:text-[24px]" />
              </div>
              <p className="text-xs text-gray-700 mt-1.5 font-medium">1625K</p>
            </button>
            <button>
              <div className="bg-gray-200 p-3 rounded-full">
                <ShareIcon className="text-[20px] sm:text-[24px]" />
              </div>
              <p className="text-xs text-gray-700 mt-1.5 font-medium">1197K</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
