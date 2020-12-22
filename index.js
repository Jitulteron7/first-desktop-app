
const para=document.querySelector(".here");
const author =document.querySelector(".by")
const date =document.querySelector(".date")
const lang =document.querySelector(".lang")
const tags =document.querySelector(".tag")
const title =document.querySelector(".title");
const len =document.querySelector(".len");
const image =document.querySelector("img");
const writter=document.querySelector(".author");
const category =document.querySelector(".category")
fetch("https://quotes.rest/qod")
.then(res=>res.json())
.then(data=>{
    if(data){
    console.log(data);    
    author.innerHTML=data.contents.quotes[0].author;
    date.innerHTML=data.contents.quotes[0].date;
    lang.innerHTML=data.contents.quotes[0].language;
    len.innerHTML=data.contents.quotes[0].length;
    para.innerHTML=data.contents.quotes[0].quote;
    tags.innerHTML=data.contents.quotes[0].tags;
    title.innerHTML=data.contents.quotes[0].title;
    image.src=data.contents.quotes[0].background;
    category.innerHTML=data.contents.quotes[0].category;
    writter.innerHTML=data.contents.quotes[0].author;
    }   
}).catch(e=>{
    alert(e);
})
