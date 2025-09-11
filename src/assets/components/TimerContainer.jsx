import React from 'react'
import TimerField from './TimerField'
import TimerButton from './TimerButton'

const TimerContainer = ({ formatTimer }) => {
    function addToTimer(formatTimer) {
        console.log(formatTimer);
        console.log(typeof (formatTimer))

    }
    addToTimer(formatTimer)
    return (
        <div>
            <div >
                <TimerButton name='+5s' />
                <TimerButton name='-5s' />
            </div>
            <TimerField value={formatTimer} />
        </div>
    )
}

export default TimerContainer