let quotes = [
  {
    text: "The Best Way To Get Started Is To Quit Talking And Begin Doing",
    author: "– Walt Disney",
  },
  {
    text:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty",

    author: `– Winston Churchill`,
  },
  {
    text: "Don’t Let Yesterday Take Up Too Much Of Today.",
    author: "– Will Rogers",
  },
  {
    text:
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    author: "– Rahul Keswani",
  },
  {
    text: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    author: "– Steve Jobs",
  },
  {
    text: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    author: " – Og Mandino"
  }
];
const buttonGenerateQuote = document.querySelector("button");
const paragraph = document.querySelector("p");
const author = document.getElementById("author");
let randomQuotes = () => {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  paragraph.textContent = quote.text;
  paragraph.style.textAlign = "";
  author.textContent = quote.author;
  author.style.textAlign = "";
};
buttonGenerateQuote.addEventListener("click", randomQuotes);

// const motivationalQuotes = document.querySelector('p');
// const buttonGenerateQuote = document.querySelector('#generateQuote');
// const facebookBtn = document.querySelector('#facebookbtn');
// const favouriteBtn =document.getElementById('favouriteQuote');
// const getInspirationalQuotes = () => {
//   fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
//     .then((res) => {
//       if(res.ok)
//       return res.json();
//     })
//     .then((data) => {
//       let i = Math.round(Math.random()*data.length);
//     motivationalQuotes.textContent = data[i].text;
//     const postLink = `https://www.facebook.com/share?text=${motivationalQuotes}`;
//     facebookBtn.setAttribute('href',postLink);
//     })
//     .catch((err) => {
//       motivationalQuotes.textContent =
//         "You are always Motivated and Don't need Motivational Quotes";
//         facebookBtn.removeAttribute('href');
//       console.log(err);
//     });
// };

// buttonGenerateQuote.addEventListener("click", getInspirationalQuotes);
