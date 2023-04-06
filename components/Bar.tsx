import { ISkill } from "@/type";
import { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-200 rounded-full dark:bg-dark-200 shadow-custom-light dark:shadow-custom-dark ">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600 "
        style={{ width: level }} >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
