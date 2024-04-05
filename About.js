import React, { useState, useEffect } from 'react';

// import { useEffect } from 'react';
import './About.css'
import InfoCard from './components/InfoCards'

function About() {

	return (
		<div className="outer-div">
			<h1 className='about-us-heading'>
					ABOUT US
			</h1>
			<div className='about-us-content'>
				<p>
				We are Noteworthy! We are a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests! Since our founding in 2000, we have gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
				</p>
				<div className='trio-information'>
					<a href='/events'>
						<InfoCard title="Events" content='See some of our events !' />
					</a>
					<a href='/hire-us'>
						<InfoCard title='Hire Us' content = 'Want to hire us ?' />
					</a>
					<a href='/follow-us'>
						<InfoCard title='Follow Us' content='Look us up on other platforms !'/>
					</a>
				</div>
			</div>
			
		</div>
	)
}

export default About;