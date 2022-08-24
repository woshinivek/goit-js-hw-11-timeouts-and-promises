import '../sass/index.scss';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.isActive = false;
  }

  updateTimerFace(time) {
    const timerFace = document.querySelector(this.selector);

    timerFace.querySelector('span[data-value="days"]').textContent = time.days;
    timerFace.querySelector('span[data-value="hours"]').textContent =
      time.hours;
    timerFace.querySelector('span[data-value="mins"]').textContent = time.mins;
    timerFace.querySelector('span[data-value="secs"]').textContent = time.secs;
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      if (deltaTime === 0) {
        clearInterval(this.intervalId);
        return;
      }

      const time = this.getTimeComponents(deltaTime);

      this.updateTimerFace(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sept 15, 2022'),
});

timer.start();

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Aug 10, 2022'),
// });

timer2.start();

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Aug 24, 2022'),
// });

// timer2.start();

// const timer3 = new CountdownTimer({
//   selector: '#timer-3',
//   targetDate: new Date('Dec 31, 2022'),
// });

// timer3.start();
