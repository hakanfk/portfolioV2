import React from "react";

type Props = {
  title: string;
  color: string;
};

function SkillCard({ title, color }: Props) {
  return (
    <div
      className={`w-36 h-16 rounded-md ${color} px-2 py-1 flex justify-center items-center `}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default SkillCard;
