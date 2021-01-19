import React from 'react';
import mercury from '../../../assets/planets/mercury.jpg';
import venus from '../../../assets/planets/venus.jpg';
import earth from '../../../assets/planets/earth.jpg';
import mars from '../../../assets/planets/mars.jpg';
import jupiter from '../../../assets/planets/jupiter.png';
import saturn from '../../../assets/planets/saturn.jpg';
import uranus from '../../../assets/planets/uranus.jpg';
import neptune from '../../../assets/planets/neptune.jpg';
import left from '../../../assets/left.png';
import right from '../../../assets/right.png';

class Fact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: "0",
            facts: [
                {planet: "Mercury", image: mercury, fact: "The smallest and fastest planet, it zips around the Sun in only 88 Earth days."},
                {planet: "Venus", image: venus, fact: "Venus’ thick atmosphere makes it the hottest planet in our solar system."},
                {planet: "Earth", image: earth, fact: "The only planet in our solar system with liquid water on the surface."},
                {planet: "Mars", image: mars, fact: "Mars was a wet and warm planet billions of years ago."},
                {planet: "Jupiter", image: jupiter, fact: "The largest planet, its dark red spot is a storm larger than Earth."},
                {planet: "Saturn", image: saturn, fact: "Saturn has the brightest, most massive and most complex ring system of any planet."},
                {planet: "Uranus", image: uranus, fact: "Uranus is tipped on its axis by almost 90-degrees."},
                {planet: "Neptune", image: neptune, fact: "Neptune was the first planet discovered through mathematical calculations, rather than observation."}
            ]
        }
    }

    seePrevious = () => {
        this.setState({index: this.state.index==="0"?`${this.state.facts.length-1}`:`${this.state.index-1}`});
    }

    seeNext = () => {
        this.setState({index: this.state.index===`${this.state.facts.length-1}`?"0":`${Number(this.state.index)+1}`});
    }

    render = () => {
        return <div className="row">
            <div className="arrow"><img src={left} alt="left" onClick={this.seePrevious} /></div>
            <div className="card fact">
                <img className="planet" src={this.state.facts[this.state.index].image} alt={this.state.facts[this.state.index].planet.toLowerCase()} />
                <h2>{this.state.facts[this.state.index].planet}</h2>
                <p>{this.state.facts[this.state.index].fact}</p>
            </div>
            <div className="arrow"><img src={right} alt="right" onClick={this.seeNext} /></div>
            
        </div>;
    }
}

export default Fact;