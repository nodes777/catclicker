
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

//octopus: Should start rendering



//view 1: List of Cats
var catList = document.getElementById("catList");
for(i=0; i< cats.length; i++){
  var catLi = document.createElement("p");
  var node = document.createTextNode(cats[i].name);
  catLi.appendChild(node);
  catList.appendChild(catLi);
}

//View 2: Featured Cat
function showFirstCat(cats) {
  var featuredCat = document.getElementById("featuredCat")
  var catPic = document.createElement("img");
  catPic.setAttribute('src', cats[0].img);
  catPic.setAttribute("width", "400");
  catPic.setAttribute("height", "300");
  featuredCat.appendChild(catPic);
}
showFirstCat();