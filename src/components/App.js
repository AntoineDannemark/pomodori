import React from "react";
import Timer from './Timer'
import Controls from './Controls';
// import './App.css';

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
            // digits: {
            //     digitOne: 0,
            //     digitTwo: 0,
            //     digitThree: 0,
            //     digitFour: 0,
            // }
        };
        this.toggle = this.toggle.bind(this);
        this.countTime = this.countTime.bind(this);
        this.increaseTime = this.increaseTime.bind(this);
        this.decreaseTime = this.decreaseTime.bind(this);
        // this.digits = this.digits.bind(this);
    }
    
    componentDidMount() {
        this.formatTime();
        // console.log(this.digits.digitOne.value);
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
        // let time = this.format(this.state.time);
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
        this.setState({
            time: this.state.time + ms,
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

    handleClick() {

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
                    increaseTime={() => this.increaseTime}
                    decreaseTime={() => this.decreaseTime}
                />
                {/* <button disabled={this.state.running} onClick={(() => this.decreaseTime(1)).bind(this)} onContextMenu={(() => this.decreaseTime(10)).bind(this)}>-</button>
                <button onClick={this.toggle}>{this.state.toggleDisplay}</button>
                <button disabled={this.state.running} onClick={(() => this.increaseTime(1)).bind(this)} onContextMenu={(() => this.increaseTime(10)).bind(this)}>+</button> */}
            </div>
        )   
    }
}

export default App;
