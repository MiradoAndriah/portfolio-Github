import React from 'react'
import {motion} from 'motion/react'

export default function Notfound() {
  return (
    <div className=' justify-center items-center flex h-screen'>
        <motion.div drag  
        dragConstraints={{
    top: -70,
    left: -70,
    right: 70,
    bottom: 70,
  }}
         className='bg-gray-950 justify-center items-center flex w-50 h-30 rounded-2xl'> <p>la page n'existe pas</p> </motion.div>
    </div>
  )
}
