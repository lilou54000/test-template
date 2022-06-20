//je selectionne les 'elements a modifier du template
  const article = document.getElementById("articleChange");

//je cr'ee un tableau avec mes valeurs
//AJOUTER LES LIENS VERS LES ARTICLES
  let dbArticle = [
    ['id', 'img', 'date', 'title', 'resume', 'category'],
    ['1',' url(img/lama.png)' ,'12/07/2021', 'Lama perdu', 'Lorem ', 'insolite'],
    ['2', 'url(img/salar.png)', '15/08/2021', 'Salar', 'Lorem', 'paysage'],
    ['3',' url(img/murillo.png)' ,'12/10/2021', 'Le palais brule', 'Lorem ', 'ville'],
    ['4', 'url(img/lapaz.png)', '15/01/2022', 'la paz', 'Lorem', 'paysage'],
    
  ] ;
  
  // je cree le fragment
  const fragment = document.createDocumentFragment();
  //je selectionne le template
  const template = document.querySelector("#template-li").content;
  
  arrayItem.forEach(('id', 'img', 'date', 'title', 'resume', 'category') => {
      //je place les differents elements dans les id correspondants
    template.getElementById("title").textContent = 'title',
    template.getElementById("date").textContent = 'date',
    template.getElementById("img-article").textContent = 'img',
    template.getElementById("textArticle").textContent = 'resume',
    template.getElementById("category").textContent = 'category',
    
    // je clone ce fragment
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  

  //je place les fragments comme enfant de l'article
  article.appendChild(fragment);


  //mettre bouton en majuscule

  // changement de couleur bouton au survol



  //bouton 
  const precedent = document.getElementById("before");
  const next = document.getElementById("next");
  

  [precedent].addEventListener("click", () => {
    console.log("diste click");
    
//faire encadr'e larticle precedent *vesion youtube*


  });

  [precedent].addEventListener("click", () => {
    console.log("diste click");
    



  });
 