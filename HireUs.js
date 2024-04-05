import React, { useState, useEffect } from 'react';
import CityHall from './images/NoteWorthyCityHall.jpg'

// import ContactUs from './components/Form';
import Form from './components/Form'

// import { useEffect } from 'react';
import './HireUs.css'

function HireUs() {
	return (
		<div className='hire-us-outer-div'>
      {/* <h1 className='hire-us-heading'>
        HIRE US 
      </h1> */}
			<div className='hire-us-body'>
				<div className='hire-us-left'>
					<h1> Hire Us </h1>
					<h2> We are no strangers to </h2>
					<h2> Private Parties </h2>
					<h2> Tailgates </h2>
					<h2> Conferences </h2>
					<h2> and More ! </h2>
					{/* <img src={CityHall} alt='cityhall' /> */}
					{/* <h1> left side</h1> */}
				</div>
				<div className='hire-us-right'>
					<Form />
				</div>
			</div>
    </div>
	)
}

export default HireUs;