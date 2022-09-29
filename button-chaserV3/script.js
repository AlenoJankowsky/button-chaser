function cursorIsNearButton(event) {
  let buttonCoordinates = document.querySelector('.body__button-class').getBoundingClientRect();
  let buttonXCoordinates = buttonCoordinates.left;
  let buttonYCoordinates = buttonCoordinates.top;
  let buttonLengthYCoordinates = buttonCoordinates.top + buttonCoordinates.height;
  let buttonWidthXCoordinates = buttonCoordinates.left + buttonCoordinates.width;
  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;
  let cursorIsNearButton = mouseXPosition > (buttonXCoordinates - 50) && mouseXPosition < (buttonWidthXCoordinates + 50) &&
                           mouseYPosition > (buttonYCoordinates - 50) && mouseYPosition < (buttonLengthYCoordinates + 50);

  return cursorIsNearButton;
}

let oldMouseCoordinatesX = null;
let oldMouseCoordinatesY = null;
function moveButton(event) {
  let bodyContainer = document.querySelector('.body__container').getBoundingClientRect();
  let buttonContainer = document.getElementById('button-div');
  let bodyLeftCoordinates = bodyContainer.left;
  let bodyYCoordinates = bodyContainer.top;
  let bodyWidthCoordinates = bodyContainer.width;
  let bodyHeightCoordinates = bodyContainer.height;
  let buttonXCoordinates = buttonContainer.offsetLeft;
  let buttonYCoordinates = buttonContainer.offsetTop;
  let buttonWidthXCoordinates = buttonContainer.offsetLeft + document.querySelector('.body__button-class').getBoundingClientRect().width;
  let buttonLengthYCoordinates = buttonContainer.offsetTop + document.querySelector('.body__button-class').getBoundingClientRect().height;
  let buttonTouchesMargin =  buttonLengthYCoordinates >= bodyHeightCoordinates || buttonXCoordinates <= bodyLeftCoordinates || buttonWidthXCoordinates >= bodyWidthCoordinates ||
                             buttonYCoordinates <= bodyYCoordinates;
                             
  if (buttonTouchesMargin) {
    document.getElementById('button-to-be-chased').style.position = "fixed";

    return;
  }
  else if (oldMouseCoordinatesX != null && oldMouseCoordinatesY != null) { 
    if (cursorIsNearButton(event)) {
      let directionOfX = event.clientX - oldMouseCoordinatesX;
      let directionOfY = event.clientY - oldMouseCoordinatesY;
      let computedXCoordinates = buttonXCoordinates + directionOfX;
      let computedYCoordinates = buttonYCoordinates + directionOfY;
      let coordinateXNumberToString = computedXCoordinates.toString();
      let coordinateYNumberToString = computedYCoordinates.toString();
      let joinedStringForX = coordinateXNumberToString + "px";
      let joinedStringForY = coordinateYNumberToString + "px";
      buttonContainer.style.left = joinedStringForX;
      buttonContainer.style.top = joinedStringForY;
    }
  }

  oldMouseCoordinatesX = event.clientX;
  oldMouseCoordinatesY = event.clientY;
}

function youCanIndeedTouchTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";
  
  return;
}
  