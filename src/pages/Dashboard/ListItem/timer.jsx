import { useForm } from 'react-hook-form';
import { useState } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs'
import { useRef } from 'react';

const TimerToCount = () => {
    const [timer, setTimer] = useState(
        <span>00:00:00</span>
    );
    const [timeInterval, setTimeInterval] = useState(null);
    const [isCounter, setIsCounter] = useState(false)
    const [time, setTime] = useState(0);
    const [isPause, setIsPause] = useState(false)
    const [totalTime, setTotalTime] = useState(0)

    const intervalRef = useRef(0)

    let hrs = 0
    let min = 0;
    let sec = 0;

    
    const schema = yup.object({
        hours: yup.number('coloque um numero').required('horas'),
        minutes: yup.number('coloque um numero').required('minutos'),
        seconds: yup.number('coloque um numero').required('segundos')
    });
      
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const startCount = () => {
        setIsCounter(!isCounter);

        const time_minutes = 0;
        const time_seconds = 0; 
    
        const duration = (time_minutes*60) + time_seconds
        
        let elapsedTime = duration;

        setTimeInterval(setInterval(() => {
            elapsedTime ++
            intervalRef.current ++

            min = Math.floor((elapsedTime)/60);
            sec = Math.floor((elapsedTime)%60);

            setTotalTime(intervalRef.current);

            if(min >= 60){
                elapsedTime = 0;

                hrs += 1;
            }

            setTimer(<span>{hrs < 10 ? `0${hrs}`:hrs}:{min < 10 ? `0${min}`: min}:{sec < 10 ? `0${sec}`:sec}</span>);
                      
        },1));
    } 

    const resume = () => {
        setIsCounter(!isCounter);

        let elapsedTime = intervalRef.current

        setTimeInterval(setInterval(() => {
            elapsedTime ++
            intervalRef.current ++

            min = Math.floor((elapsedTime)/60);
            sec = Math.floor((elapsedTime)%60);

            setTotalTime(elapsedTime);

           if(min >= 60){
                elapsedTime -= 3600;

                hrs += 1;
            }

            setTimer(<span>{hrs < 10 ? `0${hrs}`:hrs}:{min < 10 ? `0${min}`: min}:{sec < 10 ? `0${sec}`:sec}</span>);

        },1));
    }

    const pauseTimer = () => {

        setIsCounter(false);

        setIsPause(!isPause)
        clearInterval(timeInterval)
    }

    const stop = () => {

        clearInterval(timeInterval)
        setTimer(<span>00:00:00</span>);

    }
        
    return(
        <>
            <div className='boxTimer'>
                <span>{timer}</span>
            </div>

            <div className='boxBtn'>
            {
                !isCounter & !isPause ?
                <button 
                    onClick={() => startCount()}
                >
                    <BsFillPlayFill/>
                    {/* Play */}
                </button> 
                : 
                <button 
                    onClick={() => resume()}
                >
                    <BsFillPlayFill/>
                    {/* Return */}
                </button>      
            }
            {
                
               isCounter  ? 
               <button 
                    onClick={() => pauseTimer()}
                >
                    <BsPauseFill/>
                    {/* Pause */}
                </button> 
                : isPause &&
                <button
                    onClick={() => stop()}
                >
                    <BsStopFill/>
                </button>
            }        
            </div>
        </>  
    )
}

export default TimerToCount;