import React, { useState } from "react";
import buttonstyle from "./Button.module.css";
import PopupBox from "../PopupBox/PopupBox";

function Button(props) {
  const [buttonclick, setButtonclick] = useState(false);

  console.log(buttonclick);

  return (
    <div>
      <main >
        {/* button  */}
        <div>
          <button
            className={buttonstyle.outer}
            onClick={() => {
              setButtonclick(btnclick => !btnclick);
              
            }}
            style={{
              border:"1px solid",
            }}
          >
            Save segment
          </button>
        </div>

        {/* popup  */}
        {buttonclick ? <PopupBox buttonclick={setButtonclick} btnclickcheck={buttonclick} /> : null}
      </main>
    </div>
  );
}

export default Button;
