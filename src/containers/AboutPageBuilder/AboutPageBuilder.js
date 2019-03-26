import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import AboutPage from '../../components/AboutPage/AboutPage';

import pratik from '../../assets/Images/pratik.jpg';

class AboutPageBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: pratik,
            description: {
                description1: "My name is Pratik Mathur. I am a web developer, currently working at Total Mortgage Services, LLC. My journey as a developer started at the age of 14, where I was introduced to the concepts of web development such as HTML and CSS. After that, I got my Bachelors and Master’s degree in Computer Science. This has helped me widen my range of knowledge and gather experiences in the field of Web Development.",
                description2: "Constantly seeking to improve my skillset, I thrive on learning new web technologies in my spare time through online resources such as udemy.com and coursera.org, as well as diving head-first into new and unfamiliar projects.",
                description3: "In my spare time, you’ll find me playing video games, playing soccer and learning new programming languages"
            }
        };    
    }
    render () {
        return (
            <Auxiliary>
                <AboutPage state={this.state} />
            </Auxiliary>
        );
    }
}

export default AboutPageBuilder;