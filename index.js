
let movies_div=document.getElementById("movie");
let id;
async function searchMovies(){
try{
    const query=document.getElementById("q").value;
    const url=`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`;
    const res=await fetch(url);
    const data=await res.json();
    const movies=data.Search;
    return movies   
}
catch(err){
    console.log(err);
}
}
function appendMovies(data){
    movies_div.innerHTML=null;

    data.forEach(function (el){
        let p=document.createElement("p");
        p.innerText=el.Title;
        console.log(p);
        movies_div.append(p);
    });
 }
async function main(){
    let data=await searchMovies();
   // console.log(data)
   if(data===undefined){
       alert("no record found");
       return false
   }
    appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
      id=setTimeout(function(){
         func();
     },delay);
}