/*
Завдання 1. 
Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:

потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина, висота та колір фону, а також позицію елемента
використовуйте jQuery easing для плавності анімації
*/
$(function () {

  // a jQuery click event handler for elements with the class "click-boll"
  $(".click-boll").on("click", function () {
    let bollDiv = $(".click-boll");

    // Generate random values for width, height, position, and colors
    const randomWidth = Math.floor(Math.random() * 300) + 50; // Від 50px до 350px
    const randomHeight = Math.floor(Math.random() * 300) + 50; // Від 50px до 350px
    const randomPositionTop =
      Math.random() * (window.innerHeight - randomHeight); // Випадкова позиція в межах вікна
    const randomPositionLeft =
      Math.random() * (window.innerWidth - randomWidth); // Випадкова позиція в межах вікна
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`; // Випадковий колір фону

    // Animate the element using jQuery easing
    bollDiv.animate(
      {
        width: `${randomWidth}px`,
        height: `${randomHeight}px`,
        left: `${randomPositionLeft}px`,
        top: `${randomPositionTop}px`,
        backgroundColor: randomColor,
      },
      2000,
      "easeInOutQuint"
    );
  });
});
