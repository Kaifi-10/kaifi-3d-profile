import React from 'react'
import plane from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = () => {
    const {scene, animations} = useGLTF(plane)
  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane