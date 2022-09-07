import { useState } from 'react'
import { BsFillPlayFill, BsPauseFill, BsStopFill } from 'react-icons/bs'
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../providers/userContext';

const TimerToCount = () => {
    const [timer, setTimer] = useState(
        <span>00:00:00</span>
    );
    const [timeInterval, setTimeInterval] = useState(null);
    const [isCounter, setIsCounter] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const {setTotalTime} = useContext(Context)

    const intervalRef = useRef(0)

    let hrs = 0
    let min = 0;
    let sec = 0;

    const startCount = () => {
        setIsCounter(!isCounter);

        const time_minutes = 0;
        const time_seconds = 0; 
        let elapsedTime    = 0;
        const duration     = (time_minutes*60) + time_seconds
        
        if(time_minutes === 0 && time_seconds === 0){
            elapsedTime = 0;
        } else{ 
            elapsedTime = duration;
        }

        setTimeInterval(setInterval(() => {
            elapsedTime ++
            intervalRef.current ++

            min = Math.floor((elapsedTime)/60);
            sec = Math.floor((elapsedTime)%60);

            setTotalTime(intervalRef.current);

            if(min >= 60){
                elapsedTime -= 3600;

                hrs += 1;
            }
            setTimer(<span>{hrs < 10 ? `0${hrs}`:hrs}:{min < 10 ? `0${min}`: min}:{sec < 10 ? `0${sec}`:sec}</span>);               
        },1000));
    } 

    const resume = () => {
        setIsCounter(true);
        let elapsedTime = 0;

        if(intervalRef.current > 0) {
            elapsedTime = intervalRef.current;
        }

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
        },1000));
    }

    const pauseTimer = () => {
        setIsCounter(false);

        setIsPause(true)
        clearInterval(timeInterval)
    }

    const stop = () => {
        setTotalTime(intervalRef.current);
        intervalRef.current = 0

        clearInterval(timeInterval)

        const endDate = new Date();

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
                <button onClick={() => startCount()}>
                    <BsFillPlayFill/>
                </button> 
                : 
                <button onClick={() => resume()}>
                    <BsFillPlayFill/>
                </button>      
            }
            {    
               isCounter  ? 
               <button onClick={() => pauseTimer()}>
                    <BsPauseFill/>
                </button> 
                : isPause &&
                <button onClick={() => stop()}>
                    <BsStopFill/>
                </button>
            }        
            </div>
        </>  
    )
}
export default TimerToCount;