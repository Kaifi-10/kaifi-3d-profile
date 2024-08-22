import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
        {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}

        {/* All 3d objects are rendered under Canvas */}
        <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far:1000}}
        > 
            <Suspense fallback={<Loader />}> {/* Suspense used as a wrapper for rendering the loading screen */}

            </Suspense>
        </Canvas>
        
    </section>
  )
}

export default Home