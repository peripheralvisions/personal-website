import React from 'react'
import WorkShowcase from '../WorkShowcase.js'
import ProjectHeader from '../ProjectHeader.js'
import ProjectHeaderDetail from '../ProjectHeaderDetail.js'
import ImageContainer from '../ImageContainer.js'

import VideoSubscriberAuth from '../../videos/subscription-required.mp4';
import GifCardHover from '../../videos/cardHover.gif';

function ProjectLirikLive() {

    return (
        <WorkShowcase>

            <div className="container">

                <ProjectHeader>
                    <ProjectHeaderDetail title="TITLE" value="VOTING HUB"/>
                    <ProjectHeaderDetail title="TYPE" value="TWITCH EXTENSION"/>
                    <ProjectHeaderDetail title="RELEASE" value="TBA"/>
                </ProjectHeader>

                <div className="ProjectDescription">
                    <span className="ProjectDetailTitle">DESCRIPTION</span>
                    <p>
                        An extension which goal is to gather votes from viewers for games that they
                        would like to watch on stream.
                    </p>
                </div>

                <div className="Project-gallery">
                    <div>
                        <div className="row">
                            <ProjectHeaderDetail title="DEMO"/>
                        </div>

                        <div className="row flex-align-items-center">
                            <div>
                                <iframe
                                    width="560"
                                    height="515"
                                    src="https://www.youtube-nocookie.com/embed/2sLzQfkQLhk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    autoPlay="0"></iframe>
                            </div>
                            <p className="Project-comment">
                                This extension collects user votes for games that are meant to be played during
                                the broadcast.
                                <br/>
                                <br/>
                                It presents easy to use UI that contains all the neccesary information such as
                                gamegplay screenshots, generes and the release date.
                            </p>
                        </div>
                    </div>

                    <div className="row">

                        <div>
                            <ProjectHeaderDetail title="SUBSCRIBER AUTHENTICATION"/>
                            <div className="video-demo">
                                <video src={VideoSubscriberAuth} autoPlay loop muted></video>
                            </div>

                            <div className="Project-comment">
                                <p>
                                    Provides features such as subscriber authentication which means that this
                                    extension is only visible to loyal viewers.
                                </p>
                                <p>
                                    Simple card design doesn't obstruct the view of the broadcast while still
                                    providing all the neccesary information.
                                </p>
                                <p>
                                    This particular version is meant to be used by specific broadcaster, therefore
                                    it is also designed with his color theme in mind.
                                </p>
                            </div>
                        </div>

                        <div>
                            <ProjectHeaderDetail title="EASY TO USE"/>
                            <ImageContainer src={GifCardHover}/>
                        </div>
                    </div>
                </div>

            </div>

        </WorkShowcase>
    )
}

export default ProjectLirikLive