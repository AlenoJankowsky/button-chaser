function cursorIsNearButton(event) {
  const buttonCoordinates = document.getElementById('button-div');

  const containerCoordinates = document.getElementById('canvas');

  const buttonXCoordinates = buttonCoordinates.offsetLeft
  const buttonYCoordinates = buttonCoordinates.offsetTop;

  const buttonWidthXCoordinates = buttonXCoordinates + buttonCoordinates.offsetWidth;
  const buttonLengthYCoordinates = buttonYCoordinates + buttonCoordinates.offsetHeight;

  const bodyLeftCoordinates = containerCoordinates.offsetLeft;
  const bodyYCoordinates = containerCoordinates.offsetTop;
  const bodyWidthCoordinates = containerCoordinates.offsetWidth;
  const bodyHeightCoordinates = containerCoordinates.offsetHeight;

  const mouseXPosition = event.clientX;
  const mouseYPosition = event.clientY;

  const mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates- 25) 
                                     && mouseYPosition < (buttonLengthYCoordinates + 25) 
                                     && mouseXPosition < buttonXCoordinates 
                                     && mouseYPosition > buttonLengthYCoordinates;
                              
  const mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + 25) 
                                      && mouseYPosition < (buttonLengthYCoordinates + 25) 
                                      && mouseXPosition > buttonWidthXCoordinates 
                                      && mouseYPosition > buttonLengthYCoordinates;
                                  
  const mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - 25) 
                                     && mouseYPosition > (buttonYCoordinates - 25) 
                                     && mouseXPosition < buttonXCoordinates 
                                     && mouseYPosition < buttonYCoordinates;
                                  
  const mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + 25) 
                                      && mouseYPosition > (buttonYCoordinates - 25) 
                                      && mouseXPosition > buttonWidthXCoordinates 
                                      && mouseYPosition < buttonYCoordinates;

  const mouseIsNearButtonLeft = mouseXPosition > (buttonXCoordinates - 25) 
                                && mouseYPosition < buttonLengthYCoordinates 
                                && mouseYPosition > buttonYCoordinates 
                                && mouseXPosition < buttonWidthXCoordinates;

  const mouseIsNearButtonRight = mouseXPosition < (buttonWidthXCoordinates +25) 
                                 && mouseYPosition < buttonLengthYCoordinates
                                 && mouseYPosition > buttonYCoordinates
                                 && mouseXPosition > buttonXCoordinates;
  
  const mouseIsNearButtonUpper = mouseYPosition > (buttonYCoordinates - 25) 
                                 && mouseXPosition > buttonXCoordinates
                                 && mouseXPosition < buttonWidthXCoordinates
                                 && mouseYPosition < buttonYCoordinates;

  const mouseIsNearButtonLower = mouseYPosition < (buttonLengthYCoordinates + 25) 
                                 && mouseXPosition > buttonXCoordinates
                                 && mouseXPosition < buttonWidthXCoordinates
                                 && mouseYPosition > buttonLengthYCoordinates;

  const buttonTouchesMargin = buttonLengthYCoordinates >= bodyHeightCoordinates 
                              || buttonXCoordinates <= bodyLeftCoordinates 
                              || buttonWidthXCoordinates >= bodyWidthCoordinates 
                              || buttonYCoordinates <= bodyYCoordinates;

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
  else if (mouseIsNearButtonLeft) {
    const computedXCoordinates = buttonXCoordinates + 60;
    const computedYCoordinates = buttonYCoordinates;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonRight) {
    const computedXCoordinates = buttonXCoordinates - 60;
    const computedYCoordinates = buttonYCoordinates;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonUpper) {
    const computedXCoordinates = buttonXCoordinates;
    const computedYCoordinates = buttonYCoordinates + 60;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonLower) {
    const computedXCoordinates = buttonXCoordinates;
    const computedYCoordinates = buttonYCoordinates - 60;
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
