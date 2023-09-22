import React from 'react'
import "./Carousal.css"
import Card from './Card'
const Carousal = () => {
  return (
    <div className="full-page">
        <div className="carousal-container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}
export default Carousal