//je selectionne les 'elements a modifier du templateArticle
  const article = document.getElementById("articleChange");

//je cree un tableau avec mes valeurs
//AJOUTER LES LIENS VERS LES ARTICLES
  
class Article{
  constructor(id,img, date, title, resume, category){
this.id=id,
    this.img=img,
this.date=date,
this.title=title,
this.resume=resume,
this.category=category
  }
}

let Article1 = new Article ( '1', 'url(img/lama.png)' , '12/07/2021', 'Lama perdu', 'Lorem ', 'insolite');
let Article2 = new Article ('2','url(img/salar.png)', '15/08/2021', 'Salar', 'Lorem', 'paysage');
let Article3 = new Article ('3','url(img/murillo.png)', '12/10/2021', 'Le palais brule', 'Lorem ', 'ville');
let Article4 = new Article ('4','url(img/lapaz.png)','15/01/2022', 'la paz', 'Lorem', 'paysage');


//je constitue mon tableau d'article
let arrayArticles=[Article1, Article2, Article3, Article4];
//POUR DES AJOUTS FUTURS
//Article.push();
  
//console.log(arrayArticles.length) ;

// JE SELECTIONNE MON TEMPLATE VIA MA VARIABLE TEMPLATE

let template = document.getElementById('template-container');
//JE REPLACE SON CONTENU

let templateContent = template.content;
document.body.appendChild(templateContent);



  
/*
    if ("content" in document.createElement("template-container")) {
  for (let Article of arrayArticles) {
      //je place les differents elements dans les id correspondants

     <div id="articleChange" class="container" a href="#article">
            <div class="image-left">
                <img id="img-article" class="img-article" src="${Article.img}" alt="lama"/>
            </div>
            <div class="article-right">
                <p id="date" class="date">${Article.date}</p>
                <h1 id="title" class="title">${Article.title</h1>
                <section id="textArticle" class="textArticle">${Article.resume}</section>
                <footer class="footer-article">
                    <button id="category" class="category">${Article.category}</button>
                    <div> <img class="socialnet" src="img/twitter.png" alt="twitter"/> <img class="socialnet" src="img/facebook.png" alt="facebook"/></div>
                </footer>
            </div>
      </div>    
  
  return arrayArticles; 
    
  }
//  document.getElementById('articleChange').innerHTML = listOfArticle
 


//const showArticle = (data) => {
//je selectionne le template
//const template= document.querySelector("#template-container").content;
 //on attrape le fragment
// const fragment = document.createDocumentFragment();</div>/
    // je clone ce fragment
  //  const clone = templateCard.cloneNode(true);
    //fragment.appendChild(clone);
 // })
  

  //je place les fragments comme enfant de l'article
  //container.appendChild(fragment) };


/***************extra******************

  //mettre bouton en majuscule

  function majButton() {
// selectionner le contenu des boutons
const majBut = document.querySelector("button").content;
// mettre en majuscule
const maj = str.toUpperCase('majBut');

};

  // changement de couleur bouton au survol



  //bouton 
  const precedent = document.getElementById("before");
  const next = document.getElementById("next");
  

 // [precedent].addEventListener("click", () => {
    console.log("tu clickes");
    
//faire encadr'e larticle precedent *vesion youtube*


 // });

 */