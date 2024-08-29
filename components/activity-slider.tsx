// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type ActivitySliderType = {
//   className?: string;
//   frame1321314913?: string;

//   /** Style props */
//   activitySliderTop?: CSSProperties["top"];
//   activitySliderLeft?: CSSProperties["left"];
// };

// const ActivitySlider: NextPage<ActivitySliderType> = ({
//   className = "",
//   frame1321314913,
//   activitySliderTop,
//   activitySliderLeft,
// }) => {
//   const activitySliderStyle: CSSProperties = useMemo(() => {
//     return {
//       top: activitySliderTop,
//       left: activitySliderLeft,
//     };
//   }, [activitySliderTop, activitySliderLeft]);

//   return (
//     <div
//       className={`absolute top-[1925.1px] left-[676.7px] w-[959.3px] h-[460.7px] text-right text-29xl text-white font-heading-2 ${className}`}
//       style={activitySliderStyle}
//     >
//       <div className="absolute top-[269px] left-[7px] inline-block w-[447px] opacity-[0.37]">
//         Late Night Maggie Party for the boost
//       </div>
//       <img
//         className="absolute top-[0px] left-[498px] rounded-[35.19px] w-[461.3px] h-[460.7px] overflow-hidden object-contain"
//         alt=""
//         src={frame1321314913}
//       />
//     </div>
//   );
// };

// export default ActivitySlider;



import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ActivitySliderType = {
  className?: string;
  frame1321314913?: string; // Image source

  /** Style props */
  activitySliderTop?: CSSProperties["top"];
  activitySliderLeft?: CSSProperties["left"];
};

const ActivitySlider: NextPage<ActivitySliderType> = ({
  className = "",
  frame1321314913 = "", // Default to an empty string
  activitySliderTop = "0px", // Default to "0px" to ensure position is set
  activitySliderLeft = "0px", // Default to "0px" to ensure position is set
}) => {
  const activitySliderStyle: CSSProperties = useMemo(() => {
    return {
      top: activitySliderTop,
      left: activitySliderLeft,
    };
  }, [activitySliderTop, activitySliderLeft]);

  return (
    <div
      className={`absolute w-[959.3px] h-[460.7px] text-right text-29xl text-white font-heading-2 ${className}`}
      style={activitySliderStyle}
    >
      <div className="absolute top-[269px] left-[7px] inline-block w-[447px] opacity-[0.37]">
        Late Night Maggie Party for the boost
      </div>
      {frame1321314913 && (
        <img
          className="absolute top-0 left-[498px] rounded-[35.19px] w-[461.3px] h-[460.7px] object-contain"
          alt="Activity Slider Image"
          src={frame1321314913}
        />
      )}
    </div>
  );
};

export default ActivitySlider;
