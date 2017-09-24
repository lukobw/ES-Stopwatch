class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }
    reset() {
        this.setState = ({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.state.running) {
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
    }
    calculate() {
        this.setState(stateBefore => {
            let {
                miliseconds,
                seconds,
                minutes
            } = stateBefore.times;

            miliseconds += 1;

            if (miliseconds >= 100) {
                seconds += 1;
                miliseconds = 0;
            }
            if (seconds >= 60) {
                minutes += 1;
                seconds = 0;
            }
            return {
                times: {
                    miliseconds,
                    seconds,
                    minutes
                }
            };
        });
    }
    stop() {
        this.setState({running: false});
        clearInterval(this.watch);
    }
    render() {
<<<<<<< HEAD
        const runningStopwatch = this.state.running ? 'running' : '';
=======
>>>>>>> 3f6a0da79528eb497fd505fe74de5a7bbe466637
        return (
            <div className='container'>
            <nav className='buttons'>
                <button onClick={(elem) => this.start(elem)}>Start</button>
                <button onClick={(elem) => this.stop(elem)}>Stop</button>
            </nav>
            <div className={'stopwatch ' + runningStopwatch}>
            {this.format(this.state.times)}
            </div>      
            </div>
        );
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app')); 

