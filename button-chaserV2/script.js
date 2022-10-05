var buttonDistanceChangeDiagonal = 35;
var buttonDistanceChangeHorizontalAndVertical = 60;
var cursorIsNearButtonTolerance = 25;

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

  const mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates - cursorIsNearButtonTolerance) 
                                     && mouseYPosition < (buttonLengthYCoordinates + cursorIsNearButtonTolerance) 
                                     && mouseXPosition < buttonXCoordinates 
                                     && mouseYPosition > buttonLengthYCoordinates;
                              
  const mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + cursorIsNearButtonTolerance) 
                                      && mouseYPosition < (buttonLengthYCoordinates + cursorIsNearButtonTolerance) 
                                      && mouseXPosition > buttonWidthXCoordinates 
                                      && mouseYPosition > buttonLengthYCoordinates;
                                  
  const mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - cursorIsNearButtonTolerance) 
                                     && mouseYPosition > (buttonYCoordinates - cursorIsNearButtonTolerance) 
                                     && mouseXPosition < buttonXCoordinates 
                                     && mouseYPosition < buttonYCoordinates;
                                  
  const mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + cursorIsNearButtonTolerance) 
                                      && mouseYPosition > (buttonYCoordinates - cursorIsNearButtonTolerance) 
                                      && mouseXPosition > buttonWidthXCoordinates 
                                      && mouseYPosition < buttonYCoordinates;

  const mouseIsNearButtonLeft = mouseXPosition > (buttonXCoordinates - cursorIsNearButtonTolerance) 
                                && mouseYPosition < buttonLengthYCoordinates 
                                && mouseYPosition > buttonYCoordinates 
                                && mouseXPosition < buttonWidthXCoordinates;

  const mouseIsNearButtonRight = mouseXPosition < (buttonWidthXCoordinates + cursorIsNearButtonTolerance) 
                                 && mouseYPosition < buttonLengthYCoordinates
                                 && mouseYPosition > buttonYCoordinates
                                 && mouseXPosition > buttonXCoordinates;
  
  const mouseIsNearButtonUpper = mouseYPosition > (buttonYCoordinates - cursorIsNearButtonTolerance) 
                                 && mouseXPosition > buttonXCoordinates
                                 && mouseXPosition < buttonWidthXCoordinates
                                 && mouseYPosition < buttonYCoordinates;

  const mouseIsNearButtonLower = mouseYPosition < (buttonLengthYCoordinates + cursorIsNearButtonTolerance) 
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
    const computedXCoordinates = buttonXCoordinates + buttonDistanceChangeDiagonal;
    const computedYCoordinates = buttonYCoordinates - buttonDistanceChangeDiagonal;
    moveButton(computedXCoordinates, computedYCoordinates);
    
    return;
  } 
  else if (mouseIsNearButtonLowerRight) {
    const computedXCoordinates = buttonXCoordinates - buttonDistanceChangeDiagonal;
    const computedYCoordinates = buttonYCoordinates - buttonDistanceChangeDiagonal;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonUpperLeft) {
    const computedXCoordinates = buttonXCoordinates + buttonDistanceChangeDiagonal;
    const computedYCoordinates = buttonYCoordinates + buttonDistanceChangeDiagonal;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonUpperRight) {
    const computedXCoordinates = buttonXCoordinates - buttonDistanceChangeDiagonal;
    const computedYCoordinates = buttonYCoordinates + buttonDistanceChangeDiagonal;
    moveButton(computedXCoordinates, computedYCoordinates);
    
    return;
  }
  else if (mouseIsNearButtonLeft) {
    const computedXCoordinates = buttonXCoordinates + buttonDistanceChangeHorizontalAndVertical;
    const computedYCoordinates = buttonYCoordinates;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonRight) {
    const computedXCoordinates = buttonXCoordinates - buttonDistanceChangeHorizontalAndVertical;
    const computedYCoordinates = buttonYCoordinates;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonUpper) {
    const computedXCoordinates = buttonXCoordinates;
    const computedYCoordinates = buttonYCoordinates + buttonDistanceChangeHorizontalAndVertical;
    moveButton(computedXCoordinates, computedYCoordinates);

    return;
  }
  else if (mouseIsNearButtonLower) {
    const computedXCoordinates = buttonXCoordinates;
    const computedYCoordinates = buttonYCoordinates - buttonDistanceChangeHorizontalAndVertical;
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
