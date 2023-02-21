import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const datepicker = document.querySelector('#input-picker');
const calendar = document.querySelector('.calendar__button-calendar');
const arrow = document.querySelector('.calendar__button-arrow');

new AirDatepicker('.calendar_input', {
  onShow() {
    datepicker.classList.add('isActive');
    calendar.classList.add('switchedColor');
    arrow.classList.add('switched');
  },
  onHide() {
    datepicker.classList.remove('isActive');
    calendar.classList.remove('switchedColor');
    arrow.classList.remove('switched');
  },
});
