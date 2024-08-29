// import type { NextPage } from "next";
// import ActivitySlider from "./activity-slider";

// export type FrameComponentType = {
//   className?: string;
// };

// const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[2112px] left-[-103px] w-[1920px] h-[2505px] overflow-hidden text-right text-29xl text-white font-heading-2 ${className}`}
//     >
//       <img
//         className="absolute top-[0px] left-[467.9px] w-[1057.8px] h-[2426.5px]"
//         alt=""
//         src="/vector-248.svg"
//       />
//       <ActivitySlider
//         frame1321314913="/frame-1321314913@2x.png"
//         activitySliderTop="763.7px"
//         activitySliderLeft="676.7px"
//       />
//       <ActivitySlider
//         frame1321314913="/frame-13213149131@2x.png"
//         activitySliderTop="183px"
//         activitySliderLeft="275.1px"
//       />
//       <ActivitySlider
//         frame1321314913="/frame-13213149132@2x.png"
//         activitySliderTop="1344.4px"
//         activitySliderLeft="275.1px"
//       />
//       <ActivitySlider frame1321314913="/frame-13213149133@2x.png" />
//     </div>
//   );
// };

// export default FrameComponent;



import type { NextPage } from "next";
import ActivitySlider from "./activity-slider";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`relative top-[2112px] left-[-103px] w-[1920px] h-[2505px] overflow-hidden text-right text-29xl text-white font-heading-2 ${className}`}
    >
      {/* Decorative Vector */}
      <img
        className="absolute top-0 left-[468px] w-[1058px] h-[2427px]"
        alt="Decorative Background"
        src="/vector-248.svg"
      />

      {/* Activity Sliders */}
      <ActivitySlider
        frame1321314913="/frame-1321314913@2x.png"
        activitySliderTop="764px"
        activitySliderLeft="677px"
      />
      <ActivitySlider
        frame1321314913="/frame-13213149131@2x.png"
        activitySliderTop="183px"
        activitySliderLeft="275px"
      />
      <ActivitySlider
        frame1321314913="/frame-13213149132@2x.png"
        activitySliderTop="1344px"
        activitySliderLeft="275px"
      />
      <ActivitySlider
        frame1321314913="/frame-13213149133@2x.png"
        activitySliderTop="1000px"
        activitySliderLeft="500px"
      />
    </div>
  );
};

export default FrameComponent;
