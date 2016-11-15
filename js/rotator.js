var banners =
[
  "img/cat1.jpg",
  "img/cat2.jpg",
  "img/cat4.jpg",
  "img/cat5.jpg",
  "img/cat6.jpg",
  "img/cat7.jpg",
  "img/cat8.jpg",
  "img/cat9.jpg",
  "img/cat3.jpg"
];
var links =
[
  "http://cat1.com",
  "http://cat2.com",
  "http://cat4.com",
  "http://cat5.com",
  "http://cat6.com",
  "http://cat7.com",
  "http://cat8.com",
  "http://cat9.com",
  "http://cat3.com"
];

function counterFunction() {
  var counter = Math.floor(Math.random() * 9);
  var banner = document.getElementById("banner");
  banner.src = banners[counter];
  var link = document.getElementById("bannerlink");
  link.href = links[counter];
}

window.onload = function() {
  counterFunction();
}
