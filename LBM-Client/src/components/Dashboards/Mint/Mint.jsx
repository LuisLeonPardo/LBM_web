import React from "react";
import { useState } from "react";
import "./Mint.scss";

function Mint() {
  const [first, setfirst] = useState("mint");

  function changeStateMint() {
    setfirst("mint");
    console.log(first);
  }

  function changeStateRepay() {
    setfirst("repay");
    console.log(first);
  }

  return (
    <div className="mint-container">
      <div className="title-mint">
        <h1>Mint/Repay LUSD</h1>
        <div className="mint-repay">
          <h3 onClick={changeStateMint}>Mint LUSD</h3>
          <h3 onClick={changeStateRepay}>Repay LUSD</h3>
        </div>
      </div>
      {first == "mint" ? (
        <div>
          <p>
            To mint LUSD with the Libertum Protocol, you need to enable it first
          </p>
          <h2>Confirm</h2>
        </div>
      ) : (
        <div>
          <p>
            To repay LUSD with the Libertum Protocol, you need to enable it
            first
          </p>
          <h2>Confirm</h2>
        </div>
      )}
    </div>
  );
}

export default Mint;
