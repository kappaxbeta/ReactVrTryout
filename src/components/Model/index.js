import React from 'react';
import { Entity} from "aframe-react";

// Model is in the public assets folder
// Model was exported was glb with blender
// It would be more elegant to preloud the model in assets
function Model() {
    return (
        <Entity animation-mixer="clip: Idle" gltf-model="src: url(/assets/idle.glb);" position={{x: 0, y: 0, z: -3}}/>
    );
}

export default Model;
