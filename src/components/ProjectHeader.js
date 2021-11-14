import React from 'react'

function ProjectHeader(props) {
    return (
        <div className="ProjectHeader">

            {/* {props
                .headers
                .map(each => {
                    return (
                        <div className="ProjectDetail">
                            <span className="ProjectDetailTitle">{each.title}</span>
                            <span className="ProjectDetailValue">{each.value}</span>
                        </div>
                    )
                })} */}

                {props.children}
        </div>
    )
}

export default ProjectHeader
