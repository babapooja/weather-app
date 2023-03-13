import React from 'react'
import { iconUrlFromCode } from '../Services/weatherService.service'

export default function Forecast({ title, items }) {

    return (
        <div>
            <div className='flex justify-start items-center mt-6 '>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-1' />
            <div className='flex items-center justify-between text-white'>
                {
                    items.map((item, i) => {
                        return (
                            <div key={i} className='flex flex-col items-center justify-center'>
                                <p className='font-light text-sm'>{item.title}</p>
                                <img src={iconUrlFromCode(item.icon)} alt="icon" className='w-12 my-1' />
                                <p className='font-medium'>{item.temp.toFixed()}&deg;</p>
                            </div>)
                    })
                }



            </div>
        </div>
    )
}
