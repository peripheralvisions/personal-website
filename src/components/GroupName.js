import React from 'react'
import Dash from './Dash'

function GroupName(props) {

    let capitalizedTitle = (props.title.charAt(0).toUpperCase()) + props.title.slice(1).toLowerCase()

    return (
        <React.Fragment>
            <Dash/>
            <div className="GroupName" id={capitalizedTitle}>
                <h1>{props.title}</h1>
            </div>
            <Dash/>
        </React.Fragment>
    )
}

export default GroupName
