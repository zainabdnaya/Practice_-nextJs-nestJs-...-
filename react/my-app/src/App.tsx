import React, { useState } from 'react'
import {
  useSpring,
  animated,
  useSpringRef,
} from '@react-spring/web'

import styles from './styles.module.css'
import Canvas from './Game'
import _Form from './Form'

export default function App() {
  const [open, set] = useState(false)

  // const springApi = useSpringRef()
  const { width, height, ...rest } = useSpring({
    // ref: springApi,
    // config: config.stiff,
    from: {
      width: 10,
      height: 10,
      background: 'yellow',
      
    },
    to: {
      width: 100,
      height: 100,
      background: open ? '#0e101c' : 'yellow',
    },
  })
  const [showCanvas, setShowCanvas] = useState(false);

  // const transApi = useSpringRef()
  // useChain(open ? [springApi, transApi] : [transApi, springApi], [
  //   open ? 0 : 1,
  //   open ? 0.1 : 0.6,
  // ])


  const [datas, setData] = useState({ Id: "hello", Name: "hello", Email: "" });

  const OnClick = () => {
    set(!open)
    if (showCanvas === false) {
      setShowCanvas(true);
    }
    else {
      setShowCanvas(false);
    }
  }

  const [showForm, setShowForm] = useState(false);

  const OnClick1 = () => {
    set(!open)
    if (showForm === false) {
      setShowForm(true);
    }
    else {
      setShowForm(false);
    }
  }
  //set an animarted div off

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: width, height: height }}
        className={styles.container}
        onClick={OnClick} >
        {showCanvas && <Canvas data={datas.valueOf()} />}
        {/* {setShowCanvas(false)} */}
      </animated.div>
      if(_in != 1)
      {

        <animated.div
          style={{ ...rest, width: width, height: height }}
          className={styles.container}
          onClick={OnClick1} >
          {
            showForm && <_Form />
          }
        </animated.div>
      }
    </div>

  );
}
