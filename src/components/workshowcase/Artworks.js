import React from 'react'
import Gallery from '../Gallery'
import WorkShowcase from '../WorkShowcase';

import personal2 from '../../personal-images/screaminglikethis.jpg';
import personal3 from '../../personal-images/3.png';
import personal4 from '../../personal-images/mural.jpg';

function Artworks() {
    const urls = [
        personal4,
        personal2,
        personal3,
    ];

    return (
        <WorkShowcase>
            <div className="container">
                <div className="ProjectDescription">
                    <span className="ProjectDetailTitle">DESCRIPTION</span>
                    <p>
                        Showcase of artworks created in Photoshop.
                    </p>
                </div>
                <Gallery urls={urls}/>
            </div>
        </WorkShowcase>
    )
}

export default Artworks
