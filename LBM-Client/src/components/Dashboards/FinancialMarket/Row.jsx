import { useState } from "react";
import "./FinancialMarket.scss";
import BTC from "./assets/BTC.svg"
import LTC from "./assets/LTC.svg"
import ETH from "./assets/ETH.svg"

export default function Row({img,name,change, amount, value}) {

    const [render , setRender] = useState(value)
    const [active, setActive] =useState({
        supply: false,
        borrow: false
    });

   var urlImg

    if(img === 'BTC') {
        urlImg = BTC
    }
    else if(img ==='LTC') {
        urlImg = LTC
    }
    else if(img==='ETH') {
        urlImg = ETH
    }

    const handleClick = () => {
        setRender(!render)
    };

    const handleButton = (e) => {
        let changed = e.target.name
        e.preventDefault()
        setActive({
           
        })
    };

    return (
            <div className="row" >
                <div className="innerRow2" onClick={handleClick}>
                    <img src={urlImg} />
                    <p>{name}</p>
                </div>
                {render && <div className="innerRow3" onClick={handleClick}>
                    <p style={(change[0]==='-')? {color: 'red'}:{color:'green'}}>{change}</p>
                    <p>{amount}</p>
                </div>}
                {!render &&<div className="innerRow">                      
                    <button onClick={handleButton}>
                        Supply Market
                    </button>
                    <button onClick={handleButton}>
                        Borrow Market
                    </button>
                </div>}
            </div>
    )
};

