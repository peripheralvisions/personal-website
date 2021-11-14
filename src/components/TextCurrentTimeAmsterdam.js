import React, {useState, useEffect} from 'react'

function TextCurrentTimeAmsterdam() {

    const [time, setTime] = useState({
        h: "00 ",
        m: "00 ",
        dividerVisible: true,
    });

    useEffect(() => {

        const interval = setInterval(() => {

            const today         = new Date();
            const utc           = today.getTime() + (today.getTimezoneOffset() * 60000);
            const amsterdamTime = new Date(utc + (3600000 * "+2"));

            let hours   = amsterdamTime.getHours();
            let minutes = amsterdamTime.getMinutes();

            hours   < 10 ? hours   = "0" + hours : hours;
            minutes < 10 ? minutes = "0" + minutes : minutes;

            setTime((prevstate) => {
                return {
                    h: hours,
                    m: minutes,
                    dividerVisible: !prevstate.dividerVisible
                }
            })
        }, 1000);

        return () => {
            clearInterval(interval)
        };

    }, []);


    return (
        <span>
            {time.h}
            <span style={{
                opacity: time.dividerVisible ? 1 : 0,
            }}>:
            </span>
            {time.m}
        </span>
    )
}

export default TextCurrentTimeAmsterdam
