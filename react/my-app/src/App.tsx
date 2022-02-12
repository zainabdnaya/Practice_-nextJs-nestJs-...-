import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Socket, io } from 'socket.io-client';
import "./index.css";
import Canvas from './Game';
import { useState } from 'react';

import { Button, View, StyleSheet } from 'react-native';


// export default class GridView extends Component {

//   render() {
//        return (
//            <View style={styles.container}>
//              <View style={styles.buttonContainer}>
//                <Button title="Button 1"/>
//              </View>
//              <View style={styles.buttonContainer}>
//                <Button title="Button 2"/>
//              </View>
//            </View>
//        );
//    }
// }

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
  }
});
// export default VideoPlayer;


export default function App() {

    return (
      <div className="App">
    
    <View style={styles.container}>
             <View style={styles.buttonContainer}>
               <Button title="Play"/>
             </View>
             <View style={styles.buttonContainer}>
               <Button title="Watch"/>
             </View>
           </View>
      </div>

    );

}


