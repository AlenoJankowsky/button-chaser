function cursorIsNearButton(event) {
  let buttonCoordinates = document.querySelector('.button-class').getBoundingClientRect();
  let containerCoordinates = document.querySelector('.container').getBoundingClientRect();
  let buttonXCoordinates = buttonCoordinates.left;
  let buttonYCoordinates = buttonCoordinates.top;
  let buttonLengthYCoordinates = buttonCoordinates.top + buttonCoordinates.height;
  let buttonWidthXCoordinates = buttonCoordinates.left + buttonCoordinates.width;
  let mouseXPosition = event.clientX;
  let mouseYPosition = event.clientY;
  let mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates - 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                   !(mouseXPosition > (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition < (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));
                                  

  let mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                   !(mouseXPosition < (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition < (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));
  
  let mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - 25) && mouseYPosition > (buttonCoordinates.top - 25) &&
                                   !(mouseXPosition > (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !(mouseYPosition > (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2)));

  let mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition > (buttonYCoordinates  - 25) &&
                                   !(mouseXPosition < (buttonWidthXCoordinates - ((buttonWidthXCoordinates - buttonXCoordinates) / 2))) &&
                                   !((mouseYPosition > (buttonLengthYCoordinates - ((buttonLengthYCoordinates - buttonYCoordinates ) / 2))));
  
  let buttonTouchesMargin = buttonLengthYCoordinates >= containerCoordinates.height || buttonXCoordinates < containerCoordinates.left || buttonWidthXCoordinates > containerCoordinates.width ||
                            buttonYCoordinates < containerCoordinates.top;

  if (buttonTouchesMargin) {
      document.getElementById('button-to-be-chased').style.position = "fixed";

      return;
  }
  else if (mouseIsNearButtonLowerLeft) {
      let computedXCoordinates = buttonXCoordinates + 35;
      let computedYCoordinates = buttonYCoordinates - 35;
      let coordinateXNumberToString = computedXCoordinates.toString();
      let coordinateYNumberToString = computedYCoordinates.toString();
      let joinedStringForX = coordinateXNumberToString + "px";
      let joinedStringForY = coordinateYNumberToString + "px";
      document.getElementById('button-div').style.left = joinedStringForX;
      document.getElementById('button-div').style.top = joinedStringForY;
      
      return;
  } 
  else if (mouseIsNearButtonLowerRight) {
      let computedXCoordinates = buttonXCoordinates - 35;
      let computedYCoordinates = buttonYCoordinates - 35;
      let coordinateXNumberToString = computedXCoordinates.toString();
      let coordinateYNumberToString = computedYCoordinates.toString();
      let joinedStringForX = coordinateXNumberToString + "px";
      let joinedStringForY = coordinateYNumberToString + "px";
      document.getElementById('button-div').style.left = joinedStringForX;
      document.getElementById('button-div').style.top = joinedStringForY;

      return;
  }
  else if (mouseIsNearButtonUpperLeft) {
      let computedXCoordinates = buttonXCoordinates + 35;
      let computedYCoordinates = buttonYCoordinates + 35;
      let coordinateXNumberToString = computedXCoordinates.toString();
      let coordinateYNumberToString = computedYCoordinates.toString();
      let joinedStringForX = coordinateXNumberToString + "px";
      let joinedStringForY = coordinateYNumberToString + "px";
      document.getElementById('button-div').style.left = joinedStringForX;
      document.getElementById('button-div').style.top = joinedStringForY;

      return;
  }
  else if (mouseIsNearButtonUpperRight) {
      let computedXCoordinates = buttonXCoordinates - 35;
      let computedYCoordinates = buttonYCoordinates + 35;
      let coordinateXNumberToString = computedXCoordinates.toString();
      let coordinateYNumberToString = computedYCoordinates.toString();
      let joinedStringForX = coordinateXNumberToString + "px";
      let joinedStringForY = coordinateYNumberToString + "px";
      document.getElementById('button-div').style.left = joinedStringForX;
      document.getElementById('button-div').style.top = joinedStringForY;

      return;
  }
}

function youCanIndeedTouchedTheButtonOhMyGod() {
  document.getElementById('button-div').style.left = "50%";
  document.getElementById('button-div').style.top = "50%";

  return;
}
