import React from "react";
import Timer from './Timer'
import Controls from './Controls';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1200,
            minutes: 20,
            seconds: 30,
            running: false,
            toggleDisplay: "Start",
            digits: [0, 0, 0, 0],
            prevVals: [0, 0, 0, 0],
            nextVals: [0, 0, 0, 0],
            anims:[],
        };
        this.countTime = this.countTime.bind(this);
        this.increaseTime = this.increaseTime.bind(this);
        this.decreaseTime = this.decreaseTime.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            time: this.state.time - 1,
        }, function() {
            this.formatTime();
        }, function() {
            this.populateNeighborVals();    
        });
    }
    
    countTime() {
        this.setState({
            time: this.state.time - 1,
        }, function() {                             
            if (this.state.time === 0) {
                this.reset();
            }
            if (this.state.running === true) {
                this.formatTime();
                this.populateNeighborVals();
            }            
        });
    }

    run() {
        this.restartTimer();        
        this.setState({ 
            running: true, 
            toggleDisplay: "Reset",
        }
        , function() {
            this.animate();
        });
    }

    restartTimer() {
        clearInterval(this.timerID);
        this.timerID = setInterval(this.countTime, 1000);
    }

    animate() {
        let newAnims =  ['rollTenMin', 'rollOneMin', 'rollTenSec', 'rollOneSec'];
        this.setState({
            anims: newAnims,
        });
    }

    clearAnimations() {
        let newAnims =  [];
        this.setState({
            anims: newAnims,
        });
    }

    reset() {
        clearInterval(this.interval);
        this.setState({
            running: false, 
            time: 1200,
            toggleDisplay: "Start",
        }, function() {
            this.formatTime();
            this.clearAnimations();
        });
    }

    toggle() {
        if (this.state.running === false) {
            this.run();
        } else {
            this.reset();
        }
    }
    
    decreaseTime(min) {
        let ms = min * 60;
        let newTime = 0;
        (this.state.time - ms <= 0) ? this.newTime = 60 : this.newTime = this.state.time - ms,     
        this.setState({
            time: this.newTime,
        }, function() {
            this.formatTime();
        });
    }

    increaseTime(min) {
        let ms = min * 60;
        let newTime = 0;
        (this.state.time + ms >= 6000) ? this.newTime = 5940 : this.newTime = this.state.time + ms,     
        this.setState({
            time: this.newTime,
        }, function() {
            this.formatTime();
        });
    }

    formatTime() {
        this.setState({
            minutes: Math.floor(this.state.time / 60),
            seconds: this.state.time % 60,
        }, function() {
            let a = this.state.digits.slice();
            
            if (this.state.minutes < 10) {
                a[0] = 0; 
                a[1] = this.state.minutes;
                this.setState({
                    digits: a,
                })
            } else {
                a[0] = parseInt(this.state.minutes.toString().split('')[0]);
                a[1] = parseInt(this.state.minutes.toString().split('')[1]);
                this.setState({
                    digits: a,
                })
            }
            
            if (this.state.seconds < 10) {
                a[2] = 0;
                a[3] = parseInt(this.state.seconds);
                this.setState({
                    digits: a,
                })
            } else {
                a[2] = parseInt(this.state.seconds.toString().split('')[0]);
                a[3] = parseInt(this.state.seconds.toString().split('')[1]);
                this.setState({
                    digits: a,
                })
            }            
            this.populateNeighborVals();        
        });  
    }

    populateNeighborVals() {
        let a = this.state.digits.slice();
        let b = this.state.digits.slice();
        for (let i = 0; i < 4; i++) {
            if (this.state.digits[i] > 8) {
                a[i] = 0;
                this.setState({
                    prevVals: a,
                })
            } else {
                a[i] = this.state.digits[i];
                this.setState({
                    prevVals: a,
                })
            }  
            if(this.state.digits[i] < 1) {
                b[i] = 9;
                this.setState({
                    nextVals: b,
                })
            } else {
                b[i] = this.state.digits[i];
                this.setState({
                    nextVals: b,
                })
            }  
        }

    }


    render() {
        return (
            <div className="appContainer">            
                <Timer 
                    digits={this.state.digits} 
                    prevVals={this.state.prevVals} 
                    nextVals={this.state.nextVals}
                    anims={this.state.anims}
                />               
                <Controls 
                    running={this.state.running} 
                    toggleDisplay={this.state.toggleDisplay}
                    toggle={() => this.toggle}
                    increaseTime={(() => this.increaseTime)}
                    decreaseTime={() => this.decreaseTime}
                />                
            </div>
        )   
    }
}

export default App;
