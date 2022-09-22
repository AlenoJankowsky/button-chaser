document.addEventListener('DOMContentLoaded', function() {
  let buttonToBeMoved = document.querySelector('#button-div')
  let buttonCoordinates = buttonToBeMoved.getBoundingClientRect();
  let buttonXCoordinates = buttonCoordinates.left;
  let buttonYCoordinates = buttonCoordinates.top;

  function cursorIsNearButton(event) {
      let x = event.clientX;
      let y = event.clientY;
      if (buttonXCoordinates - x < 5 && y - buttonYCoordinates < 5) {
          buttonXCoordinates = buttonXCoordinates + 30;
          buttonYCoordinates = buttonYCoordinates + 30;
      }
  }
});
