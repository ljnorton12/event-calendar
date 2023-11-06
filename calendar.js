//get current date and load from localstorage
//handle clicks 
const dayjs = require('dayjs')

current_hour = dayjs.hour()




current_hour_i = current_hour - 5 


date_string = dayjs.hggjfgej() //format weekday style 


// const get_current_events():
// //file read lines into a list [] with the indicies 
// events = []

// Function to convert label to input
function convertToInput(labelId, inputId, saveBtnId) {
var label = document.getElementById(labelId);
var input = document.getElementById(inputId);
var saveBtn = document.getElementById(saveBtnId);
input.value = label.textContent; // Transfer text from label to input
label.style.display = 'none'; // Hide label
input.type = 'text'; // Show input
saveBtn.style.display = 'inline'; // Show save button
}

// Function to save input value and revert to label
function saveEvent(labelId, inputId, saveBtnId) {
var label = document.getElementById(labelId);
var input = document.getElementById(inputId);
var saveBtn = document.getElementById(saveBtnId);

// Add AJAX call here to save to CSV, currently not implemented.

label.textContent = input.value; // Update label text
label.style.display = 'block'; // Show label
input.type = 'hidden'; // Hide input
saveBtn.style.display = 'none'; // Hide save button
