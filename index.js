const quoteText=document.querySelector('#quote'),
authorName=document.querySelector(".author .name"),
quotebtn=document.querySelector("button"),
soundbtn=document.querySelector(".sound"),
copybtn=document.querySelector(".copy"),
twitterbtn=document.querySelector(".twitter")




//random quote function
function randomQuote(){
    quotebtn.classList.add("loading")
    quotebtn.innerText="Loading quote.."
// fetching random quote /data from the api and parsing it into javascript object;
fetch("https://free-quotes-api.herokuapp.com/").then(res=>res.json()).then(result=>{

quoteText.innerText = result.quote;
authorName.innerText = result.author;
quotebtn.innerText="New Quote"
quotebtn.classList.remove("loading");


});
}

//sound btn
soundbtn.addEventListener("click",()=>{
    //speechSynthesisUtterance is a web speech api that represent a speech request

    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance) //speak method of speechsynthesis speaks the utterance;

})
//copy btn
copybtn.addEventListener("click",()=>{
//copying the quote text on copytbtn click
//writeText() property writes the specified text string to the system clipboard;
    navigator.clipboard.writeText(quoteText.innerText)
})

//twitter btn
twitterbtn.addEventListener("click",()=>{
let tweetUrl=`https://twitter.com/intent/tweet?url=${quote.innerText}`;
window.open(tweetUrl,"_blank"); //opening a new twitter tab with passing a quote in the url; 
});




quotebtn.addEventListener("click",randomQuote)








//git init
//git add .
//git log
//git remote
// git remote add origin "url"
//git push -u origin master

