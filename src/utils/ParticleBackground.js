import React from 'react';
import Particles from "react-particles-js"
import ParticlesConfig from "../assets/particles-config"

export default function ParticleBackground() {
    return (
        <Particles params={ParticlesConfig}></Particles>
    );
}