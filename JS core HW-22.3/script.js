/*
Завдання 3.

Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:

потрібно при кліку на елемент щоб він анімовано летів до центру екрану збільшуючи свій розмір
при ще одному кліку він повертався на свою позицію
використовуйте jQuery easing для плавності анімації
-----------------------------------------------------------------------------------------
*/
$(function () {
  let position, color, chooseBox, modalDiv, container;
  $(".box").on("click", function () {
    modalDiv = $(".modal");
    container = $(".modal-container");
    position = $(this).position();
    color = $(this).css("background-color");
    chooseBox = $(this);

    // Animate modal container background color change
    container
      .css({
        zIndex: 3,
      })
      .animate(
        {
          backgroundColor: "rgba(46, 44, 44, 0.800)",
        },
        1000,
        "easeOutQuart"
      );

    // Fix the current state of the element
    modalDiv.css({
      display: "block",
      backgroundColor: color,
      left: position.left,
      top: position.top,
    });

    // Animate the element to the center of the screen, enlarging its size
    modalDiv.animate(
      {
        left: (window.innerWidth - 400) / 2,
        top: (window.innerHeight - 400) / 2,
        width: "400px",
        height: "400px",
      },
      2000,
      "easeOutQuart"
    );
  });

  $(".modal").on("click", function () {
    // Animate the element back to its initial position and size
    modalDiv.animate(
      {
        width: "150px",
        height: "150px",
        left: position.left,
        top: position.top,
      },
      1500,
      "easeOutQuart",
      function () {
        modalDiv.css("display", "none");

        // Animate modal container background color change back to initial state
        container
          .css({
            zIndex: -3,
          })
          .animate(
            {
              backgroundColor: "rgba(255,255,255)",
            },
            1000,
            "easeOutQuart"
          );
      }
    );
  });
});
