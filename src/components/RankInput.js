import React, { useContext } from "react";
import { Modules } from "../util/Context";
const RankInput = ({ label }) => {
  const [rank, setRank] = useContext(Modules);

  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={label}
        onChange={(e) => setRank(e.target.value)}
      />
     
    </div>
  );
};

export default RankInput;
