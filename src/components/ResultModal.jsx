import {forwardRef , useImperativeHandle , useRef} from "react";


const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current.showModal();
        }
    }));
    
    
    
    
    return (
        <dialog ref={dialog} className="result-modal" >
            <h2>you {result}</h2>
            <p>your target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>close</button>
            </form>
        </dialog>
    )


 })

export default ResultModal;