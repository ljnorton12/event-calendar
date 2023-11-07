

document.addEventListener("DOMContentLoaded", function() {
  displayCurrentDay();
  initializeLocalStorage();
  loadEvents();

  function displayCurrentDay() {
    const currentDayElement = document.getElementById('currentDay');
    const currentDayString = dayjs().format('dddd, MMMM D, YYYY');
    currentDayElement.textContent = currentDayString;
  }

  function initializeLocalStorage() {
    // Define business hours
    const businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // Iterate over business hours and initialize localStorage if empty
    businessHours.forEach(hour => {
      if (localStorage.getItem(hour) === null) {
        localStorage.setItem(hour, ''); // Initialize with an empty string
      }
    });
  }

  function loadEvents() {
    const eventRows = document.getElementById('eventRows');
    eventRows.innerHTML = ''; // Clear existing rows
    for (let i = 9; i <= 17; i++) { // Loop from 9AM to 5PM
      const hour = i > 12 ? `${i-12}PM` : `${i}AM`; // Convert 24-hour time to 12-hour format
      const eventText = localStorage.getItem(hour) || '';
      const rowClass = getRowClass(i);
      const row = `
        <tr>
          <td>${hour}</td>
          <td>
            <input class="${rowClass} event-input" type="text" id="eventInput${i}"  value="${eventText}"/>
          </td>
          <td>
            <button class="save-btn" onclick="saveEvent(${i})">
              <img src='./assets/savebtn.svg'/>
            </button>
          </td>
        </tr>`;
      eventRows.innerHTML += row;
    }
  }

  function getRowClass(hour) {
 //   const currentHour = dayjs().hour();
    const currentHour = 13
    if (hour < currentHour) {
      return 'past';
    } else if (hour === currentHour) {
      return 'present';
    } else {
      return 'future';
    }
  }

  window.convertToInput = function(hourIndex) {
    const label = document.getElementById(`eventLabel${hourIndex}`);
    const input = document.getElementById(`eventInput${hourIndex}`);
    const saveBtn = document.querySelector(`#eventRows tr:nth-child(${hourIndex-8}) .save-btn`);
    label.classList.add('hidden');
    input.classList.remove('hidden');
    saveBtn.classList.remove('hidden');
    input.focus();
  };

  window.saveEvent = function(hourIndex) {
    const input = document.getElementById(`eventInput${hourIndex}`);
    const label = document.getElementById(`eventLabel${hourIndex}`);
    const saveBtn = document.querySelector(`#eventRows tr:nth-child(${hourIndex-8}) .save-btn`);
    const hourString = hourIndex > 12 ? `${hourIndex-12}PM` : `${hourIndex}AM`;

    localStorage.setItem(hourString, input.value);
    label.textContent = input.value;
    label.classList.remove('hidden');
    input.classList.add('hidden');
    saveBtn.classList.add('hidden');
  };

});
