import "./App.css";
import { useState } from "react";

function App() {
  //an array
  const links = [
    "https://www.politifact.com/factchecks/2022/dec/16/viral-image/katie-porter-didnt-call-pedophilia-an-identity/",
    "https://www.politifact.com/factchecks/2022/dec/16/tammy-baldwin/yes-wage-gap-does-have-big-impact-latina-workers/",
    "https://www.politifact.com/truth-o-meter/promises/biden-promise-tracker/promise/1526/invest-300-million-cops-program/",
    "https://www.politifact.com/factchecks/2022/dec/16/viral-image/no-these-images-dont-show-politicians-acting-inapp/",
    "https://www.politifact.com/factchecks/2022/dec/16/instagram-posts/claims-80-canadian-doctors-died-because-covid-19-v/",
  ];

  const [news, setNews] = useState("");

  const newsCheck = (e) => {
    e.preventDefault();
    return links.map((item) => {
      if (item.toLowerCase().includes(news.toLowerCase())) {
        alert("This news is confirmed to be TRUE!!!");
      } else {
        alert("This news is confirmed to be FAKE!!!")
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FAKE NEWS DETECTOR</h1>
      </header>
      <section>
        <input
          type="text"
          placeholder="Enter news url here"
          value={news}
          onChange={(e) => {
            setNews(e.target.value);
          }}
        />
        <button onClick={newsCheck}>Check</button>
      </section>
    </div>
  );
}

export default App;
