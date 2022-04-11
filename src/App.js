import React, {Component} from 'react';
import CardList from './CardList';
import GirlDevs from './GirlDevs';
import BoyDevs from './BoyDevs';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users})); 
    }


    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">        
                    <h1 className="f1" >RoboFriends</h1>
                    <h2>Vote for you favorite Robo Friend!</h2>
                    <section className="flex justify-around mr2">
                        <GirlDevs />
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                        <BoyDevs />
                    </section>
                </div>
            );
        }
    }
    componentDidUpdate() {
        for (let i=1; i<=10; i++){
            let el = i + "-votes";
            document.getElementById(el).click();
        }
    }
}

export default App;