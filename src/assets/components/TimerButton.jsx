import React from 'react'

const TimerButton = ({ name, callbackFn }) => {
    return (
        <button className='timerButton' onClick={() => callbackFn()}>
            {name}
        </button>
    )
}

export default TimerButton