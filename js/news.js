
// laod the news categories in navbar
const laodNewsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showNewsCategories(data.data.news_category);
    } catch (error) {
        console.log(error);
    }
}
// laod the news categories in navbar
const showNewsCategories = news => {
    const newsCategories = document.getElementById('news-categories');
    news.forEach(singleNews => {
        // console.log(singleNews);
        newsCategories.innerHTML += `<a class="nav-link fw-semibold" href="#" onclick="loadNewsDetails('${singleNews.category_id}','${singleNews.category_name}')">${singleNews.category_name}</a>`;

    })
}
// load news details by click
const loadNewsDetails = async (newsId, category_name) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${newsId}`;
    // console.log(newsId, category_name);
    try {
        const res = await fetch(url);
        const data = await res.json();
        showNewsDetails(data.data, category_name);

    } catch (error) {
        console.log(error);
    }
}
// show news details
const showNewsDetails = (news, category_name) => {
    // console.log(news);
    document.getElementById('news-count').innerText = news.length;
    document.getElementById('news-name').innerText = category_name;

    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = '';
    news.forEach(singleNews => {
        console.log(singleNews);

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');
        newsDiv.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${singleNews.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singleNews.title}</h5>
        <p class="card-text">${singleNews.details.slice(0, 200)}...</p>
        <div class="btn btn-primary">Show Details</div>
      </div>
    </div>
  </div>
    `;
        newsDetails.appendChild(newsDiv);
    })

}
