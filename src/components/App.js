import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1200,
            minutes: 20,
            seconds: 30,
            running: false,
            toggleDisplay: "Start",
            digitOne: "1",
            digitTwo: "2",
            digitThree: "3",
            digitFour: "4",
        };
        this.toggle = this.toggle.bind(this);
        this.countTime = this.countTime.bind(this);
        this.increaseTime = this.increaseTime.bind(this);
        this.decreaseTime = this.decreaseTime.bind(this);
    }
    
    componentDidMount() {
        this.formatTime();
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
        (this.state.time - ms <= 0) ? this.newTime = 0 : this.newTime = this.state.time - ms,     
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
            if (this.state.minutes < 10) {
                this.setState({
                    digitOne: 0,
                    digitTwo: this.state.minutes,
                });
            } else {
                this.setState({
                    digitOne: parseInt(this.state.minutes.toString().split('')[0]),
                    digitTwo: parseInt(this.state.minutes.toString().split('')[1]),
                });
            }
            
            if (this.state.seconds < 10) {
                this.setState({
                    digitThree: 0,
                    digitFour: parseInt(this.state.seconds),
                }) 
            } else {
                this.setState({
                    digitThree: parseInt(this.state.seconds.toString().split('')[0]),
                    digitFour: parseInt(this.state.seconds.toString().split('')[1]),
                })
            }
        });  
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>{this.state.digitOne}{this.state.digitTwo} : {this.state.digitThree}{this.state.digitFour}</h1>
                    <button disabled={this.state.running} onClick={() => this.decreaseTime(1)} onContextMenu={() => this.decreaseTime(10)}>-</button>
                    <button onClick={this.toggle}>{this.state.toggleDisplay}</button>
                    <button disabled={this.state.running} onClick={() => this.increaseTime(1)} onContextMenu={() => this.increaseTime(10)}>+</button>
                </div>
            </div>
        )   
    }
}

export default App;
