import React, { useState } from 'react';
import './App.css';
import JSONDATA from './test.json';
import { Link } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setSearchTerm(input.value);
  };

  return (
    <div className="App">
      <h1>自動営業ツール</h1>
      <form className="searchForm" onSubmit={event => search(event)}>
        <input
          id="searchText"
          type="text"
          placeholder="営業したい企業名のキーワードを入力"
        />
        <button>検索</button>
        {JSONDATA.filter((val) => {
          if(searchTerm === ""){
            return val
          } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        }).map((val, key) => {
          return(
            <div>
              <ul>
                <li>
                  <a href="http://127.0.0.1:8000/submit">{val.name}</a>
                </li>
              </ul>
            </div>
          ) 
        })}
      </form>
    </div>
  );
}

export default App;
