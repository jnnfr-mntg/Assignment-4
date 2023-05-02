const buttons = document.querySelectorAll(".show-answer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.previousElementSibling;
    answer.style.display = "block";
  });
});
