import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  // const copyToClipboard = () =>{
  //   navigator.clipboard.writeText(shortenedUrl)
  // }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1>URL Shortener</h1>
        {/* </div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter URL" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={shortenUrl}>Shorten</button>
        </div>
        <div className="card-footer"> */}
          {/* <p>{shortenedUrl}</p> */}
        </div>

      </div>

    </>
  )
}

export default App
