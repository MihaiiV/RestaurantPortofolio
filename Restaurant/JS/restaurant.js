const menuSections = document.querySelectorAll('p');
const menuItems = document.querySelectorAll('ul');


menuSections.forEach((section, index) => {
  section.addEventListener('click', () => {
      if (menuItems[index].style.maxHeight === '0px') {
      menuItems[index].style.maxHeight = menuItems[index].scrollHeight + 'px';
    } else {
      menuItems[index].style.maxHeight = '0px';
    }
  });
});
