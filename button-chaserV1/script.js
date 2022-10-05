function cursorIsNearButton(event) {
  let buttonCoordinates = document.getElementById('button-div');

  let containerCoordinates = document.getElementById('canvas');

  let buttonXCoordinates = buttonCoordinates.offsetLeft;
  let buttonYCoordinates = buttonCoordinates.offsetTop;

  let buttonWidthXCoordinates = buttonXCoordinates + buttonCoordinates.offsetWidth;
  let buttonLengthYCoordinates = buttonYCoordinates + buttonCoordinates.offsetHeight;

  let bodyLeftCoordinates = containerCoordinates.offsetLeft;
  let bodyYCoordinates = containerCoordinates.offsetTop;
  let bodyWidthCoordinates = containerCoordinates.offsetWidth;
  let bodyHeightCoordinates = containerCoordinates.offsetHeight;

  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;

  let mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates - 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                   !(mouseXPosition > (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition < (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));
                                  
  let mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                   !(mouseXPosition < (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition < (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));
  
  let mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - 25) && mouseYPosition > (buttonYCoordinates - 25) &&
                                   !(mouseXPosition > (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition > (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));

  let mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition > (buttonYCoordinates  - 25) &&
                                   !(mouseXPosition < (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !((mouseYPosition > (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2))));
  
  let buttonTouchesMargin = buttonLengthYCoordinates >= bodyHeightCoordinates || buttonXCoordinates < bodyLeftCoordinates|| buttonWidthXCoordinates > bodyWidthCoordinates ||
                            buttonYCoordinates < bodyYCoordinates;

  if (buttonTouchesMargin) {
      document.getElementById('button-to-be-chased').style.position = "fixed";

      return;
  }
  else if (mouseIsNearButtonLowerLeft) {
      let computedXCoordinates = buttonXCoordinates + 35;
      let computedYCoordinates = buttonYCoordinates - 35;

      moveButton(computedXCoordinates, computedYCoordinates);
      
      return;
  } 
  else if (mouseIsNearButtonLowerRight) {
      let computedXCoordinates = buttonXCoordinates - 35;
      let computedYCoordinates = buttonYCoordinates - 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
  else if (mouseIsNearButtonUpperLeft) {
      let computedXCoordinates = buttonXCoordinates + 35;
      let computedYCoordinates = buttonYCoordinates + 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
  else if (mouseIsNearButtonUpperRight) {
      let computedXCoordinates = buttonXCoordinates - 35;
      let computedYCoordinates = buttonYCoordinates + 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
}

function moveButton(computedXCoordinates, computedYCoordinates) {
  let coordinateXNumberToString = computedXCoordinates.toString();
  let coordinateYNumberToString = computedYCoordinates.toString();

  let joinedStringForX = coordinateXNumberToString + "px";
  let joinedStringForY = coordinateYNumberToString + "px";
  
  document.getElementById('button-div').style.left = joinedStringForX;
  document.getElementById('button-div').style.top = joinedStringForY;
}

function youCanIndeedTouchTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";

  return;
}
