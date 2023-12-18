const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const geradeZahlen = zahlen.filter((zahl) => zahl % 2 === 0); // (zahl) => zahl % 2 === 0) ist eine Arrow Function, die als Parameter eine Zahl erwartet und true zurückgibt, wenn die Zahl gerade ist, weil sie durch 2 teilbar ist.
console.log(geradeZahlen);
const ungeradeZahlen = zahlen.filter((zahl) => zahl % 2 !== 0); // (zahl) => zahl % 2 !== 0) ist eine Arrow Function, die als Parameter eine Zahl erwartet und true zurückgibt, wenn die Zahl ungerade ist, weil sie nicht durch 2 teilbar ist.
console.log(ungeradeZahlen);
