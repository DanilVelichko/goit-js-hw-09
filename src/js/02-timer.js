
import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector("input#datetime-picker"),
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  min: document.querySelector('span[data-minutes]'),
  sec: document.querySelector('span[data-seconds]'),
    
};
const time = {
  now: new Date(),
  start: 0,
  finish: 0,
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

    onClose(selectedDates) {
      time.start = selectedDates[0];
      time.finish = time.start - time.now;
      if (time.start < time.now) {
        Notiflix.Notify.info("Please choose a date in the future");
        return;
      } else 
        refs.start.removeAttribute('disabled');
    },
 };

flatpickr(refs.inputEl, options);  // flatpickr

refs.start.addEventListener('click', () => {
 
  const timer = setInterval(() => {
    if (time.finish <= 0) {
      stopTimer(timer);
    } else {
      const remainedTime = convertMs(time.finish);
      displayTime(remainedTime);
      time.finish -= 1000;
    }
  }, 1000);
  // check the active button
   if (!refs.start.getAttribute('disabled')) {
        refs.start.setAttribute('disabled', true);
      }
});

function displayTime({ days, hours, minutes, seconds }) {
    // Remaining days
  refs.days.textContent = addLeadingZero(days);
    // Remaining hours
  refs.hours.textContent = addLeadingZero(hours);
    // Remaining minutes
  refs.min.textContent = addLeadingZero(minutes);
    // Remaining seconds
  refs.sec.textContent = addLeadingZero(seconds);  
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


//* ---- utils/functions --- //
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function stopTimer() {
  clearInterval(1);
}