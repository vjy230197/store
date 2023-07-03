import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/Slices/SliderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { sliderData } from '../../assets/data/dummyData'

const Slider = () => {

    const slideIndex = useSelector((state) => state.slider.value)

    console.log('slideIndex', slideIndex);

    const dispatch = useDispatch();

    const handle = () => {
        dispatch(nextSlide(slideIndex + 1))
    }

    const handle1 = () => {
        dispatch(prevSlide(slideIndex - 1))
    }

    return (
        <div className='relative pb-4'>
            <div>
                {
                    sliderData.map((item, index) => {
                        return (
                            <div key={item.id} className={parseInt(item.id) === slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" :
                                "opacity-0 duration-700 ease-in-out scale-95"
                            }>
                                <div>
                                    {parseInt(item.id) === slideIndex && <img className='h-[850px] w-full' src={item.img} alt="" />}

                                </div>
                                <div className='absolute top-44 mx-auto inset-x-1/4'>
                                    <p className='text-white text-4xl font-inter font-bold '>
                                        {parseInt(item.id) === slideIndex && item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex absolute bottom-12 left-[45%]'>
                {

                    sliderData.map((dot, index) => {
                        return (
                            <div className='mr-4' key={dot.id}>
                                <div className={index === slideIndex ? 'bg-green-300 rounded-full p-4 cursor-pointer' :
                                    'bg-white rounded-full p-4 cursor-pointer'} onClick={() => { dispatch(dotSlide(index)) }}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={handle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
                <button className='absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={handle1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </button>
            </div>

        </div>
    )
}

export default Slider