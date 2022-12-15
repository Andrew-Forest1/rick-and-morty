//import logo from './logo.svg';
import './App.css';
import characters from './data/characters';
import CharactersList from './components/CharactersList';
import SearchForm from './components/SearchForm';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <header>
      </header>
      <SearchForm name={name} setName={setName}/>
      <CharactersList characters={characters} name={name}/>
    </div>
  );
}

export default App;
