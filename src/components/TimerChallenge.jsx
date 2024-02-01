import {useState , useRef} from 'react';
import ResultModal from './resultModal.jsx';



export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const dialog = useRef();
const [timerStarted, setTimerStarted] = useState(false);
const [timerExpired, setTimerExpired] = useState(false);

function handleStart(){
  timer.current = setTimeout(() => {
    setTimerExpired(true);
    dialog.current.open();
}, targetTime * 1000);

setTimerStarted(true);
};

function handleStop(){
    clearTimeout(timer.current)
}

    return ( <>

    <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-timer">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className={timerStarted ? 'active' : ''}>
          {timerStarted ? 'Time is Running' : 'Time is Stopped'}  
        </p>
    </section>
    </>
    )
}