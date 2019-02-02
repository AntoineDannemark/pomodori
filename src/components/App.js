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

        };
        this.countTime = this.countTime.bind(this);
        this.increaseTime = this.increaseTime.bind(this);
        this.decreaseTime = this.decreaseTime.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    
    componentDidMount() {
        this.formatTime();
        console.log(this);
    }
    
    countTime() {
        if (this.state.time === 0) {
            this.reset();
        }
        if (this.state.running === true) {
            this.setState({
                time: this.state.time - 1,
            }, function() {
                this.formatTime();
            });
        }
    }

    run() {
        this.restartTimer();
        this.setState({ 
            running: true, 
            toggleDisplay: "Reset",
        });
      }

    restartTimer() {
        clearInterval(this.timerID);
        this.timerID = setInterval(this.countTime, 1000);
    }

    reset() {
        clearInterval(this.interval);
        this.setState({
            running: false, 
            time: 1200,
            toggleDisplay: "Start",
        }, function() {
            this.formatTime();
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
        (this.state.time - ms < 0) ? this.newTime = 0 : this.newTime = this.state.time - ms,     
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
        });  
    }

    render() {
        console.log(this);
        return (
            <div className="appContainer">            
                <Timer digits={this.state.digits} />               
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
