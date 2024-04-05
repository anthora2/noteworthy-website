import React, { useState, useEffect } from 'react';


// import { useEffect } from 'react';
import './Events.css'
import InfoCard from './components/InfoCards'
// import ImageCarousel from './components/ImageCarousel';
import ImageCarousel from './components/ImageCarousel';

import photo1 from './images/Noteworthy_flyer.png'
import photo2 from './images/noteworthy_flyer2.png'
import photo3 from './images/noteworthy_flyer3.png'

function Events() {

	const photos = [ photo1, photo2, photo3 ]

	return (
		<div className='events-outer-div'>
      <h1 className='events-heading'>
        EVENTS 
      </h1>
			<div className='events-body'>
				<div className='events-image-scroll'>
					<ImageCarousel images={photos}/>
				</div>
				<div className='events-image-description'>
					<h2> Step into the rhythm of university life with our vibrant lineup of events! Dive into the heart of the A Cappella scene with our signature Welcome Back to A Cappella extravaganza. As the curtain rises at the dawn of each semester, we proudly host Cal's A Cappella Orientation, an electrifying showcase featuring over 13 dynamic vocal groups. Join us for an unforgettable evening of harmonies, melodies, and pure entertainment, where hundreds of eager students gather to witness the magic unfold. Embrace the energy, share the laughter, and become part of the unforgettable memories we create together. Mark your calendars and be part of the excitement! </h2>
				</div>
			</div>
    </div>
	)
}

export default Events;