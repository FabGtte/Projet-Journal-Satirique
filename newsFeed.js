// Variables concernant le fil d'info "newsFeed"
let newsFeedTitle = document.getElementsByClassName("newsFeedTitle");
let newsFeedText = document.getElementsByClassName("newsFeedText");
let blockInfo = document.getElementsByClassName("blockInfo");

//Variables concernant les éléments présents à gauche du fil d'info
// Ces éléments vont recevoir le contenu du fil d'info
let titleToReplace = document.getElementById("titleToReplace");
let contentToReplace = document.getElementById("contentToReplace");
//Rajouter .textContent pour le contenu

//Boucle pour remplacer Titre + Contenu du bloc de gauche
// par Titre+Contenu du fil d'info survolé par la souris
for (i = 0; i < blockInfo.length; i++) {
blockInfo[i].addEventListener('mouseover',function()
{
titleToReplace.innerHTML=newsFeedTitle[i].textContent;
contentToReplace.innerHTML=newsFeedText[i].textContent;
});
}

//Lignes de test

//Test du remplacement du texte
titleToReplace.innerHTML=newsFeedTitle[1].textContent;
contentToReplace.innerHTML=newsFeedText[1].textContent;


//Test du fonctionnement de la détection du "mouseover"
let checkMouseover = 0;
blockInfo[0].addEventListener('mouseover',function()
{
    checkMouseover++;

});

