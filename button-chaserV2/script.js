function cursorIsNearButton(event) {
    let buttonCoordinates = document.querySelector('.body__container__button-class').getBoundingClientRect();
    let containerCoordinates = document.querySelector('.body__container').getBoundingClientRect();
    let buttonXCoordinates = buttonCoordinates.left;
    let buttonYCoordinates = buttonCoordinates.top;
    let buttonLengthYCoordinates = buttonCoordinates.top + buttonCoordinates.height;
    let buttonWidthXCoordinates = buttonCoordinates.left + buttonCoordinates.width;
    let mouseXPosition = event.clientX;
    let mouseYPosition = event.clientY;
    let mouseIsNearButtonLowerLeft = mouseXPosition > (buttonXCoordinates- 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                     !(mouseXPosition > buttonXCoordinates) && !(mouseYPosition < buttonLengthYCoordinates);
                                
    let mouseIsNearButtonLowerRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition < (buttonLengthYCoordinates + 25) &&
                                      !(mouseXPosition < buttonWidthXCoordinates) && !(mouseYPosition < buttonLengthYCoordinates);
                                    
    let mouseIsNearButtonUpperLeft = mouseXPosition > (buttonXCoordinates - 25) && mouseYPosition > (buttonYCoordinates - 25) &&
                                     !(mouseXPosition > buttonXCoordinates) && !(mouseYPosition > buttonYCoordinates);
                                    
    let mouseIsNearButtonUpperRight = mouseXPosition < (buttonWidthXCoordinates + 25) && mouseYPosition > (buttonYCoordinates - 25) &&
                                      !(mouseXPosition < buttonWidthXCoordinates) && !(mouseYPosition > buttonYCoordinates);

    let mouseIsNearButtonLeft = mouseXPosition > (buttonXCoordinates - 25) && !(mouseYPosition > buttonLengthYCoordinates) && !(mouseYPosition < buttonYCoordinates) &&
                                !(mouseXPosition > buttonWidthXCoordinates);

    let mouseIsNearButtonRight = mouseXPosition < (buttonWidthXCoordinates +25) && !(mouseYPosition > buttonLengthYCoordinates) && !(mouseYPosition < buttonYCoordinates) &&
                                 !(mouseXPosition < buttonXCoordinates);
    
    let mouseIsNearButtonUpper = mouseYPosition > (buttonYCoordinates - 25) && !(mouseXPosition < buttonXCoordinates) && !(mouseXPosition > buttonWidthXCoordinates) &&
                                 !(mouseYPosition > buttonYCoordinates);

    let mouseIsNearButtonLower = mouseYPosition < (buttonLengthYCoordinates + 25) && !(mouseXPosition < buttonXCoordinates) && !(mouseXPosition > buttonWidthXCoordinates) &&
                                 !(mouseYPosition < buttonLengthYCoordinates);

    let buttonTouchesMargin = buttonLengthYCoordinates >= containerCoordinates.height || buttonXCoordinates < buttonXCoordinates || buttonWidthXCoordinates > containerCoordinates.width ||
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
    else if (mouseIsNearButtonLeft) {
        let computedXCoordinates = buttonXCoordinates + 50;
        let coordinateXNumberToString = computedXCoordinates.toString();
        let joinedStringForX = coordinateXNumberToString + "px";
        document.getElementById('button-div').style.left = joinedStringForX;

        return;
    }
    else if (mouseIsNearButtonRight) {
        let computedXCoordinates = buttonXCoordinates - 50;
        let coordinateXNumberToString = computedXCoordinates.toString();
        let joinedStringForX = coordinateXNumberToString + "px";
        document.getElementById('button-div').style.left = joinedStringForX;

        return;
    }
    else if (mouseIsNearButtonUpper) {
        let computedYCoordinates = buttonYCoordinates + 50;
        let coordinateYNumberToString = computedYCoordinates.toString();
        let joinedStringForY = coordinateYNumberToString + "px";
        document.getElementById('button-div').style.top = joinedStringForY;

        return;
    }
    else if (mouseIsNearButtonLower) {
        let computedYCoordinates = buttonYCoordinates - 50;
        let coordinateYNumberToString = computedYCoordinates.toString();
        let joinedStringForY = coordinateYNumberToString + "px";
        document.getElementById('button-div').style.top = joinedStringForY;

        return;
    }
}

function youCanIndeedTouchTheButtonOhMyGod() {
document.getElementById('button-div').style.left = "50%";
document.getElementById('button-div').style.top = "50%";

return;
}
