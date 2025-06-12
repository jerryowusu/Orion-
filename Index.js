
// const toggleButton = document.getElementById('toggleSidebar');
// const sidebar = document.getElementById('sidebar');
// const menuTexts = document.querySelectorAll('.menu-text');

// toggleButton.addEventListener('click', () => {
//   const isCollapsed = sidebar.classList.contains('w-[85px]');

//   sidebar.classList.toggle('w-[85px]');
//   sidebar.classList.toggle('w-38');

//   menuTexts.forEach(text => {
//     if (isCollapsed) {
//       text.classList.remove('opacity-0', '-translate-x-4');
//       text.classList.add('opacity-100', 'translate-x-0');
//     } else {
//       text.classList.add('opacity-0', '-translate-x-4');
//       text.classList.remove('opacity-100', 'translate-x-0');
//     }
//   });
// });

// const menuItems = document.querySelectorAll('.menu-item');
// const indicator = document.getElementById('active-indicator');



// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         menuItems.forEach(i => i.classList.remove('active'));

//         item.classList.add('active');

//         const sidebarTop = document.getElementById('sidebar').getBoundingClientRect().top;
//         const itemTop = item.getBoundingClientRect().top;
//         const offset = itemTop - sidebarTop;

//         indicator.style.top = `${offset}px`;
//         indicator.style.height = `${item.offsetHeight}px`;

//         localStorage.setItem('activeMenuIndex', index);
//     });
// });


  const toggleButton = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const menuItems = document.querySelectorAll('.menu-item');
  const activeIndicator = document.getElementById('active-indicator');
  const sidebarTexts = document.querySelectorAll('.sidebar-text');

  toggleButton.addEventListener('click', () => {
    const isCollapsed = sidebar.classList.contains('w-[85px]');
    sidebar.classList.toggle('w-[85px]');
    sidebar.classList.toggle('w-42');

    sidebarTexts.forEach(span => {
      if (isCollapsed) {
        span.classList.remove('opacity-0', '-translate-x-4');
      } else {
        span.classList.add('opacity-0', '-translate-x-4');
      }
    });
  });

  const activateMenuItem = (index) => {
    menuItems.forEach(item => item.classList.remove('active'));
    const selectedItem = menuItems[index];
    selectedItem.classList.add('active');
    const offset = selectedItem.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
    activeIndicator.style.marginTop = `${offset}px`;

    localStorage.setItem('activeMenuIndex', index);
  };

  menuItems.forEach((item, index) => {
    item.addEventListener('click', () => activateMenuItem(index));
  });

  const savedIndex = localStorage.getItem('activeMenuIndex');
  if (savedIndex !== null) {
    activateMenuItem(parseInt(savedIndex));
  } else {
    activateMenuItem(0); 
  }


  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

const urlParams = new URLSearchParams(window.location.search);
const agentId = urlParams.get('id');
console.log(agentId); 

const datePickerButton = document.getElementById('date-picker-button');
const dateInput = document.getElementById('date-input');
const selectedDate = document.getElementById('selected-date');

datePickerButton.addEventListener('click', () => {
  dateInput.style.pointerEvents = 'auto'; 
  dateInput.focus(); 
  dateInput.click(); 
  setTimeout(() => {
    dateInput.style.pointerEvents = 'none';
  }, 100); 
});

// Update date display
dateInput.addEventListener('change', (event) => {
  const date = new Date(event.target.value);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  selectedDate.textContent = date.toLocaleDateString('en-US', options);
});

