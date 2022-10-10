import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Homepage = () => {
    const navigate = useNavigate()
    const goToHomepage=()=>{
        navigate("/about");
    }
    

  return (
    <div className='Main-image'>
        <div className='Main_text'>
            <div className='Main'>
            <h1>Dementia Prevention Contents</h1>
            </div>
        </div>
        
        <nav>
            <a onClick={goToHomepage}>치매 예방 테스트</a>
            <a href="#">TODOLIST</a>
            <a href="#">치매 자가진단</a>
            <a href="#">치매 예방음식</a>
            <a href="#">전문가의 소견</a>
        </nav>
        <div className='container'>
            

        </div>
    </div>
  )
}

export default Homepage