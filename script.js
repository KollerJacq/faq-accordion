document.addEventListener("DOMContentLoaded", function () {
  // Select all question elements
  const questions = document.querySelectorAll(".question");

  // Add click event listener to each question
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // Toggle the 'hidden' class for accordion content
      const accordionContent = this.nextElementSibling;
      accordionContent.classList.toggle("hidden");

      // Toggle the 'hidden' class for plus and minus icons
      const iconPlus = this.nextElementSibling.nextElementSibling;
      const iconMinus = iconPlus.nextElementSibling;
      iconPlus.classList.toggle("hidden");
      iconMinus.classList.toggle("hidden");

      // Close other accordions
      closeOtherAccordions(this);
    });
  });

  function closeOtherAccordions(openedQuestion) {
    questions.forEach((question) => {
      if (question !== openedQuestion) {
        const accordionContent = question.nextElementSibling;
        const iconPlus = question.nextElementSibling.nextElementSibling;
        const iconMinus = iconPlus.nextElementSibling;

        // Close accordion content
        accordionContent.classList.add("hidden");

        // Show plus icon, hide minus icon
        iconPlus.classList.remove("hidden");
        iconMinus.classList.add("hidden");
      }
    });
  }
});
