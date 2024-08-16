const buttons = document.querySelectorAll('.container-button button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Add a class to the button to indicate it's been clicked
    button.classList.add('clicked');

    // Remove the class after a short delay
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 500);
  });
});

const icons = document.querySelectorAll('.hover');

icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    // Add a class to the icon to indicate it's being hovered
    icon.classList.add('hovered');

    // Remove the class when the mouse leaves the icon
    icon.addEventListener('mouseout', () => {
      icon.classList.remove('hovered');
    });
  });
});