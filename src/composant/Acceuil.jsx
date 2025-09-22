import React from 'react'
import './bg.css';
import pdp from '../assets/pdp.jpg'
import { Avatar,Card,CardContent,Typography,TextField,Button} from '@mui/material';
import { SiTailwindcss } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import {motion} from 'motion/react'


export default function Acceuil() {

  const [liked, setLiked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data)=>{
    axios.get(`http://localhost:3000/message?coms=${data.coms}`).then((res)=>{
      if (res.data.length > 0){
        toast.error("write oder message")
      }else{
        axios.post('http://localhost:3000/message',data).then((res)=>{
        toast.success("Thank's for your device")
      }).catch((err)=>{
        toast.error("i have an error, sorry")
      })}
    })
    
  };
  return (
    <>
    <div className='flex justify-center mb-20 mt-3 '>
      <div className=' md:w-[400px] w-[140px] text-xs border-b-1 '>
        <p className='text-gray-500 text-opacity-50'>Mirado0603@gmail.com</p>
      </div>
      <div className=' md:w-[400px] w-[140px] text-right border-b-1 md:pe-0 pe-4'>
          <i class="fab fa-github me-5"></i>
          <i class="fab fa-facebook me-5"></i>
          <i class="fab fa-linkedin"></i>
        </div>
    </div>
      
    
      <div className=' flex justify-center mb-20 flex-col sm:flex-row ' id='home'>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        className=' md:w-[500px] md:ms-0 ms-10 md:mb-0 mb-10 w-[300px] max-w-full sm:w-[300px] python'>
          <h2 className='text-3xl font-bold'>Mirado Andriah</h2>
          <h3 className='text-2xl'>Developper Fulstack</h3>
          <p>Je suis passionné par le <code className='card bg-neutral-900 rounded'>codage</code> et toujours curieux 
            d’apprendre de nouvelles choses. <code className='card bg-neutral-900 rounded'>Gamer</code> dans l’âme, 
            j’aime aussi pratiquer du <code  className='card bg-neutral-900 rounded'>sport</code> pour garder un bon équilibre 
            entre technologie et énergie.</p>
        </motion.div>
        <div className=' w-[300px] flex justify-center swing-left-in'>
            <div className='relative w-55 h-55'>
              <div className='absolute inset-0 bg-blue-300  rounded-full clinote'></div>
              <div className='absolute left-4 top-2'>
                <img src={pdp} alt="" className='w-34 h-38 rounded-full' />
              </div>
              <div className='absolute -right-5 bottom-0 bg-red-400 w-25 h-15 rounded-2xl justify-center items-center flex flotte'>
                <span className='font-bold'>Dev Web</span>
              </div>
            </div>
 
        </div>
      </div>

      <div className='flex justify-center mb-20 flex-col sm:flex-row'>
        <div className=' md:w-[500px] w-[260px] md:ms-0 ms-10 md:mb-0 mb-4 h-auto'>
        <Card variant="outlined" sx={{ backgroundColor: '#1E1E1E' ,borderColor: '#000' }}>
        <CardContent>
          <p className='bg-neutral-900 shadow w-31 p-1 ps-2 rounded text-xs mb-2 text-white'>langage & database</p>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-15 js'>
              <i className="fa-brands fa-js text-yellow-400 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>JavaScript</span>
            </motion.div>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-17 html'>
              <i className="fa-brands fa-html5 text-orange-600 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>HTML</span>
            </motion.div>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-16 css'>
              <i className="fa-brands fa-css3-alt text-blue-600 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>CSS</span>
            </motion.div>
            <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-14 python'>
              <i className="fa-brands fa-python text-blue-400 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>Python</span>
            </motion.div>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-10 php'>
              <i className="fa-brands fa-php text-indigo-700 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>PHP</span>
            </motion.div>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-14 db1'>
              <i className="fa-solid fa-database text-gray-700 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>My sql</span>
            </motion.div>
            <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:2}}
            className='mt-5 flex items-center space-x-14 db2'> 
              <i className="fa-solid fa-database text-blue-600 sm:text-5xl text-3xl"></i>
              <span className='text-white opacity-50'>Pg Admin</span>
            </motion.div>
        </CardContent>
      </Card>
        </div>
        <div className='w-[300px] pl-10'>
        <Card variant="outlined" sx={{ backgroundColor: '#1E1E1E' ,borderColor: '#000' }}>
        <CardContent id='project'>
        <p className='bg-neutral-900 shadow w-15 p-1 ps-2 rounded text-xs mb-2 text-white'>project</p>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='flex items-center space-x-2 mt-4'>
            <button className='cursor-pointer hover:rotate-60 me-4'
            onClick={()=>window.location.href="https://portfolio-github-kohl.vercel.app/"}><i class="fas fa-link text-blue-500 text-2xl" aria-hidden="true"></i></button>
            <div className='gap-y-0'>
              <span className='text-white opacity-70 font-bold '>Portfolio</span>
              <p className='text-xs text-white opacity-50'>developper avec react+Tailwind</p>
            </div>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='flex items-center space-x-2 mt-4'>
            <button className='cursor-pointer hover:rotate-60 me-4'
            onClick={()=>window.location.href=""}><i class="fas fa-link text-gray-600 text-2xl" aria-hidden="true"></i></button> 
            <div className='gap-y-0'>
              <span className='text-white opacity-70 font-bold '><a href="">Vender Free</a></span>
              <p className='text-xs text-white opacity-50'>developper avec react+Tailwind+python</p>
            </div>
        </motion.div>
        
        </CardContent>
      </Card>

      <Card variant="outlined" className='mt-5' sx={{ backgroundColor: '#1E1E1E' ,borderColor: '#000' }}>
        <CardContent>
        <p className='bg-neutral-900 shadow w-20 p-1 ps-2 rounded text-xs mb-2 text-white'>Contact me</p>
          <div className=''>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[215px] h-[40px] gap-4 items-center ps-3 me-5 hover:scale-110 text-white mt-3 text-xs'>
        <i class="fas fa-envelope #D14836 text-[#D14836]"></i>
        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mirado0603@gmail.com">mirado0603@gmail.com</a></p>
        <button className='cursor-pointer' 
        onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=mirado0603@gmail.com"}> <i class="fas fa-arrow-up rotate-45 text-xl"></i></button>
        </motion.div> 
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[215px] h-[40px] gap-4 items-center ps-3 me-5 hover:scale-110 text-white mt-3'>
        <i class="fab fa-facebook-f text-blue-800"></i>
        <p><a className='text-xs' target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/miii.rakotoson.1?locale=fr_FR">Mi'e Andriah</a></p>
        <button className='cursor-pointer ml-auto'
        onClick={() => window.location.href ="https://www.facebook.com/miii.rakotoson.1?locale=fr_FR"}> <i class="fas fa-arrow-up rotate-45 text-xl  mr-3"></i></button>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[215px] h-[40px] gap-4 items-center ps-3 me-5 hover:scale-110 text-white mt-3'>
        <i class="fab fa-linkedin-in text-[#0A66C2]"></i>
        <p><a className='text-xs' target="_blank"  rel="noopener noreferrer" href="https://linkedin.com/in/mirado-andriah-7ab856372">Mirado Andriah</a></p>
        <button className='cursor-pointer ml-auto'
        onClick={()=>window.location.href="https://linkedin.com/in/mirado-andriah-7ab856372"}><i class="fas fa-arrow-up rotate-45 text-xl mr-3"></i></button> 
        </motion.div> 
      </div> 
          
        </CardContent>
      </Card>
        </div>
      </div>

      <div className='md:ml-[270px] ml-[20px]'>
        <p className='bg-neutral-900 shadow w-12 p-1 rounded text-sm mb-2'>skills</p>
        <h2 className='md:text-3xl text-1xl'>I love working on...</h2>
      </div>
      <div className='flex justify-center mt-5 mb-20 flex-col sm:flex-row md:ms-0 ms-[15px]' id='skills'>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className=' w-[266px]'>
          <i class="fab fa-react text-4xl animate-spin mb-2"></i>
          <h4 className='font-bold'>React</h4>
          <p className='me-4'>I enjoy working with React because it allows me to create modern and interactive interfaces</p>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className=' w-[266px] md:mt-0 mt-5'>
        <SiTailwindcss className="text-blue-500 w-10 h-10 mb-1" />
          <h4 className='font-bold'>Tailwind</h4>
          <p className='me-4'>I enjoy using Tailwind because it allows me to create modern and stylish interfaces very quickly</p>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className=' w-[266px] md:mt-0 mt-5'>
        <SiPython className="text-yellow-400 w-10 h-10 mb-1" />
          <h4 className='font-bold'>Python</h4>
          <p className='me-4'>I am still learning backend development with Python, but I really enjoy coding and discovering how to create efficient and practical applications.</p>
        </motion.div>
      </div>

      <div className='md:ml-[270px] ml-[20px]'>
        <p className='bg-neutral-900 shadow w-17 p-1 rounded text-xs mb-2'>Contact</p>
        <h2 className='md:text-3xl text-1xl'>I love work with you.</h2>
      </div>
      <div className='flex justify-center mt-5 mb-20 flex-col md:flex-row'>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[265px] h-[60px] gap-4 items-center ps-3 me-5 md:ms-7 ms-2 hover:scale-110 '>
        <i class="fas fa-envelope"></i>
        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mirado0603@gmail.com">mirado0603@gmail.com</a></p>
        <div className='cursor-pointer ml-auto me-3' 
        onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=mirado0603@gmail.com"}> <i class="fas fa-arrow-up rotate-45 text-xs"></i></div>
        </motion.div> 
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[265px] h-[60px] gap-4 items-center ps-3 me-5 md:ms-0 ms-2 hover:scale-110 md:mt-0 mt-3'>
        <i class="fab fa-facebook-f"></i>
        <p><a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/miii.rakotoson.1?locale=fr_FR">Mi'e Andriah</a></p>
        <div className='cursor-pointer ml-auto'
        onClick={() => window.location.href ="https://www.facebook.com/miii.rakotoson.1?locale=fr_FR"}> <i class="fas fa-arrow-up rotate-45 text-xs  mr-3"></i> </div>
        </motion.div>
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[265px] h-[60px] gap-4 items-center ps-3 me-5 hover:scale-110 md:ms-0 ms-2 md:mt-0 mt-3'>
        <i class="fab fa-linkedin-in"></i>
        <p><a target="_blank"  rel="noopener noreferrer" href="https://linkedin.com/in/mirado-andriah-7ab856372">Mirado Andriah</a></p>
        <button className='cursor-pointer ml-auto'
        onClick={()=>window.location.href="https://linkedin.com/in/mirado-andriah-7ab856372"}> <i class="fas fa-arrow-up rotate-45 text-xs  mr-3"></i></button>
        </motion.div> 
        <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
        className='card bg-neutral-900 rounded flex w-[265px] h-[60px] gap-4 items-center ps-3 me-5 hover:scale-110 md:ms-0 ms-2 md:mt-0 mt-3'>
        <i class="fab fa-github"></i>
        <p><a target="_blank"  rel="noopener noreferrer" href="https://github.com/MiradoAndriah">Mirado Andriah</a></p>
        <button className='cursor-pointer ml-auto'
        onClick={()=>window.location.href="https://github.com/MiradoAndriah"}> <i class="fas fa-arrow-up rotate-45 text-xs  mr-3"></i></button>
        </motion.div>
      </div> 

      <motion.footer 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:2}}
      className='bg-neutral-900 w-full'>
        <div className='flex justify-left xl:ms-65 ms-2 mt-5 flex-col sm:flex-row pb-5 pt-5 md:gap-x-30 xl:gap-x-50 sm:gap-10'>
          <div className='sm:mb-0 mb-5'>
            <p className='mb-2 text-2xl'>Contact</p>
            <p><i class="fa-solid fa-envelope fa-lg" aria-hidden="true"></i><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mirado0603@gmail.com" className='text-xs ms-3'> mirado0603@gmail.com</a></p>
            <p className='mt-2'><i class="fa-solid fa-phone fa-lg" aria-hidden="true"></i><a href="" className='text-sm ms-3'>+261 38 81 550 62</a></p>
          </div>

          <div className='sm:mb-0 mb-5'> 
            <p className='text-2xl'>Navigation</p>
            <ul className='text-sm flex flex-col gap-y-3'><li className='mt-2 fas fa-home'><a href="#home" className='ms-2 text-xs'>Home</a></li>
            <li className='mt-2 fas fa-folder-open'><a href="#project" className='ms-2 text-xs'>project</a></li>
            <li className='mt-2 fas fa-cogs'><a href="#skills" className='ms-2 text-xs'>skills</a></li>
            </ul>
          </div>

          <div className=''>
          <p className='mb-2 text-2xl'>your advice</p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-y-2'>
            <input type="text" id='name' placeholder='your name' className='h-10 ps-2 border-1 rounded w-50' required />
              <input type="email" id='name' placeholder='your address' className='h-10 ps-2 border-1 rounded w-50' required/>
          <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue=""
          className='bg-gray-500 mb-2 w-50'
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'green',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
          
            },
          }}
          {...register("coms",{required:"champ required"})} />
          <Button variant="contained" type='submit' className='w-10'>Send</Button>
          </div>
          </form> 
          
          </div>
        
        </div>
        <i className={`fa-solid fa-thumbs-up text-2xl flex justify-left xl:ms-65 ms-2 mt-5 ${
          liked ? "text-blue-500" : "text-gray-400"
          }`}
          onClick={() => setLiked(!liked)}
          style={{ cursor: "pointer" }}>
          <span className='text-xs text-white ml-2'>like my portfolio</span></i>
        <p className='text-xs flex justify-left xl:ms-65 ms-2 mt-5 mb-3 '>© 2025 Mirado Andrianantenaina - development Web</p>
      </motion.footer>
    </>
  )
}
