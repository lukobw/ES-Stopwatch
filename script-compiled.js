class Stopwatch extends React.Component {
    constructor() {
        super();
<<<<<<< HEAD
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
        this.setState = {
=======
        this.running = false;
        this.reset();
    }
    reset() {
        this.state = {
>>>>>>> 3f6a0da79528eb497fd505fe74de5a7bbe466637
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
<<<<<<< HEAD
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
=======
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
        this.setState(stateBefore => {
            return {
                times: freshTimes
>>>>>>> 3f6a0da79528eb497fd505fe74de5a7bbe466637
            };
        });
    }
    stop() {
        this.setState({ running: false });
        clearInterval(this.watch);
    }
    render() {
<<<<<<< HEAD
        const runningStopwatch = this.state.running ? 'running' : '';
=======
        const runningStopwatch = this.running ? 'running' : '';
>>>>>>> 3f6a0da79528eb497fd505fe74de5a7bbe466637
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'nav',
                { className: 'buttons' },
                React.createElement(
                    'button',
                    { onClick: elem => this.start(elem) },
                    'Start'
                ),
                React.createElement(
                    'button',
                    { onClick: elem => this.stop(elem) },
                    'Stop'
                )
            ),
            React.createElement(
                'div',
                { className: 'stopwatch ' + runningStopwatch },
                this.format(this.state.times)
            )
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

ReactDOM.render(React.createElement(Stopwatch, null), document.getElementById('app'));
