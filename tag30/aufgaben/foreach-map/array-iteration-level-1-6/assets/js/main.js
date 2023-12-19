let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let cleanFilenames = album.map((dateiname) =>
  dateiname.includes(".") ? dateiname.split(".")[0] : undefined
);

console.log(cleanFilenames);
