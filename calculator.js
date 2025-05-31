function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    addToHistory(document.getElementById("display").value, result);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

function addToHistory(expression, result) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  historyList.prepend(li); // Most recent on top
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// 🧠 New: Keyboard support
document.addEventListener("keydown", function (event) {
  const allowedKeys = "0123456789+-*/.=EnterBackspace";
  if (allowedKeys.includes(event.key)) {
    if (event.key === "Enter") {
      calculate();
    } else if (event.key === "Backspace") {
      const display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    } else {
      appendToDisplay(event.key);
    }
  }
});
