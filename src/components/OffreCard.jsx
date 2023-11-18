import Image from "next/image";
import yes from "@assets/yes.svg";
const OfrreCard = ({ title, price, type, list }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 p-6 border-[1px] border-gray-200 rounded-2xl w-[22vw] shadow-lg drop-shadow-sm transition-all duration-700 hover:cursor-pointer hover:bg-purple-200 hover:scale-105">
        <div className="text-black font-semibold text-xl">{title}</div>
        <p className="text-black text-6xl font-bold flex items-end gap-3">
          {price}
          <p className="text-gray-400 text-lg font-extralight">{type}</p>
        </p>
        <div className="self-start pl-8 space-y-4 pt-4">
               {list.map((e, index) => {
          return (
            <>
              <div className="flex gap-6 items-center">
                <Image alt="" src={yes} />
                <p>{e}</p>
              </div>
            </>
          );
        })}
        </div>
     
        <button className="mt-8 bg-Secondary flex items-center font-medium gap-3 px-6 py-3 rounded-3xl text-white hover:bg-opacity-80 transition-all duration-700">
          Learn more
          <span className="fill-white">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.293 0.74701C8.48053 0.559539 8.73484 0.454224 9 0.454224C9.26516 0.454224 9.51947 0.559539 9.707 0.74701L14.207 5.24701C14.3945 5.43454 14.4998 5.68885 14.4998 5.95401C14.4998 6.21917 14.3945 6.47348 14.207 6.66101L9.707 11.161C9.5184 11.3432 9.2658 11.444 9.0036 11.4417C8.7414 11.4394 8.49059 11.3342 8.30518 11.1488C8.11977 10.9634 8.0146 10.7126 8.01233 10.4504C8.01005 10.1882 8.11084 9.93561 8.293 9.74701L11 6.95401H1.5C1.23478 6.95401 0.98043 6.84865 0.792893 6.66112C0.605357 6.47358 0.5 6.21923 0.5 5.95401C0.5 5.68879 0.605357 5.43444 0.792893 5.2469C0.98043 5.05937 1.23478 4.95401 1.5 4.95401H11L8.293 2.16101C8.10553 1.97348 8.00021 1.71917 8.00021 1.45401C8.00021 1.18885 8.10553 0.934538 8.293 0.74701Z" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default OfrreCard;
