import React from 'react'

function ProjectHeaderDetail(props) {
    return (
        <div>
            <span className="ProjectDetailTitle">{props.title}</span>
            { props.value ? <span className="ProjectDetailValue">{props.value}</span> : null}
        </div>
    )
}

export default ProjectHeaderDetail
