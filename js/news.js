
// laod the news categories in navbar
const laodNewsCategories = async() =>{
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
        console.log(singleNews);
        newsCategories.innerHTML += `<a class="nav-link fw-semibold" href="#" onclick="loadNewsDetails('${singleNews.category_id}','${singleNews.category_name}')">${singleNews.category_name}</a>`;
    
    })
}
// load news details by click
const loadNewsDetails = async(newsId, category_name) =>{
    const url = ` https://openapi.programming-hero.com/api/news/category/${newsId}`;
    console.log(newsId, category_name);
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
    console.log(news);
    document.getElementById('news-count').innerText = news.length;
    document.getElementById('news-name').innerText = category_name;

}
