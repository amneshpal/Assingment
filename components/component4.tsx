// import type { NextPage } from "next";

// export type Component4Type = {
//   className?: string;
// };

// const Component4: NextPage<Component4Type> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[37px] left-[0px] w-[1920px] h-[1080px] overflow-hidden text-left text-85xl text-white font-heading-2 ${className}`}
//     >
//       <div className="absolute top-[120px] left-[402px] rounded-[50%] [background:linear-gradient(132.67deg,_rgba(241,_102,_51,_0.8),_rgba(253,_45,_125,_0.8))] w-[788px] h-[788px]" />
//       <div className="absolute top-[133px] left-[415px] shadow-[64px_32px_75px_rgba(0,_0,_0,_0.9)_inset] rounded-[678.79px] bg-gray-100 w-[761px] h-[761px] overflow-hidden">
//         <img
//           className="absolute top-[0px] left-[-402px] w-[1450px] h-[761px] object-cover"
//           alt=""
//           src="/arijit-singh-1@2x.png"
//         />
//         <div className="absolute top-[721.8px] left-[56.6px] rounded-[50%] [background:linear-gradient(132.67deg,_rgba(255,_253,_253,_0.36),_rgba(255,_227,_226,_0.8),_rgba(241,_102,_51,_0.8)_29.48%,_rgba(253,_45,_125,_0.8)_64.9%,_rgba(21,_18,_18,_0.8)_99.42%)] w-[761px] h-[761px]" />
//       </div>
//       <div className="absolute top-[941px] left-[650px] text-9xl opacity-[0.3]">
//         Click here to view more
//       </div>
//       <div className="absolute top-[calc(50%_-_167px)] left-[1353px] flex flex-col items-start justify-start gap-8 text-45xl text-gray-400">
//         <div className="w-[378px] relative inline-block">
//           <span>Choose from</span>
//           <span className="text-white"> 100+ Categories</span>
//         </div>
//         <div className="rounded-881xl overflow-hidden flex flex-row items-center justify-center py-4 px-0 gap-2.5 text-13xl">
//           <div className="relative text-transparent !bg-clip-text [background:linear-gradient(86.31deg,_rgba(114,_114,_114,_0),_#ff8db9_30.06%,_#f86e43)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
//             Explore all categories
//           </div>
//           <img
//             className="w-11 relative max-h-full"
//             alt=""
//             src="/vector-209.svg"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[540px] left-[187px] [transform:_rotate(90deg)] [transform-origin:0_0] opacity-[0]">
//         Dancers
//       </div>
//       <div className="absolute top-[calc(50%_-_57px)] left-[110px] text-center">
//         Singers
//       </div>
//       <img
//         className="absolute top-[398.6px] left-[934.3px] w-[340.6px] h-[495.9px] object-contain"
//         alt=""
//         src="/vector-210.svg"
//       />
//     </div>
//   );
// };

// export default Component4;



import type { NextPage } from "next";

export type Component4Type = {
  className?: string;
};

const Component4: NextPage<Component4Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[37px] left-0 w-full h-[1080px] overflow-hidden text-left text-85xl text-white font-heading-2 ${className}`}
    >
      {/* Main Gradient Circle */}
      <div className="absolute top-[120px] left-[402px] w-[788px] h-[788px] rounded-full bg-gradient-to-br from-[rgba(241,102,51,0.8)] to-[rgba(253,45,125,0.8)]" />

      {/* Inner Circle with Image */}
      <div className="absolute top-[133px] left-[415px] w-[761px] h-[761px] rounded-full bg-gray-100 shadow-[64px_32px_75px_rgba(0,0,0,0.9)_inset] overflow-hidden">
        <img
          className="absolute top-0 left-[-402px] w-[1450px] h-full object-cover"
          alt="Featured Singer"
          src="/arijit-singh-1@2x.png"
        />
        <div className="absolute top-[722px] left-[57px] w-[761px] h-[761px] rounded-full bg-gradient-to-b from-[rgba(255,253,253,0.36)] via-[rgba(255,227,226,0.8)] to-[rgba(21,18,18,0.8)] opacity-80" />
      </div>

      {/* Call to Action */}
      <div className="absolute top-[941px] left-[650px] text-9xl opacity-30">
        Click here to view more
      </div>

      {/* Categories Section */}
      <div className="absolute top-1/2 left-[1353px] transform -translate-y-1/2 flex flex-col items-start justify-start gap-8 text-45xl text-gray-400">
        <div className="relative">
          <span>Choose from</span>
          <span className="text-white"> 100+ Categories</span>
        </div>
        <div className="rounded-full flex flex-row items-center justify-center py-4 px-6 gap-2.5 text-13xl">
          <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-[rgba(114,114,114,0)] via-[#ff8db9] to-[#f86e43]">
            Explore all categories
          </div>
          <img
            className="w-11 max-h-full"
            alt="Arrow Icon"
            src="/vector-209.svg"
          />
        </div>
      </div>

      {/* Labels and Decorations */}
      <div className="absolute top-[540px] left-[187px] transform rotate-90 opacity-0">
        Dancers
      </div>
      <div className="absolute top-1/2 left-[110px] transform -translate-y-1/2 text-center">
        Singers
      </div>

      {/* Decorative SVG */}
      <img
        className="absolute top-[398.6px] left-[934.3px] w-[340.6px] h-[495.9px] object-contain"
        alt="Decorative Element"
        src="/vector-210.svg"
      />
    </div>
  );
};

export default Component4;
