let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const faToCel = (fahrenheit) => {
  let celsius = fahrenheit.map((num) => ((num - 32) / 1.8).toFixed(0));
  console.log(celsius);
};

faToCel(fahrenheit);
