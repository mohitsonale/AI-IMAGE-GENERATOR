import {assets} from '../assets/assets';

function Results(){

    return(
        <form className='flex flex-col justify-center items-center min-h-[90vh]'>
            <div>
                <div className='relative'>
                    <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
                    <span className=' absolute w-full h-1 bottom-0 left-0 bg-blue-500 transition-all duration-[10s] '  />
                </div>
                <p>Loading...</p>
            </div>
            <div className='flex  w-full max-w-xl bg-neutral-500 text-white rounded-full text-sm p-0.5 mt-10'>
                <input type="text" placeholder='Generate your image...' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
                <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full cursor-pointer'>Generate</button>
            </div>

            <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
                <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
                <a href="" download className=' bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
            </div>
        </form>
    )
}

export default Results;