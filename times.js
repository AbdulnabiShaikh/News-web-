// console.log("This is times page");
// let source1 = 'wired';
let source = document.getElementById('source');
let apiKey= '8c261e88692c4589ac4f43b8eb988958'
let newsA = document.getElementById('newsA');
let channel = document.getElementById('channel');


if (source === channel){
const xhr = new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element){
            let news = `<div class="image">
            <img src="${element['urlToImage']}" alt="loading" style="width: 300px; height: 300px;  border-radius: 15px; margin-left: 5px; margin-right: 5px;">
            <div class="title">
                <a href="${element['url']}" target="_blank" style="border: white; font-family: Georgia; font-weight: bold; font-size: 20px; color: black; ">
                    <h3>${element["title"]}</h3>
                </a>
                <div class="content" style="font-size: 18px; font-family: Georgia;">
                    ${element["description"]}
                </div>
            </div>
        </div>`
        newsHtml += news;
        });
        newsA.innerHTML = newsHtml;
    }
    else{
        console.log("Error");
    }
}
xhr.send();

} 
else{
    console.log("Error");
}