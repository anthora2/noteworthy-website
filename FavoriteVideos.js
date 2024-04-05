import './FavoriteVideos.css'
import VideoCarousel from './components/VideoCarousel';

function FavoriteVideos () {
    return (
        <div className="videos-outer-div">
            <div className="videos-left-side">
                <h2>
Welcome, music enthusiast! 🎶 Explore our collection of favorite and recent performances to the right. 🌟 From heartfelt ballads to energetic anthems, each performance showcases our passion and dedication to the craft. 🎤 Join us on this musical journey and experience the magic of live music at its finest. 🎵✨</h2>
            </div>
            <div className="videos-right-side">
                {/* <div className='carousel-limiter'> 
                    <VideoCarousel />
                </div> */}
                <div className='carousel-container'>
                    <VideoCarousel />
                </div>
                {/* <VideoCarousel className='carousel-container'/> */}
            </div>
        </div>
    )
}

export default FavoriteVideos;