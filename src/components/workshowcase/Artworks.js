import React from 'react'
import Gallery from '../Gallery'
import WorkShowcase from '../WorkShowcase';

import personal2 from '../../personal-images/screaminglikethis.jpg';
import personal3 from '../../personal-images/3.png';
import personal4 from '../../personal-images/mural.jpg';


// 'https://images.unsplash.com/photo-1520450202524-87e5dd06a74b?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1614750281988-b6cba453da50?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1614862053138-10ca7a58866e?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1614853389929-8515eb4bb010?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1614829574910-e7e09ca1c8bc?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1614792440169-b30e7f734f58?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1615340577236-38ad2de602b7?ixid=MXwxMjA3fDB8MH',
// 'https://images.unsplash.com/photo-1603489673958-3da8fdfa93fa?ixlib=rb-1.2.1&ixid',
// 'https://images.unsplash.com/photo-1604922422515-703ff9cadd48?ixlib=rb-1.2.1&ixid',
// 'https://images.unsplash.com/photo-1604921827311-9da090d08f1d?ixlib=rb-1.2.1&ixid',
// 'https://images.unsplash.com/photo-1520450202524-87e5dd06a74b?ixlib=rb-1.2.1&ixid'





function Artworks() {
    const urls = [
        personal4,
        personal2,
        personal3,
        // 'https://images.unsplash.com/photo-1604922422515-703ff9cadd48?ixlib=rb-1.2.1&ixid',
        // 'https://images.unsplash.com/photo-1520450202524-87e5dd06a74b?ixlib=rb-1.2.1&ixid'

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
