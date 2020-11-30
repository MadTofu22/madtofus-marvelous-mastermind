import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './AboutDisplay.css';

class AboutDisplay extends Component {
    
    render () {
        return (
            <section id='aboutDisplayWrapper'>
                <h1>About MadTofu's Marvelous Mastermind</h1>
                <p>Welcome to MadTofu's Marvelous Mastermind! This project was designed and created by me, <b>Tom "MadTofu" Stutler</b>, as an independent project while studying at <b><a target='_blank' href='https://primeacademy.io'>Prime Digital Academy.</a></b> During this accelerated learning program we started with the basics of what a programming language is. After 16 weeks we are given the opportunity to present a full stack application to world!</p>
                <p>While here you can play a wonderful code breaking game popularized by Mordecai Meirowitz in the 1970, Mastermind. Not only is this game highly entertaining, it also keeps your problem solving skills at a peak! You  must attempt to systematically break a code with one of 1256 possible solutions in only 8 guesses.</p>

                <div>
                    <h3>Technologies Used</h3>
                    <ul className='techList'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Passport</li>
                        <li>Node</li>
                        <li>Postgres</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </section> 
        );
    }
}

export default connect(mapStoreToProps)(AboutDisplay);