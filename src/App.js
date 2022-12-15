//import logo from './logo.svg';
import './App.css';
import characters from './data/characters';
import CharactersList from './components/CharactersList';
import SearchForm from './components/SearchForm';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  const handleChange = (newValue) => {
    setName(newValue);
  }
  //console.log("Rendered")
  return (
    <div>
      <header>
      </header>
      <SearchForm name={name} handleChange={handleChange}/>
      <CharactersList characters={characters} name={name}/>
    </div>
  );
}

export default App;
