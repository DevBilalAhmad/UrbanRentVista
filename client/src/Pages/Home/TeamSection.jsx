import TeamMeam from "./team-meam";
import { TeamMemData } from "../../Components/Data/Data";

const Team = () => {
  return (
    <div className="flex  flex-col w-full gap-y-10 justify-center items-center overflow-hidden text-center text-20xl-8 text-text-colour-2 font-h4-semibold ">
      <div className=" text-lgi-4 tracking-[0.15em] uppercase font-medium text-colour-1 inline-block w-[386px]">
        Introduce to
      </div>
      <div className=" text-[2rem] leading-[47px] font-semibold inline-block ">
        Our Team of Experts
      </div>
      <div className="flex px-5 flex-col gap-x-10 justify-center items-center w-full sm:flex-row  ">
        {TeamMemData.map((mem) => (
          <TeamMeam
            key={mem.id}
            img={mem.img}
            name={mem.name}
            Rank={mem.Rank}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
