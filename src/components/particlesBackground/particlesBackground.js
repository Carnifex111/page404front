import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import ParticleConfig from "./particle-config";


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles 
                    id="tsparticles" 
                    init={particlesInit} 
                    loaded={particlesLoaded} 
                    options={ParticleConfig}
                    />
        </>
    )
}

export default Particle;