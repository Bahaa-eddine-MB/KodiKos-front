import Image from "next/image";
const InfoCard = ({ title, description, icon }) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-6 border-[1px] border-gray-200 rounded-2xl max-w-[25vw] shadow-lg drop-shadow-sm transition-all duration-700 hover:cursor-pointer hover:bg-purple-200 hover:scale-105">
        <div className="bg-purple-200 h-16 w-16 rounded-full flex items-center justify-center">
          <Image alt="" src={icon} width={40} height={40} />
        </div>
        <div className="text-black font-semibold text-xl">{title}</div>
        <p className="text-mainGray2">{description}</p>
      </div>
    </>
  );
};

export default InfoCard;
