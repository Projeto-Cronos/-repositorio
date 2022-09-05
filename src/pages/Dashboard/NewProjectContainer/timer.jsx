import { useForm } from 'react-hook-form';
import { useState } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { useRef } from 'react';

const TimerToCount = () => {
    const [timer, setTimer] = useState(
        <span>00:00</span>
    );
    const [timeInterval, setTimeInterval] = useState(null);
    const [countIntervalResume,setCountIntervalResume] = useState(0)
    const [isCounter, setIsCounter] = useState(false)
    const [time, setTime] = useState(0);
    const [isPause, setIsPause] = useState(false)
    
    const schema = yup.object({
        hours: yup.number('coloque um numero').required('horas'),
        minutes: yup.number('coloque um numero').required('minutos'),
        seconds: yup.number('coloque um numero').required('segundos')
    });
      
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const intervalRef = useRef()
    function startCount(){
        setIsCounter(!isCounter)
        const time_minutes = 0;
        const time_seconds = 0; 
    
        const duration = (time_minutes*60) + time_seconds

        let min = 0;
        let sec = 0;
        
        let elapsedTime = duration

        const coutnInterval = setInterval(() => {
            elapsedTime ++
            min = parseInt((elapsedTime)/60);
            sec = parseInt((elapsedTime)%60);

            setTime(elapsedTime);
            console.log(time)
            
            setTimer(
                <span>{min < 10 ? "0"+ min : min}:{sec < 10 ? "0"+ sec : sec}</span>
            );
                
        },1000);
    
        setTimeInterval(coutnInterval)
        coutnInterval()
        !isCounter && clearInterval(coutnInterval)
    }
      
    //   function timerToCount (){
    //     // const {minutes, seconds, hours} = data
    //     setIsCounter(!isCounter)
    //     const time_minutes = 0;
    //     const time_seconds = 0; 
        
    //     const duration = (time_minutes*60) + time_seconds
    //     // console.log(duration )
        
    //     startCount(duration)
    //   }
      
    function resume(){
        let min = 0;
        let sec = 0;
        
        let elapsedTime = time
        
        const countInterval = setInterval(() => {
            elapsedTime ++
            min = parseInt((elapsedTime)/60);
            sec = parseInt((elapsedTime)%60);
          
            setTimer(<span>{min < 10 ? "0"+ min : min}:{sec < 10 ? "0"+ sec : sec}</span>)
            
        },1000)
            countInterval()
            setCountIntervalResume('vai')
        }
        
        console.log(countIntervalResume)

        function pauseTimer(){
            isCounter && setIsCounter(!isCounter)
          
            clearInterval(timeInterval)
            isCounter && setIsPause(!isPause)
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
                !isPause ?
                <button 
                    onClick={(e) =>{
                        e.preventDefault();
                        pauseTimer()
                    }}
                >
                    <BsPauseFill/>
                    {/* Pause */}
                </button> :
                <button
                    onClick={(e) =>{
                        e.preventDefault()
                        pauseResume()
                    }}
                >
                    <BsPauseFill/>
                    {/* pausa porra */}
                </button>
            }        
            </div>
        </>  
    )
}

export default TimerToCount;