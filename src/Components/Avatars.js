import React from "react";
import man from "../Images/man.png";
import woman from "../Images/woman.png";

export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width={"50px"} />
    </div>
  );
};
export const FeMaleAvatar = () => {
  return (
    <div>
      <img src={woman} alt="" width={"50px"} />
    </div>
  );
};
