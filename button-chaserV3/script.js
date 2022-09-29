function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

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

function readMousePosition(event) {
  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;
  let mouseCoordinates = [mouseXPosition, mouseYPosition];
  document.getElementById("demo").innerHTML = mouseCoordinates;
  
  return mouseCoordinates;
}

function moveButton(event) {
  let referenceArray = putMousePositionsInArray(event);
  let buttonCoordinates = document.querySelector('.body__button-class').getBoundingClientRect();
  let buttonXCoordinates = buttonCoordinates.left;
  let buttonYCoordinates = buttonCoordinates.top;
  let directionOfX = referenceArray[1][0] - referenceArray[0][0];
  let directionOfY = referenceArray[1][1] - referenceArray[0][1];
  document.getElementById("demo").innerHTML = directionOfX + " " + directionOfY;
  if (cursorIsNearButton(event)) {
    let computedXCoordinates = buttonXCoordinates + directionOfX;
    let computedYCoordinates = buttonYCoordinates + directionOfY;
    let coordinateXNumberToString = computedXCoordinates.toString();
    let coordinateYNumberToString = computedYCoordinates.toString();
    let joinedStringForX = coordinateXNumberToString + "px";
    let joinedStringForY = coordinateYNumberToString + "px";
    document.getElementById('button-div').style.left = joinedStringForX;
    document.getElementById('button-div').style.top = joinedStringForY;

    return;
  }
  
  return;
}

function youCanIndeedTouchTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";
  
  return;
  }
  