function getNews(country, category) {
    document.getElementById("news").innerHTML = "";
    
    fetch("https://newsapi.org/v2/top-headlines?country=" + country + "&category=" + category + "&apiKey=6538c9ed9de3408e8f49f083c3d55699")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let articles = data.articles;
        console.log(articles);

        articles.forEach((n, index) => {
            let newsCard = document.createElement("div");
            newsCard.classList.add("news-card");
            
            let newsImg = document.createElement("div");
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
            author.classList.add("author");
            author.append(n.author);
            
            let content = document.createElement("p");
            content.classList.add("content");
            content.append(n.description);
            
            let link = document.createElement("a");
            link.setAttribute("href", n.url);
            link.setAttribute("target", "_blank");
            
            let button = document.createElement("button");
            button.classList.add("view-more");
            button.append("Read full article");
            
            link.appendChild(button);
            
            newsDetails.appendChild(title);
            newsDetails.appendChild(author);
            newsDetails.appendChild(content);
            newsDetails.appendChild(link);
            
            newsCard.appendChild(newsImg);
            newsCard.appendChild(newsDetails);
            document.getElementById("news").appendChild(newsCard);
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

getNews("in", "business");

function search() {
    let country = document.getElementById("country").value;
    let category = document.getElementById("category").value;
    getNews(country, category);
}

