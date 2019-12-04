import React from 'react';
import {Entity} from "aframe-react";


const colors = {
    planetOne: "#F0496F",
    planetTwo: "#53CE37",
    planetThree: "#545DC9",
    ground: "#8A2BE2",
    bg: "#E24C00",
    lightOne: "#FFF",
    lightTwo: "#2204E3",
    sky: "#000",
};

const animation = function (to, dur) {
    return `property: position; to: ${to}; dur: ${dur}; loop: true; dir:alternate;`;
};

const sound = "src: url(/assets/4am.mp3); autoplay: true; volume:0.5";

function Environment() {
    return (
        <>
            {/** light **/}
            <Entity light={{type: 'point'}} position={{x: 0, y: 2, z:-2}} color={colors.lightOne}/>
            <Entity light={{type: 'point'}} position={{x: 2, y: 2, z:-2}} color={colors.lightTwo}/>

            {/** Sky **/}
            <Entity primitive="a-sky" color={colors.sky}></Entity>
            <Entity  star-system="count: 1000; radius: 250; depth: 0"></Entity>

            {/** Ground and Background with sound **/}
            {/** Choose to use HTML instant of React Wrapper, because its easier for the primitives**/}
            <a-plane color={colors.ground} height="4" width="4" position="0 0 -2" rotation="-90 0 0" shadow sound={sound}></a-plane>
            <a-plane color={colors.bg} height="2" width="4" position="0 1 -4" rotation="0 0 0" shadow ></a-plane>

            {/** Deko **/}
            <a-sphere color={colors.planetOne} position="-3 6 -4" animation={animation(" -3 5 -4", 1500)}/>
            <a-sphere color={colors.planetTwo} position="-1 5 -6"  animation={animation(" -2 5 -8", 2000)} />
            <a-sphere color={colors.planetThree}  position="3 3 -4" animation={animation(" -3 3 -4", 2300)}/>
        </>
    );
}

export default Environment;
