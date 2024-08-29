// import type { NextPage } from "next";

// export type Component2Type = {
//   className?: string;
// };

// const Component2: NextPage<Component2Type> = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[4593px] left-[0px] shadow-[0px_-80px_90px_#080810_inset] bg-gray-300 w-[1920px] h-[1080px] overflow-hidden text-center text-29xl text-white font-heading-2 ${className}`}
//     >
//       <div className="absolute top-[120px] left-[calc(50%_-_840px)] w-[1680px] h-[1953px]">
//         <div className="absolute top-[318px] left-[calc(50%_-_802.6px)] shadow-[0px_68.8px_61.15px_rgba(34,_33,_100,_0.12)_inset] rounded-[50%] bg-gainsboro-200 border-midnightblue-200 border-[1px] border-solid box-border w-[1605.2px] h-[1605.2px]" />
//         <div className="absolute top-[410.3px] left-[1250.1px] w-[230px] h-[230px]">
//           <div className="absolute top-[47.5px] left-[-20.6px] rounded-[45.85px] bg-slateblue w-[185.1px] h-[185.1px] overflow-hidden [transform:_rotate(-7.6deg)] [transform-origin:0_0] hidden" />
//           <img
//             className="absolute top-[0px] left-[0px] rounded-781xl w-[230px] h-[230px] overflow-hidden object-contain"
//             alt=""
//             src="/frame-1321315107@2x.png"
//           />
//         </div>
//         <img
//           className="absolute top-[792px] right-[0.2px] rounded-[111.19px] w-[248.8px] h-[248.8px] overflow-hidden object-contain"
//           alt=""
//           src="/frame-1321315111@2x.png"
//         />
//         <img
//           className="absolute top-[792px] left-[0px] rounded-[111.19px] w-[248.8px] h-[248.8px] overflow-hidden object-contain"
//           alt=""
//           src="/frame-1321315113@2x.png"
//         />
//         <img
//           className="absolute top-[400.9px] left-[182px] rounded-[111.19px] w-[248.8px] h-[248.8px] overflow-hidden object-contain"
//           alt=""
//           src="/frame-1321315110@2x.png"
//         />
//       </div>
//       <div className="absolute top-[120px] left-[calc(50%_-_317px)]">
//         Meet Our Starclinch Squads
//       </div>
//       <img
//         className="absolute top-[298px] left-[calc(50%_-_150px)] rounded-13xl w-[300px] h-[300px] overflow-hidden object-cover"
//         alt=""
//         src="/frame-1321315109@2x.png"
//       />
//       <div className="absolute top-[432.7px] left-[687.5px] w-[545px] h-[55px] text-9xl">
//         <div className="absolute top-[0px] left-[490px] [backdrop-filter:blur(59px)] rounded-65xl bg-whitesmoke w-[55px] h-[55px] flex flex-row items-center justify-center p-2 box-border">
//           <div className="relative">{`->`}</div>
//         </div>
//         <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(59px)] rounded-65xl bg-whitesmoke w-[55px] h-[55px] flex flex-row items-center justify-center p-2 box-border">
//           <div className="relative">{`<-`}</div>
//         </div>
//       </div>
//       <div className="absolute top-[682px] left-[calc(50%_-_381.5px)] flex flex-col items-center justify-start gap-12 text-5xl">
//         <div className="flex flex-col items-center justify-start gap-6">
//           <div className="rounded-40xl [background:linear-gradient(180deg,_#205f5f,_rgba(8,_8,_16,_0))] flex flex-row items-center justify-start py-2 px-6">
//             <div className="relative">5 Members</div>
//           </div>
//           <div className="w-[763px] flex flex-col items-center justify-start gap-4 text-29xl">
//             <div className="self-stretch relative">Design Dynamos</div>
//             <div className="self-stretch relative text-5xl opacity-[0.5]">
//               The artists behind the visuals. These design superheroes bring
//               ideas to life, painting our projects with creativity and
//               imagination
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row items-center justify-start gap-2.5 text-mediumturquoise">
//           <div className="relative">Our design team is growing. Apply Now</div>
//           <img
//             className="w-7 relative h-7 object-contain"
//             alt=""
//             src="/group-1321314281@2x.png"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Component2;



import type { NextPage } from "next";

export type Component2Type = {
  className?: string;
};

const Component2: NextPage<Component2Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4593px] left-0 shadow-[0px_-80px_90px_#080810_inset] bg-gray-300 w-full h-[1080px] overflow-hidden text-center text-29xl text-white font-heading-2 ${className}`}
    >
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[1680px] h-[1953px]">
        <div className="absolute top-[318px] left-1/2 transform -translate-x-1/2 shadow-[0px_68.8px_61.15px_rgba(34,_33,_100,_0.12)_inset] rounded-full bg-gainsboro-200 border-midnightblue-200 border-[1px] border-solid w-[1605.2px] h-[1605.2px]" />
        
        <div className="absolute top-[410.3px] left-[1250.1px] w-[230px] h-[230px]">
          <div className="absolute top-[47.5px] left-[-20.6px] rounded-[45.85px] bg-slateblue w-[185.1px] h-[185.1px] overflow-hidden transform -rotate-7.6 hidden" />
          <img
            className="absolute top-0 left-0 rounded-full w-[230px] h-[230px] object-contain"
            alt="Starclinch Squad Member"
            src="/frame-1321315107@2x.png"
          />
        </div>

        <img
          className="absolute top-[792px] right-[0.2px] rounded-full w-[248.8px] h-[248.8px] object-contain"
          alt="Starclinch Squad Decoration"
          src="/frame-1321315111@2x.png"
        />
        <img
          className="absolute top-[792px] left-0 rounded-full w-[248.8px] h-[248.8px] object-contain"
          alt="Starclinch Squad Decoration"
          src="/frame-1321315113@2x.png"
        />
        <img
          className="absolute top-[400.9px] left-[182px] rounded-full w-[248.8px] h-[248.8px] object-contain"
          alt="Starclinch Squad Decoration"
          src="/frame-1321315110@2x.png"
        />
      </div>

      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 text-2xl font-bold">
        Meet Our Starclinch Squads
      </div>

      <img
        className="absolute top-[298px] left-1/2 transform -translate-x-1/2 rounded-13xl w-[300px] h-[300px] object-cover"
        alt="Main Starclinch Squad Member"
        src="/frame-1321315109@2x.png"
      />

      <div className="absolute top-[432.7px] left-[687.5px] flex flex-row items-center justify-center gap-2 text-9xl">
        <button className="backdrop-blur-[59px] rounded-full bg-whitesmoke w-[55px] h-[55px] flex items-center justify-center">
          {`<-`}
        </button>
        <button className="backdrop-blur-[59px] rounded-full bg-whitesmoke w-[55px] h-[55px] flex items-center justify-center">
          {`->`}
        </button>
      </div>

      <div className="absolute top-[682px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-12 text-5xl">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-40xl bg-gradient-to-b from-green-800 to-transparent flex items-center py-2 px-6">
            <span>5 Members</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-29xl">
            <span>Design Dynamos</span>
            <p className="text-5xl opacity-50">
              The artists behind the visuals. These design superheroes bring
              ideas to life, painting our projects with creativity and
              imagination.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2.5 text-mediumturquoise">
          <span>Our design team is growing. Apply Now</span>
          <img
            className="w-7 h-7 object-contain"
            alt="Apply Now Icon"
            src="/group-1321314281@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Component2;
