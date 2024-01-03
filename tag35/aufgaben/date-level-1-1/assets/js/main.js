div = document.createElement("div");
document.body.appendChild(div);
let html = ""
const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0)
const date3 = new Date(31556908800)
const date4 = new Date(86400000)
console.log(date1);
console.log(date2);
html += `<div>${date1} = new Date("September 2, 2019 09:00:00")</div>`;
html += `<div>${date2} = new Date(0)</div>`
html += `<div>${date3} = new Date(31556908800)</div>`
html += `<div>${date4} = new Date(86400000)</div>`
div.innerHTML = html;