//Bringing in the articles
import { articles } from "/M4L2/src/js/data/articles.js";

//Setting up article previews for all the articles. Upon clicking one of these, the proper article should appear
let articleList = document.getElementById('previewArticles');

for(let i = 0; i < articles.length; i++) {

    let curPreview = document.createElement('div');
    curPreview.dataset.id = articles[i].uid;
    curPreview.classList.add('preview');

    curPreview.innerHTML =
    `
        <span class='preview-title'>${articles[i].title}</span>
        <span class='preview-author'>By ${articles[i].author}</span>
    `

    curPreview.addEventListener('click', function() {
        showArticle(articles[i].uid);
    });

    articleList.appendChild(curPreview)
}

//COMPLETE THE REST BASED ON CLASS DISCUSSION AND THE EXAMPLE

function showArticle(id) {
    let current = $('.currentArticle');

    current
}

//Here is sample html structure: 
/*
<div class='article'>
    <h2>title</h2>
    <div class='article-information'>
        <h3 class='information-author'>author</h3>
        <h3 class='information-date'>date</h3>
    </div>
    <img>
    <div class='article-body'>body text</div>
</div>
*/




