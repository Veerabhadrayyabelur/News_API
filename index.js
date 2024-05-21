function getnews(){


fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6538c9ed9de3408e8f49f083c3d55699")
.then((Response)=>{
    return Response.json();
})

.then((data)=>{
    console.log(data);
    let articles = data.articles;
    console.log(articles);

    articles.forEach((n,index) => {

        let newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        let newsImg= document.createElement("div");
        newsImg.classList.add("news-img");

        let img = document.createElement("img");
        img.setAttribute("src", n.urlToImage);
        newsImg.appendChild(img);

        let newsDetails = document.createElement("div");
        newsDetails.classList.add("news-article");

        let title = document.createElement("h3");
        title.classList.add("title");
        title.append(n.title);

        let author = document.createElement("h4");
        author.classList.add("nauthor");
        author.append(n.author);

        let content = document.createElement("p");
        content.classList.add("content");
        content.append(n.description);

        let button = document.createElement("button");
        button.classList.add("view-more");
        button.append("Read full article");

        newsDetails.appendChild(title);
        newsDetails.appendChild(author);
        newsDetails.appendChild(content);
        newsDetails.appendChild(button);

        newsCard.appendChild(newsImg);
        newsCard.appendChild(newsDetails);

        document.getElementById("news").appendChild(newsCard)

    });
})

.then((err)=>{
    console.log(err);

})

}

getnews();