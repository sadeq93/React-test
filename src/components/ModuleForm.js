import React from "react";
import MODULES from "../modules";
import RankInput from "./RankInput";
import { Modules } from "../util/Context";
const ModuleForm = () => {
  return (
    <div>
      <Modules.Consumer>{(msg) => <p>{msg}</p>}</Modules.Consumer>
      {MODULES.map((moduleName) => {
        return <RankInput label={moduleName} key={moduleName} />;
      })}
    </div>
  );
};

export default ModuleForm;
