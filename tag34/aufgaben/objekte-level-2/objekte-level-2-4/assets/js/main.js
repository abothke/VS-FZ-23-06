const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const sortByCountry = () => {
  singers.sort((a, b) => {
    const nameOne = a.country.toLowerCase();
    const nameTwo = b.country.toLowerCase();
    if (nameOne < nameTwo) {
      return -1;
    }
    if (nameOne > nameTwo) {
      return 1;
    }
    return 0;
  });
  buildPage();
};

const sortByName = () => {
  singers.sort((a, b) => {
    const nameOne = a.name.toLowerCase();
    const nameTwo = b.name.toLowerCase();
    if (nameOne < nameTwo) {
      return -1;
    }
    if (nameOne > nameTwo) {
      return 1;
    }
    return 0;
  });
  buildPage();
};

const sortByGenre = () => {
    singers.sort((a, b) => {
      const nameOne = a.genre.toLowerCase();
      const nameTwo = b.genre.toLowerCase();
      if (nameOne < nameTwo) {
        return -1;
      }
      if (nameOne > nameTwo) {
        return 1;
      }
      return 0;
    });
    buildPage();
  };

const buildPage = () => {
  let html = "<table>";
  html += "<tr>";
  html += "<th id='singerName'>Name</th>";
  html += "<th id='singerCountry'>Country</th>";
  html += "<th>Period Active</th>";
  html += "<th id='singerGenre'>Genre</th>";
  html += "</tr>";

  for (let i = 0; i < singers.length; i++) {
    html += "<tr>";
    html += "<td>" + singers[i].name + "</td>";
    html += "<td>" + singers[i].country + "</td>";
    html +=
      "<td>" +
      singers[i].period_active.start +
      " - " +
      singers[i].period_active.end +
      "</td>";
    html += "<td>" + singers[i].genre + "</td>";
    html += "</tr>";
  }
  html += "</table>";

  let contentDiv = document.getElementById("table-container");
  contentDiv.innerHTML = html;
  document.getElementById("singerName").addEventListener("click", sortByName);
  document
    .getElementById("singerCountry")
    .addEventListener("click", sortByCountry);
    document.getElementById("singerGenre").addEventListener("click", sortByGenre);
};

buildPage();
