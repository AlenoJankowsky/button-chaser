function cursorIsNearButton(event) {
  let buttonCoordinates = document.querySelector('.body__button-class').getBoundingClientRect();
  let buttonXCoordinates = buttonCoordinates.left;
  let buttonYCoordinates = buttonCoordinates.top;
  let buttonLengthYCoordinates = buttonCoordinates.top + buttonCoordinates.height;
  let buttonWidthXCoordinates = buttonCoordinates.left + buttonCoordinates.width;
  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;
  let cursorIsNearButton = mouseXPosition > (buttonXCoordinates - 40) && mouseXPosition < (buttonWidthXCoordinates + 40) &&
                           mouseYPosition > (buttonYCoordinates - 40) && mouseYPosition < (buttonLengthYCoordinates + 40);

  return cursorIsNearButton;
}

function readMousePosition(event) {
  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;
  let mouseCoordinates = [mouseXPosition, mouseYPosition];
  
  return mouseCoordinates;
}

let referenceArray = [];
function getMousePositionsInArray(event) {
  for (let iterationCounter = 0; iterationCounter <= 1; iterationCounter++) {
    let currentCoords = readMousePosition(event);
    referenceArray[iterationCounter] = currentCoords;
    setTimeout(1000);
  }

  return referenceArray;
}

document.getElementById("demo").innerHTML = referenceArray;

function moveButton(event) {
  if (cursorIsNearButton(event)) {
    let buttonCoordinates = document.querySelector('.body__button-class').getBoundingClientRect();
    let buttonXCoordinates = buttonCoordinates.left;
    let buttonYCoordinates = buttonCoordinates.top;
    let directionOfX = referenceArray[1][0] - referenceArray[0][0];
    let directionOfY = referenceArray[1][1]- referenceArray[0][1];
    document.getElementById("demo").innerHTML = referenceArray;
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
}

function youCanIndeedTouchTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";
  
  return;
  }