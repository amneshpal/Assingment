// import type { NextPage } from "next";
// import Component1 from "./component1";

// export type FrameComponent4Type = {
//   className?: string;
// };

// const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[5806px] left-[0px] w-[1920px] overflow-hidden flex flex-row items-start justify-center flex-wrap content-start p-[94.3px] box-border text-center text-45xl text-white font-heading-2 ${className}`}
//     >
//       <div className="w-[1134px] flex flex-col items-center justify-start gap-[94.3px] z-[0]">
//         <div className="w-[990.5px] relative inline-block">
//           Recent shows made star-studded via StarClinch
//         </div>
//         <Component1
//           image59="/image-59@2x.png"
//           image60="/image-60@2x.png"
//           image61="/image-61@2x.png"
//         />
//       </div>
//       <img
//         className="w-[2409.9px] !m-[0] absolute top-[-411.9px] left-[1319.4px] h-[1633.7px] overflow-hidden shrink-0 object-contain z-[1]"
//         alt=""
//         src="/frame-1321314406@2x.png"
//       />
//       <img
//         className="w-[2409.6px] !m-[0] absolute top-[-155.1px] left-[-1576.7px] h-[1633.5px] overflow-hidden shrink-0 object-contain z-[2]"
//         alt=""
//         src="/frame-1321314407@2x.png"
//       />
//     </div>
//   );
// };

// export default FrameComponent4;



import type { NextPage } from "next";
import Component1 from "./component1";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`relative top-[5806px] left-0 w-full overflow-hidden flex flex-row items-start justify-center flex-wrap content-start p-[94.3px] box-border text-center text-45xl text-white font-heading-2 ${className}`}
    >
      {/* Main Content */}
      <div className="w-full max-w-[1134px] flex flex-col items-center gap-[94.3px] relative z-0">
        <div className="w-full max-w-[990.5px] relative inline-block">
          Recent shows made star-studded via StarClinch
        </div>
        <Component1
          image59="/image-59@2x.png"
          image60="/image-60@2x.png"
          image61="/image-61@2x.png"
        />
      </div>
      
      {/* Background Images */}
      <img
        className="absolute top-[-411.9px] left-[1319.4px] w-[2409.9px] h-[1633.7px] object-contain z-1"
        alt="Background Pattern 1"
        src="/frame-1321314406@2x.png"
      />
      <img
        className="absolute top-[-155.1px] left-[-1576.7px] w-[2409.6px] h-[1633.5px] object-contain z-2"
        alt="Background Pattern 2"
        src="/frame-1321314407@2x.png"
      />
    </div>
  );
};

export default FrameComponent4;
