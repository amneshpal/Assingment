// import type { NextPage } from "next";

// export type Component1Type = {
//   className?: string;
//   image59?: string;
//   image60?: string;
//   image61?: string;
// };

// const Component1: NextPage<Component1Type> = ({
//   className = "",
//   image59,
//   image60,
//   image61,
// }) => {
//   return (
//     <div
//       className={`self-stretch flex flex-row items-center justify-start relative gap-[31.4px] text-left text-29xl text-white font-heading-2 ${className}`}
//     >
//       <div className="w-[650px] relative rounded-t-[1208.57px] rounded-b-none bg-black h-[659px] overflow-hidden shrink-0 z-[0]">
//         <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
//           <img
//             className="w-[650px] relative h-[659px] object-cover"
//             alt=""
//             src={image59}
//           />
//           <img
//             className="w-[650px] relative h-[659px] object-cover"
//             alt=""
//             src={image60}
//           />
//           <img
//             className="w-[650px] relative h-[659px] object-cover"
//             alt=""
//             src={image61}
//           />
//         </div>
//       </div>
//       <div className="self-stretch flex flex-col items-start justify-center gap-[25px] z-[1]">
//         <div className="w-[391.3px] relative inline-block">
//           <span>{`Nora Fatehi `}</span>
//           <span className="text-gray-600">
//             for an event hosted by XYZ performed
//           </span>
//           <span> at Pune .</span>
//         </div>
//         <div className="flex flex-row items-center justify-center gap-[8.1px] opacity-[0.6] text-center text-5xl-4">
//           <img
//             className="w-[24.2px] relative h-[24.5px] overflow-hidden shrink-0"
//             alt=""
//             src="/fluentcalendar16filled.svg"
//           />
//           <div className="relative">14 March 2023</div>
//         </div>
//       </div>
//       <img
//         className="w-[80.5px] absolute !m-[0] top-[303px] left-[1104.5px] h-[80.5px] z-[2]"
//         alt=""
//         src="/group-3.svg"
//       />
//       <img
//         className="w-[80.5px] absolute !m-[0] top-[318.1px] left-[-135px] h-[80.5px] object-contain z-[3]"
//         alt=""
//         src="/group-4@2x.png"
//       />
//     </div>
//   );
// };

// export default Component1;



import type { NextPage } from "next";

export type Component1Type = {
  className?: string;
  image59?: string; // First image source
  image60?: string; // Second image source
  image61?: string; // Third image source
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  image59 = "", // Default to an empty string
  image60 = "", // Default to an empty string
  image61 = "", // Default to an empty string
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start relative gap-[31.4px] text-left text-29xl text-white font-heading-2 ${className}`}
    >
      <div className="w-[650px] relative rounded-t-[1208.57px] rounded-b-none bg-black h-[659px] overflow-hidden shrink-0 z-[0]">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
          {image59 && (
            <img
              className="w-[650px] h-[659px] object-cover"
              alt="Event Image 1"
              src={image59}
            />
          )}
          {image60 && (
            <img
              className="w-[650px] h-[659px] object-cover"
              alt="Event Image 2"
              src={image60}
            />
          )}
          {image61 && (
            <img
              className="w-[650px] h-[659px] object-cover"
              alt="Event Image 3"
              src={image61}
            />
          )}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[25px] z-[1]">
        <div className="w-[391.3px] relative inline-block">
          <span>{`Nora Fatehi `}</span>
          <span className="text-gray-600">
            for an event hosted by XYZ performed
          </span>
          <span> at Pune.</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-[8.1px] opacity-[0.6] text-center text-5xl-4">
          <img
            className="w-[24.2px] h-[24.5px] overflow-hidden shrink-0"
            alt="Calendar Icon"
            src="/fluentcalendar16filled.svg"
          />
          <div className="relative">14 March 2023</div>
        </div>
      </div>
      <img
        className="w-[80.5px] absolute top-[303px] left-[1104.5px] h-[80.5px] z-[2]"
        alt="Icon 1"
        src="/group-3.svg"
      />
      <img
        className="w-[80.5px] absolute top-[318.1px] left-[-135px] h-[80.5px] object-contain z-[3]"
        alt="Icon 2"
        src="/group-4@2x.png"
      />
    </div>
  );
};

export default Component1;
