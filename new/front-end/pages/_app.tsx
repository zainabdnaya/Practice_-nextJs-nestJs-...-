import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/Game.css';
import Canvas from './Game'
import App from './index'
import { useState } from "react";
import { login_word } from './first_page'




function MyApp({ Component, pageProps }: AppProps) {

  // const {showlogin,setlogin} = useState();


  return (
    <App />
  );
}

export default MyApp
