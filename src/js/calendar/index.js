import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('.calendar_input');

const datepicker = document.querySelector('#input-picker');
datepicker.addEventListener('show', function () {
  datepicker.classList.add('switched');
});
