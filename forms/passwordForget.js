/////////////////////////////// verification box ///////////////////////////////
const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    
    // If a value is entered, move to the next box
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    // If backspace is pressed and the box is empty, move back
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});