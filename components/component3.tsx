// // // 

// // import type { NextPage } from "next";

// // export type Component3Type = {
// //   className?: string;
// // };

// // const Component3: NextPage<Component3Type> = ({ className = "" }) => {
// //   return (
// //     <div
// //       className={`absolute top-[1059px] left-0 flex flex-col items-start justify-start pt-[60px] text-left text-5xl text-black font-heading-2 ${className}`}
// //     >
// //       <div className="w-full shadow-[0px_56px_66px_11px_#000_inset] rounded-t-8981xl rounded-b-none bg-gradient-to-b from-[rgba(13,13,25,0.82)] to-transparent border-midnightblue-100 border-2 box-border overflow-hidden flex flex-col items-center justify-start pt-[83px] px-[60px] pb-[120px] gap-20">
// //         {/* Tab Navigation */}
// //         <div className="shadow-[0px_24px_47px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-27xl bg-dimgray flex flex-row items-start justify-center p-4 gap-[32px]">
// //           <div className="rounded-[62px] bg-lavender flex items-center justify-center py-[18px] px-12">
// //             <div className="relative">Photos</div>
// //           </div>
// //           <div className="backdrop-blur-lg rounded-[62px] bg-gray-500 flex items-center justify-center py-[18px] px-12 text-white">
// //             <div className="relative">Videos</div>
// //           </div>
// //         </div>
// //         {/* Image Grid */}
// //         <div className="w-[1149px] flex flex-col gap-[30px]">
// //           <div className="flex flex-row items-start justify-between gap-[10px]">
// //             <img
// //               className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
// //               alt="Gallery Image 1"
// //               src="/frame-1321314655@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] rounded-[12px] object-cover"
// //               alt="Gallery Image 2"
// //               src="/frame-1321314656@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
// //               alt="Gallery Image 3"
// //               src="/frame-1321314657@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] rounded-[12px] object-cover"
// //               alt="Gallery Image 4"
// //               src="/frame-1321314658@2x.png"
// //             />
// //           </div>
// //           <div className="flex flex-row items-start justify-between gap-[10px]">
// //             <img
// //               className="w-[270px] h-[270px] rounded-[12px] object-cover"
// //               alt="Gallery Image 5"
// //               src="/frame-13213146571@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] object-cover"
// //               alt="Gallery Image 6"
// //               src="/frame-13213146581@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] rounded-[12px] object-cover"
// //               alt="Gallery Image 7"
// //               src="/frame-1321314660@2x.png"
// //             />
// //             <img
// //               className="w-[270px] h-[270px] object-cover"
// //               alt="Gallery Image 8"
// //               src="/frame-1321314659@2x.png"
// //             />
// //           </div>
// //         </div>
// //         {/* Pagination Dots */}
// //         <div className="flex flex-row items-start justify-start gap-[9px]">
// //           <div className="w-[139px] h-[9px] rounded-[38px] bg-gainsboro-100 opacity-90" />
// //           <div className="w-[77px] h-[9px] rounded-[38px] bg-gainsboro-100 opacity-10" />
// //           <div className="w-[77px] h-[9px] rounded-[38px] bg-gainsboro-100 opacity-10" />
// //           <div className="w-[77px] h-[9px] rounded-[38px] bg-gainsboro-100 opacity-10" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Component3;





// import type { NextPage } from "next";

// export type Component3Type = {
//   className?: string;
// };

// const Component3: NextPage<Component3Type> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[1059px] left-0 flex flex-col items-start justify-start pt-16 text-left text-5xl text-black font-heading-2 ${className}`}
//     >
//       <div className="w-full shadow-[0px_56px_66px_11px_#000_inset] rounded-t-8981xl bg-gradient-to-b from-[rgba(13,13,25,0.82)] to-transparent border-midnightblue-100 border-2 box-border overflow-hidden flex flex-col items-center justify-start pt-20 px-16 pb-30 gap-20">
//         {/* Tab Navigation */}
//         <div className="shadow-[0px_24px_47px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-27xl bg-dimgray flex flex-row items-center justify-center p-4 gap-8">
//           <button className="rounded-[62px] bg-lavender flex items-center justify-center py-4 px-12 text-black">
//             Photos
//           </button>
//           <button className="backdrop-blur-lg rounded-[62px] bg-gray-500 flex items-center justify-center py-4 px-12 text-white">
//             Videos
//           </button>
//         </div>

//         {/* Image Grid */}
//         <div className="w-[1149px] flex flex-col gap-8">
//           {/* Top Row of Images */}
//           <div className="flex flex-row items-start justify-between gap-2.5">
//             <img
//               className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
//               alt="Design Team Photo 1"
//               src="/frame-1321314655@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] rounded-[12px] object-cover"
//               alt="Design Team Photo 2"
//               src="/frame-1321314656@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
//               alt="Design Team Photo 3"
//               src="/frame-1321314657@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] rounded-[12px] object-cover"
//               alt="Design Team Photo 4"
//               src="/frame-1321314658@2x.png"
//             />
//           </div>

//           {/* Bottom Row of Images */}
//           <div className="flex flex-row items-start justify-between gap-2.5">
//             <img
//               className="w-[270px] h-[270px] rounded-[12px] object-cover"
//               alt="Design Team Photo 5"
//               src="/frame-13213146571@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] object-cover"
//               alt="Design Team Photo 6"
//               src="/frame-13213146581@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] rounded-[12px] object-cover"
//               alt="Design Team Photo 7"
//               src="/frame-1321314660@2x.png"
//             />
//             <img
//               className="w-[270px] h-[270px] object-cover"
//               alt="Design Team Photo 8"
//               src="/frame-1321314659@2x.png"
//             />
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex flex-row items-start justify-start gap-2">
//           <div className="w-[139px] h-2.5 rounded-full bg-gainsboro-100 opacity-90" />
//           <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
//           <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
//           <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Component3;



import type { NextPage } from "next";

export type Component3Type = {
  className?: string;
};

const Component3: NextPage<Component3Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1059px] left-0 flex flex-col items-start justify-start pt-16 text-left text-5xl text-black font-heading-2 ${className}`}
    >
      <div className="w-full shadow-[0px_56px_66px_11px_#000_inset] rounded-t-8981xl bg-gradient-to-b from-[rgba(13,13,25,0.82)] to-transparent border-midnightblue-100 border-2 box-border overflow-hidden flex flex-col items-center justify-start pt-20 px-16 pb-30 gap-20">
        {/* Tab Navigation */}
        <div className="shadow-[0px_24px_47px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-27xl bg-dimgray flex flex-row items-center justify-center p-4 gap-8">
          <button className="rounded-[62px] bg-lavender flex items-center justify-center py-4 px-12 text-black">
            Photos
          </button>
          <button className="backdrop-blur-lg rounded-[62px] bg-gray-500 flex items-center justify-center py-4 px-12 text-white">
            Videos
          </button>
        </div>

        {/* Image Grid */}
        <div className="w-[1149px] flex flex-col gap-8">
          {/* Top Row of Images */}
          <div className="flex flex-row items-start justify-between gap-2.5">
            <img
              className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
              alt="Design Team Photo 1"
              src="/frame-1321314655@2x.png"
            />
            <img
              className="w-[270px] h-[270px] rounded-[12px] object-cover"
              alt="Design Team Photo 2"
              src="/frame-1321314656@2x.png"
            />
            <img
              className="w-[270px] h-[270px] rounded-t-[748px] rounded-br-none rounded-bl-[748px] object-cover"
              alt="Design Team Photo 3"
              src="/frame-1321314657@2x.png"
            />
            <img
              className="w-[270px] h-[270px] rounded-[12px] object-cover"
              alt="Design Team Photo 4"
              src="/frame-1321314658@2x.png"
            />
          </div>

          {/* Bottom Row of Images */}
          <div className="flex flex-row items-start justify-between gap-2.5">
            <img
              className="w-[270px] h-[270px] rounded-[12px] object-cover"
              alt="Design Team Photo 5"
              src="/frame-13213146571@2x.png"
            />
            <img
              className="w-[270px] h-[270px] object-cover"
              alt="Design Team Photo 6"
              src="/frame-13213146581@2x.png"
            />
            <img
              className="w-[270px] h-[270px] rounded-[12px] object-cover"
              alt="Design Team Photo 7"
              src="/frame-1321314660@2x.png"
            />
            <img
              className="w-[270px] h-[270px] object-cover"
              alt="Design Team Photo 8"
              src="/frame-1321314659@2x.png"
            />
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="w-[139px] h-2.5 rounded-full bg-gainsboro-100 opacity-90" />
          <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
          <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
          <div className="w-20 h-2.5 rounded-full bg-gainsboro-100 opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default Component3;

