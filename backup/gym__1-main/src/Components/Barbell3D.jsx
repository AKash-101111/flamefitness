import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const BarbellModel = () => {
    const ref = useRef();
    const { scene } = useGLTF("/models/barbell.glb");

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.4;
        }
    });

    return <primitive object={scene} ref={ref} scale={2.5} position={[0.5, 0, -1]} />;
};

export default BarbellModel;
