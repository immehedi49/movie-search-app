import React from 'react'
import { createRoot } from 'react-dom/client'
import SearchMovies from './searchMovies.jsx'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<Main />)