class Stopwatch extends React.Component {
    constructor() {
        super();
        this.running = false;
        this.reset();
    }
    reset() {
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
    }
    calculate() {
        let freshTimes = {
            miliseconds: this.state.times.miliseconds,
            seconds: this.state.times.seconds,
            minutes: this.state.times.minutes
        };
        freshTimes.miliseconds += 1;

        if (freshTimes.miliseconds >= 100) {
                freshTimes.seconds += 1;
                freshTimes.miliseconds = 0;
        }
        if (freshTimes.seconds >= 60) {
                freshTimes.minutes += 1;
                freshTimes.seconds = 0;
        }
        this.setState (stateBefore => {
            return {
                times: freshTimes
            };
        });
    }
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    render() {
        const runningStopwatch = this.running ? 'running' : '';
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

