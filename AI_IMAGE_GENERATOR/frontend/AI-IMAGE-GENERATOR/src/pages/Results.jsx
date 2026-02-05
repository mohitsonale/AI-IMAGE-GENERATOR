import { useContext, useState } from 'react';
import {assets} from '../assets/assets';
import {motion} from 'framer-motion';
import { Usercontext } from '../context/Appcontext';

function Results(){

    const[image,Setimage]=useState(assets.sample_img_1);
    const[isLoadded,SetisLoadded]=useState(false);
    const[loading,Setloading]=useState(false);
    const[input,Setinput]=useState("");

    const {generateimages}=useContext(Usercontext)
    
    const Submithandler=async(e)=>{

        e.preventDefault();
        console.log("Submit clicked, prompt:", input);

        Setloading(true)

        if(input){
            const img=await generateimages(input)
            if(img){
                SetisLoadded(true) 
                Setimage(img)
            }
        }

        Setloading(false)



    }

    return(
        <motion.form onSubmit={Submithandler} className='flex flex-col justify-center items-center min-h-[90vh]'

        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={true}
        
        >
            <div>
                <div className='relative'>
                    <img src={image} alt="Generated image" className='max-w-sm rounded' />
                    <span className= { loading ?`absolute w-full h-1 bottom-0 left-0 bg-blue-500 transition-all duration-[20s]`:`absolute w-0 h-1 bottom-0 left-0 bg-blue-500 `}   />
                </div>
                <p className={!loading ? "hidden":" "}>Loading...</p>
            </div>
            { !isLoadded &&  <div className='flex  w-full max-w-xl bg-neutral-500 text-white rounded-full text-sm p-0.5 mt-10'>
                <input onChange={(e)=>Setinput(e.target.value)} value={input} type="text" placeholder='Generate your image...' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
                <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full cursor-pointer'>Generate</button>
            </div>

               
            }

            { isLoadded &&  <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
                <p onClick={()=>SetisLoadded(!isLoadded)} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
                <a href={image} download className=' bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
            </div>}

           
        </motion.form>
    )   
}

export default Results;