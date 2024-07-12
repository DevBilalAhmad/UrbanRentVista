const TeamMeam = ({ img, name, Rank }) => {
  return (
    <div
      className=" flex flex-col w-full items-center justify-start  text-center text-8xl-6 text-text-colour-1 font-h4-semibold bg-slate-100 sm:bg-transparent mb-2  rounded-md pt-2"
      // style={frameDiv1Style}
    >
      <img
        className="w-[200px]  rounded-tl-101xl rounded-tr-21xl rounded-b-21xl h-[280px] object-cover"
        alt=""
        src={img}
      />
      <div className=" font-semibold">{name}</div>
      <div className=" text-xl mb-4">{Rank}</div>
    </div>
  );
};

export default TeamMeam;
