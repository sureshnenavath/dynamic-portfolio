import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies/SearchMovies';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center"> MOVIE SEARCH</h1>
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;