function cursorIsNearButton(event) {
  const buttonCoordinates = document.getElementById('button-div');

  const containerCoordinates = document.getElementById('canvas');

  const buttonXCoordinates = buttonCoordinates.offsetLeft;
  const buttonYCoordinates = buttonCoordinates.offsetTop;

  const buttonWidthXCoordinates = buttonXCoordinates + buttonCoordinates.offsetWidth;
  const buttonLengthYCoordinates = buttonYCoordinates + buttonCoordinates.offsetHeight;

  const bodyLeftCoordinates = containerCoordinates.offsetLeft;
  const bodyYCoordinates = containerCoordinates.offsetTop;
  const bodyWidthCoordinates = containerCoordinates.offsetWidth;
  const bodyHeightCoordinates = containerCoordinates.offsetHeight;

  const mouseXPosition = event.clientX;
  const mouseYPosition = event.clientY;

  const mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates - 25) 
                                     && mouseYPosition < (buttonLengthYCoordinates + 25) 
                                     && mouseXPosition < (buttonWidthXCoordinates - ((buttonCoordinates.offsetWidth) / 2)) 
                                     && mouseYPosition >(buttonLengthYCoordinates - ((buttonCoordinates.offsetHeight) / 2));
                                  
  const mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + 25) 
                                     && mouseYPosition < (buttonLengthYCoordinates + 25) 
                                     && mouseXPosition > (buttonWidthXCoordinates - ((buttonCoordinates.offsetWidth) / 2)) 
                                     && mouseYPosition > (buttonLengthYCoordinates - ((buttonCoordinates.offsetHeight) / 2));
  
  const mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - 25) 
                                     && mouseYPosition > (buttonYCoordinates - 25) 
                                     && mouseXPosition < (buttonWidthXCoordinates - ((buttonCoordinates.offsetWidth) / 2)) 
                                     && mouseYPosition < (buttonLengthYCoordinates - ((buttonCoordinates.offsetHeight) / 2));

  const mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + 25) 
                                     && mouseYPosition > (buttonYCoordinates  - 25) 
                                     && mouseXPosition > (buttonWidthXCoordinates - ((buttonCoordinates.offsetWidth) / 2)) 
                                     && mouseYPosition < (buttonLengthYCoordinates - ((buttonCoordinates.offsetHeight) / 2));
  
  const buttonTouchesMargin = buttonLengthYCoordinates >= bodyHeightCoordinates 
                              || buttonXCoordinates < bodyLeftCoordinates 
                              || buttonWidthXCoordinates > bodyWidthCoordinates 
                              || buttonYCoordinates < bodyYCoordinates;

  if (buttonTouchesMargin) {
      document.getElementById('button-to-be-chased').style.position = "fixed";

      return;
  }
  else if (mouseIsNearButtonLowerLeft) {
      const computedXCoordinates = buttonXCoordinates + 35;
      const computedYCoordinates = buttonYCoordinates - 35;

      moveButton(computedXCoordinates, computedYCoordinates);
      
      return;
  } 
  else if (mouseIsNearButtonLowerRight) {
      const computedXCoordinates = buttonXCoordinates - 35;
      const computedYCoordinates = buttonYCoordinates - 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
  else if (mouseIsNearButtonUpperLeft) {
      const computedXCoordinates = buttonXCoordinates + 35;
      const computedYCoordinates = buttonYCoordinates + 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
  else if (mouseIsNearButtonUpperRight) {
      const computedXCoordinates = buttonXCoordinates - 35;
      const computedYCoordinates = buttonYCoordinates + 35;

      moveButton(computedXCoordinates, computedYCoordinates);

      return;
  }
}

function moveButton(computedXCoordinates, computedYCoordinates) {
  const coordinateXNumberToString = computedXCoordinates.toString();
  const coordinateYNumberToString = computedYCoordinates.toString();

  const joinedStringForX = coordinateXNumberToString + "px";
  const joinedStringForY = coordinateYNumberToString + "px";
  
  document.getElementById('button-div').style.left = joinedStringForX;
  document.getElementById('button-div').style.top = joinedStringForY;
}

function youCanIndeedTouchTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";

  return;
}
