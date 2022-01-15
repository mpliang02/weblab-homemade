var text = "Hello! My name is Ms. Lotl.";
var textPosition = 0;
var textSpeed = 70;

typeEffect = () => {
  if (textPosition < text.length) {
    document.getElementById("text").innerHTML += text.charAt(textPosition);
    textPosition++;
    setTimeout(typeEffect, textSpeed);
  }
};
