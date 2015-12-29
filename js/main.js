
//model

function cat(name, img, id, clicks)
{
   this.name = name;
   this.img = img;
   this.id = id;
   this.clicks = clicks;
}
var cats = [
Carly = new cat("Carly","img/cat.jpg","cat1",0),
Sneaker = new cat("Sneaker","img/cat2.jpg","cat2",0),
Sleeps = new cat("Sleeps","img/cat3.jpg", "cat3",0),
Dunzo = new cat("Dunzo","img/cat4.jpg", "cat4",0),
Harmon = new cat("Harmon","img/cat5.jpg", "cat5",0),
];

console.log(Carly);
console.log(cats);

//octopus

//view
var catList = document.getElementById("catList");
var catNode = document.createElement("li");
for(i=0; i< cats.length; i++){
  var catList = document.createElement("li");
}

