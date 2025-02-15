/* eslint-disable react/no-unknown-property */
import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader/Loader'
import Island from '../../Models/Island'
// import { Sky } from '@react-three/drei'
import Sky from '../../Models/Sky'
import Plane from '../../Models/Plane'
import Bird from '../../Models/Bird'
import HomeInfo from '../HomeInfo/HomeInfo'
const Home = () => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () =>{
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]
    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    }else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () =>{
    let screenScale,  screenPosition;
   
    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    }else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        {/* All 3d objects are rendered under Canvas */}
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far:1000}}
        > 
            <Suspense fallback={<Loader />}> {/* Suspense used as a wrapper for rendering the loading screen */}
              <directionalLight position={[1, 1, 1]} intensity={2}/> {/* this light refers to the light coming from a distance like from sun */}
              <ambientLight intensity={0.5}/> {/* this light illuminates the whole objects equally without casting shadows */}
              
              {/* we can remove the pointlight as we have sun and ambientLight */}
              {/*<pointLight />  this light emits lights in all direction from single point */}
              {/* <spotLight /> it is simillar to pointLight but it provides in a shape of a cone so we can provide an angle*/}
              <hemisphereLight skycolor='#b1e1ff' groundColor='#000' intensity={1}/> {/* it illuminates the scene with gradient*/}

              {/* <Sky /> */}
              <Bird />
              <Sky 
                isRotating={isRotating}
              />
              
              <Island 
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
              />
              <Plane 
              isRotating={isRotating}
                planeScale={planeScale}
                planePosition={planePosition}
                rotation={[0, 20, 0]}
              />
            </Suspense>
        </Canvas>
        
    </section>
  )
}

export default Home