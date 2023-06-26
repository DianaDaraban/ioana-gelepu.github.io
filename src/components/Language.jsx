import React from 'react'
import search from '../assets/search-01.svg'

export default function Language() {
  return (
    <div className="language-search-container">
      <button className="english-btn">US</button>
      <button className="romanian-btn">RO</button>
      <div className="search-container">
        <input type="text" className="search-input" />
        <button className="search-btn">
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  )
}
