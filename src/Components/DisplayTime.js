import { useState } from "react";


const DisplayTime = () => {
    let time = new Date().toLocaleTimeString();
    let newTime = Math.floor(new Date().getTime() / 1000.0)
    const [currentTime, setCurrentTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        console.log('time==>', time);
        setCurrentTime(time);
    }

    setInterval(UpdateTime, 1000);
    return (
        <div>
            <h2>Digital Clock</h2>
            <center>
                <div style={{ background: `${newTime % 2 === 0 ? 'black' : 'white'}`, color: `${newTime % 2 === 0 ? 'white' : 'black'}`, width: 'fit-content', padding: '10px',borderRadius:'15px' }}>
                    <h3>{currentTime}</h3>
                </div>
            </center>


        </div>
    )
}

export default DisplayTime;