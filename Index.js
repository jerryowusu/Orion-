    const toggleButton = document.getElementById('toggleSidebar');
    const iconSection = document.getElementById('iconSection');
    const sidebar = document.getElementById('sidebar');
    
    toggleButton.addEventListener('click', () => {
        const spans = iconSection.querySelectorAll('span');
        spans.forEach(span => {
            span.classList.toggle('opacity-0');
            span.classList.toggle('-translate-x-2');
        });

        sidebar.classList.toggle('w-36');
    });
    


const urlParams = new URLSearchParams(window.location.search);
const agentId = urlParams.get('id');
console.log(agentId); // Use this to fetch and display agent details


const datePickerButton = document.getElementById('date-picker-button');
const dateInput = document.getElementById('date-input');
const selectedDate = document.getElementById('selected-date');

// When button is clicked, trigger native date picker
datePickerButton.addEventListener('click', () => {
  dateInput.style.pointerEvents = 'auto'; // enable interaction
  dateInput.focus(); // open native date picker
  dateInput.click(); // some browsers require this
  setTimeout(() => {
    dateInput.style.pointerEvents = 'none'; // disable again
  }, 100); // prevent accidental input
});

// Update date display
dateInput.addEventListener('change', (event) => {
  const date = new Date(event.target.value);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  selectedDate.textContent = date.toLocaleDateString('en-US', options);
});

