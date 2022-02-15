import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import exp from "constants";
import { text } from "node:stream/consumers";
import { Router,useRouter } from "next/router";
// import { Canvas } from './Game'


// import "./styles.css";

var w = 0;
var h = 0;
const App = () => {
  var r = useRouter();
  // const size = useWindowSize();
  const [count, setCount] = useState(false);

  // const [click_me, setClick_me] = useState("true");
  // const onClick = () => {
  //   { click_me && <Canvas /> }
  // };
  return (

    <>
      {/* <onClick={} /> */}
      //add passport tocken
      
    {!count &&<button  className="button" 
        onClick={() => {
          setCount(true);
          r.push("http://127.0.0.1:3000/login/42/return");
        }}>
          LOG In
      </button>
      }
      {count &&  <div className="example-container">
            <motion.div
              //ball moved to the right
              animate={{
                x: [0, 0, 0, 0, 0],
                y: [0, 1000, 0, 0, 0],
                rotate: [0, 0, 360, 360, 0],
                scale: [2, 1, 1, 1, 2],
                borderRadius: ["20%", "20%", "50%", "50%", "90%"]
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 1
              }}
            />

          </div> 
      } 
    </>
  );
};
export default App;
//
