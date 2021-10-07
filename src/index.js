import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>

        <a-box color='red'/>
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center', width: 1.5}} position={{x: 0, y: 2.01, z: -1}}/>
        <Entity text={{value: 'Entity-Component-System (ECS)', align: 'left', width: 1.5}} position={{x: 2, y: 2.01, z: -1}}/>
        <Entity text={{value: 'It can go beyond 360 degree content', align: 'left'}} position={{x: 2, y: 1.9, z: -1}}/>
        <Entity text={{value: '--> Positional tracking', align: 'left'}} position={{x: 2, y: 1.8, z: -1}}/>
        <Entity text={{value: '--> Controllers', align: 'left'}} position={{x: 2, y: 1.7, z: -1}}/>
        <Entity text={{value: 'What Are The Benefits', align: 'left', width: 1.5}} position={{x: 4, y: 2.01, z: -1}}/>
        <Entity text={{value: '--> Declarative', align: 'left'}} position={{x: 4, y: 1.9, z: -1}}/>
        <Entity text={{value: '--> Cross Platform', align: 'left'}} position={{x: 4, y: 1.8, z: -1}}/>
        <Entity text={{value: '--> Tool Agnostic', align: 'left'}} position={{x: 4, y: 1.7, z: -1}}/>
        <Entity text={{value: 'A-Frame + React', align: 'left', width: 1.5}} position={{x: 6, y: 2.01, z: -1}}/>
        <Entity text={{value: 'Node Package Manager (npm)', align: 'left'}} position={{x: 6, y: 1.9, z: -1}}/>
        <Entity text={{value: 'aframe-react', align: 'left'}} position={{x: 6, y: 1.8, z: -1}}/>
        <Entity text={{value: 'Benefits', align: 'left'}} position={{x: 6, y: 1.7, z: -1}}/>
        <Entity text={{value: '--> React: manages state & views ', align: 'left'}} position={{x: 6, y: 1.6, z: -1}}/>
        <Entity text={{value: '--> A-Frame: 3D & VR displays', align: 'left'}} position={{x: 6, y: 1.5, z: -1}}/>
        <Entity text={{value: 'Here are some helpful links', align: 'left', width: 1.5}} position={{x: 8, y: 2.01, z: -1}}/>
        <Entity text={{value: 'https://github.com/supermedium/aframe-react', align: 'left'}} position={{x: 8, y: 1.9, z: -1}}/>
        <Entity text={{value: 'https://aframe.io/', align: 'left'}} position={{x: 8, y: 1.8, z: -1}}/>
        <Entity text={{value: 'https://www.youtube.com/watch?v=eTFPMxqod2I', align: 'left'}} position={{x: 8, y: 1.7, z: -1}}/>
        <Entity text={{value: 'https://bestofreactjs.com/repo/ngokevin-aframe-react-react-component-libraries', align: 'left'}} position={{x: 8, y: 1.6, z: -1}}/>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
