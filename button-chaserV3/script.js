var cursorIsNearButtonTolerance = 50;

function cursorIsNearButton(event) {
  let buttonCoordinates = document.getElementById('button-div');

  let buttonXCoordinates = buttonCoordinates.offsetLeft;
  let buttonYCoordinates = buttonCoordinates.offsetTop;

  let buttonWidthXCoordinates = buttonXCoordinates + buttonCoordinates.offsetWidth;
  let buttonLengthYCoordinates = buttonYCoordinates + buttonCoordinates.offsetHeight;

  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;

  let cursorIsNearButton = mouseXPosition > (buttonXCoordinates - cursorIsNearButtonTolerance) 
                           && mouseXPosition < (buttonWidthXCoordinates + cursorIsNearButtonTolerance) 
                           && mouseYPosition > (buttonYCoordinates - cursorIsNearButtonTolerance) 
                           && mouseYPosition < (buttonLengthYCoordinates + cursorIsNearButtonTolerance);

  return cursorIsNearButton;
}

let oldMouseCoordinatesX = null;
let oldMouseCoordinatesY = null;

function moveButton(event) {
  let bodyContainer = document.getElementById('canvas');

  let buttonContainer = document.getElementById('button-div');

  let buttonXCoordinates = buttonContainer.offsetLeft;
  let buttonYCoordinates = buttonContainer.offsetTop;

  let buttonWidthXCoordinates = buttonXCoordinates + buttonContainer.offsetWidth;
  let buttonLengthYCoordinates = buttonYCoordinates + buttonContainer.offsetHeight;

  let bodyLeftCoordinates = bodyContainer.offsetLeft;
  let bodyYCoordinates = bodyContainer.offsetTop;
  let bodyWidthCoordinates = bodyContainer.offsetWidth;
  let bodyHeightCoordinates = bodyContainer.offsetHeight;
  
  let buttonTouchesMargin = buttonLengthYCoordinates >= bodyHeightCoordinates 
                            || buttonXCoordinates <= bodyLeftCoordinates 
                            || buttonWidthXCoordinates >= bodyWidthCoordinates 
                            || buttonYCoordinates <= bodyYCoordinates;
                             
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
