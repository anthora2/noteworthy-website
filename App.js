import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import noteworthyWords from './images/noteworthy_words.png'


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className='image-div'>
          <img className='center-image' src={noteworthyWords} alt='noteworthy-words' />
        </div>
        
      </div>
    </div>
  );
}

export default App;
