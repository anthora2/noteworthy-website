import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import About from './About'
import Events from './Events'
import HireUs from './HireUs'
import FollowUs from './FollowUs'
import VideoCarousel from './components/VideoCarousel';
import FavoriteVideos from './FavoriteVideos';
import MeetUs from './MeetUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <App />
    <About />
    <Events />
    <HireUs />
    <FollowUs />
    {/* <VideoCarousel /> */}
    <FavoriteVideos />
    <MeetUs />
    {/* <Navbar /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
