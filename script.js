// Tab switching
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Space selection and timeslot generation
const spaceItems = document.querySelectorAll('.space-item');
const timeslotPlaceholder = document.querySelector('.timeslot-placeholder');
const timeslotContent = document.getElementById('timeslot-content');
const timeslotGrid = document.getElementById('timeslot-grid');
const dateDisplay = document.getElementById('date-display');
const stepNumbers = document.querySelectorAll('.step-number');

let currentDate = new Date();
let selectedSpace = null;

const facilityCapacity = {
  pool: { name: 'Pool', max: 40 },
  schaefer: { name: 'Schaefer Fitness Center', max: 65 },
  'ucc-fitness': { name: 'UCC Fitness Center', max: 50 },
  'ucc-north': { name: 'UCC North Tennis Court', max: 8 },
  'ucc-south': { name: 'UCC South Tennis Court', max: 8 },
  varsity: { name: 'Varsity Weight Room', max: 20 }
};

function formatDate(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function generateTimeslots(space) {
  const facility = facilityCapacity[space];
  if (!facility) return;

  timeslotGrid.innerHTML = '';

  const slots = [
    '6:00 AM - 7:00 AM', '7:00 AM - 8:00 AM', '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM', '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM', '4:00 PM - 5:00 PM', '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM', '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM'
  ];

  slots.forEach(slot => {
    const booked = Math.floor(Math.random() * (facility.max + 5));
    const actual = Math.min(booked, facility.max);
    const pct = Math.round((actual / facility.max) * 100);
    const isFull = actual >= facility.max;

    let level = 'low';
    if (pct > 80) level = 'critical';
    else if (pct > 60) level = 'high';
    else if (pct > 40) level = 'mid';

    const row = document.createElement('div');
    row.className = 'timeslot-row';
    row.innerHTML = `
      <span class="timeslot-time">${slot}</span>
      <span class="timeslot-capacity">
        <span class="capacity-bar"><span class="capacity-fill ${level}" style="width:${pct}%"></span></span>
        ${actual}/${facility.max}
      </span>
      <button class="btn-reserve ${isFull ? 'full' : ''}" ${isFull ? 'disabled' : ''}>
        ${isFull ? 'Full' : 'Reserve'}
      </button>
    `;
    timeslotGrid.appendChild(row);
  });
}

spaceItems.forEach(item => {
  item.addEventListener('click', () => {
    spaceItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
    selectedSpace = item.dataset.space;

    timeslotPlaceholder.classList.add('hidden');
    timeslotContent.classList.remove('hidden');
    stepNumbers[1].classList.add('active');

    currentDate = new Date();
    dateDisplay.textContent = formatDate(currentDate);
    generateTimeslots(selectedSpace);
  });
});

// Date navigation
document.getElementById('date-prev').addEventListener('click', () => {
  currentDate.setDate(currentDate.getDate() - 1);
  dateDisplay.textContent = formatDate(currentDate);
  if (selectedSpace) generateTimeslots(selectedSpace);
});

document.getElementById('date-next').addEventListener('click', () => {
  currentDate.setDate(currentDate.getDate() + 1);
  dateDisplay.textContent = formatDate(currentDate);
  if (selectedSpace) generateTimeslots(selectedSpace);
});
