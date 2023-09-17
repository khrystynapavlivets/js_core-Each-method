/*
Завдання 2. 

Необхідно реалізувати наступний функціонал як на відео DiscoBall, а саме:

потрібно при загрузці сторінки елементу йому рандомно задавалася ширина, висота, колір фону, колір бордера та тінь, а також позицію елемента
використовуйте jQuery easing для плавності анімації
використовуйте SetInterval для того щоб анімацію зробити безкінечною
------------------------------------------------------------------------------------------
*/
$(function () {
  
  // Function to generate a random color
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  // Set interval to run the animation
  setInterval(function () {
    $(".disco-boll").each(function () {

      // Generate random values for width, height, position, colors, borders and shadows
      const randomWidth = Math.floor(Math.random() * 200) + 30;
      const randomHeight = Math.floor(Math.random() * 200) + 30;
      const randomPositionTop = Math.random() * (window.innerHeight - randomHeight);
      const randomPositionLeft = Math.random() * (window.innerWidth - randomWidth);
      const randomColor = generateRandomColor();
      const randomColorBorder = generateRandomColor();
      const randomShadowColor = generateRandomColor();

      // Animate the element
      $(this).animate(
        {
          width: `${randomWidth}px`,
          height: `${randomHeight}px`,
          left: `${randomPositionLeft}px`,
          top: `${randomPositionTop}px`,
          backgroundColor: randomColor,
          borderColor: randomColorBorder,
          boxShadow: `10px 10px 20px ${randomShadowColor}`,
        },
        2000,
        "easeInOutQuint"
      );
    });
  }, 1000);
})
