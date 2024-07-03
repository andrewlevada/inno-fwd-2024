import Image from "next/image";

export interface WorkInfo {
  img: string;
  alt: string;
  label: string;
  link?: string;
  date: string;
}

function WorkCard(props: WorkInfo) {
  return (
    <div className="flex flex-col w-[280px] gap-2">
      <Image className="w-full h-auto rounded-[1px]" src={props.img} alt={props.alt} width={280} height={280} />

      <div className="flex flex-row w-full gap-2 font-[15px]">
        {props.link ? (
          <a className="underline" href={props.link} target="_blank">{props.label}</a>
        ) : (
          <p>{props.label}</p>
        )}

        <p className="text-[#0E235899]">{props.date}</p>
      </div>
    </div>
  );
}

export default WorkCard;
