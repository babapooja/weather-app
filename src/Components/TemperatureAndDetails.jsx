import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from '../Services/weatherService.service';

function TemperatureAndDetails({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone } }) {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-cl text-cyan-300'>
                <p>{details}</p>
            </div>
            <div className='flex items-center justify-between text-white py-3'>
                <img src={iconUrlFromCode(icon)} alt="icon"
                    className='w-20' />
                <p className='text-5xl'>{temp.toFixed()}&deg;</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-1" />
                        Feels like: <span className='font-medium ml-1'>{feels_like.toFixed()}&deg;</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" />
                        Humidity: <span className='font-medium ml-1'>{humidity.toFixed()}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1" />
                        Wind Speed: <span className='font-medium ml-1'>{speed.toFixed()} km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-2 text-white text-sm py-3'>
                <UilSun size={18} className="mr-1" />
                <p className='font-light'>Sunrise:
                    <span className='ml-1 font-medium'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </p>

                <p className='font-light'> | </p>

                <UilSunset size={18} className="mr-1" />
                <p className='font-light'>Sunset:
                    <span className='ml-1 font-medium'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </p>

                <p className='font-light'> | </p>

                <UilSun size={18} className="mr-1" />
                <p className='font-light'>High:
                    <span className='ml-1 font-medium'>{temp_max.toFixed()}&deg;</span>
                </p>

                <p className='font-light'> | </p>

                <UilSun size={18} className="mr-1" />
                <p className='font-light'>Low:
                    <span className='ml-1 font-medium'>{temp_min.toFixed()}&deg;</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails