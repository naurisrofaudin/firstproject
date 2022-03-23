import logo from './logo.svg';
import './App.css';
import data from './homework';

function App() {
  const handleClick = () => {
    console.log("Selected")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='Play Song'>
          <h2>Putar Lagumu!</h2>
          <img src={data.album.images[0].url}/>
          <h2>{data.album.name}</h2>
          <h3>{data.album.artists[0].name}</h3>
          <button onClick={handleClick}>
            Pilih
          </button>
        </div>
 
      </header>
    </div>
  );
}

export default App;
