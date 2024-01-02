const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

document.write("<h1>Singers</h1>")
document.write("<table>");
document.write("<tr>");
document.write("<th>Name</th>");
document.write("<th>Country</th>");
document.write("<th>Period Active</th>");
document.write("<th>Genre</th>");
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < singers.length; i++) {
  document.write("<td>" + singers[i].name + "</td>");
  document.write("<td>" + singers[i].country + "</td>");
  document.write("<td>" + singers[i].period_active.start + " - " + singers[i].period_active.end +  "</td>");
  document.write("<td>" + singers[i].genre + "</td>");
  document.write("</tr>");
}
document.write("</table>");