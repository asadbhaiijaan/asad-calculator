
const display = document.getElementById("display");
const clickSound = document.getElementById("clickSound");

function playVibration() {
  if (navigator.vibrate) {
    navigator.vibrate(100); // 100 ms vibration
  }
}

function clearDisplay() {
  playSound();
  playVibration();
  display.textContent = "0";
}

function deleteLast() {
  playSound();
  playVibration();
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function appendToDisplay(value) {
  playSound();
  playVibration();
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculateResult() {
  playSound();
  playVibration();
  try {
    display.textContent = eval(display.textContent.replace('%', '/100'));
  } catch {
    display.textContent = "Error";
  }
}
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function clearDisplay() {
  playSound();
  display.textContent = "0";
}

function deleteLast() {
  playSound();
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

function appendToDisplay(value) {
  playSound();
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculateResult() {
  playSound();
  try {
    display.textContent = eval(display.textContent.replace('%', '/100'));
  } catch {
    display.textContent = "Error";
  }
}
