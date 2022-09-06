import { useForm } from 'react-hook-form';
import { useState } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { useRef } from 'react';

const TimerToCount = () => {
    const [timer, setTimer] = useState(
        <span>00:00:00</span>
    );
    const [timeInterval, setTimeInterval] = useState(null);
    const [countIntervalResume,setCountIntervalResume] = useState(0)
    const [isCounter, setIsCounter] = useState(false)
    const [time, setTime] = useState(0);
    const [isPause, setIsPause] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
  
    // let sec = tempo.segundos;
    // let hrs = tempo.horas;
    // let min = tempo.segundos;
  
    const schema = yup.object({
        hours: yup.number('coloque um numero').required('horas'),
        minutes: yup.number('coloque um numero').required('minutos'),
        seconds: yup.number('coloque um numero').required('segundos')
    });
      
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const intervalRef = useRef(0)

    function startCount(){
        setIsCounter(!isCounter)
        const time_minutes = 0;
        const time_seconds = 0; 
    
        const duration = (time_minutes*60) + time_seconds

        let hrs = 0
        let min = 0;
        let sec = 0;
        // let timeCount = 0
        
        let elapsedTime = duration;

        setTimeInterval(setInterval(() => {
            elapsedTime ++
            intervalRef.current ++

            min = Math.floor((elapsedTime)/60);
            sec = Math.floor((elapsedTime)%60);

            // setTime(elapsedTime);
            setTotalTime(intervalRef.current)
            // intervalRef = timeCount
           if(min >= 60){
                elapsedTime = 0;

                hrs += 1;
            }

            setTimer(
                <span>{hrs < 10 ? "0" + hrs : hrs}:{min < 10 ? "0"+ min : min}:{sec < 10 ? "0"+ sec : sec}</span>
            )          
                      
        },1))
    }    
console.log(intervalRef)
    function resume(){
        let hrs = 0;
        let min = 0;
        let sec = 0;
        // let timeCount = intervalRef.current

        let elapsedTime = intervalRef.current
        console.log(intervalRef)
        setTimeInterval(setInterval(() => {
            elapsedTime ++
            intervalRef.current ++
            // console.log(elapsedTime)

            min = Math.floor((elapsedTime)/60);
            sec = Math.floor((elapsedTime)%60);

            // setTime(elapsedTime);
            setTotalTime(elapsedTime)
            // intervalRef = timeCount
           if(min >= 60){
                elapsedTime = 0;

                hrs += 1;
            }
        // console.log(totalTime)

            setTimer(
                <span>{hrs < 10 ? "0" + hrs : hrs}:{min < 10 ? "0"+ min : min}:{sec < 10 ? "0"+ sec : sec}</span>
            )          
        },1))
        setCountIntervalResume('vai')
    }
        
    function pauseTimer(){
          setIsPause(!isPause)
        clearInterval(timeInterval)
    }
        
    function pauseResume(){
        isCounter && setIsPause(!isPause)
        clearInterval(countIntervalResume)
    }
    return(
        <>
            <div className='boxTimer'>
                <span>{timer}</span>
            </div>

            <div className='boxBtn'>
            {
                !isCounter & !isPause?
                <button 
                    onClick={(e) => { 
                        e.preventDefault() 
                        startCount()
                    }}
                >
                    <BsFillPlayFill/>
                    {/* Play */}
                </button> 
                : 
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        resume()
                    }}
                >
                    <BsFillPlayFill/>
                    {/* Return */}
                </button>      
            }
            {
                
                <button 
                    onClick={(e) =>{
                        e.preventDefault();
                        pauseTimer()
                    }}
                >
                    <BsPauseFill/>
                    {/* Pause */}
                </button> 
            }        
            </div>
        </>  
    )
}

export default TimerToCount;