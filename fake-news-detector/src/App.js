import "./App.css";
import { useState } from "react";

function App() {
  const links = [
    "https://punchng.com/pdp-fate-uncertain-as-party-g5-govs-face-off-lingers/",
    "https://punchng.com/fayose-olujimis-names-missing-as-pdp-names-ekiti-pcc/",
    "https://www.vanguardngr.com/2022/11/asuu-fg-face-off-not-yet-over-lecturers/",
    "https://www.nytimes.com/live/2022/12/18/sports/argentina-france-world-cup-final-score",
    "https://guardian.ng/sport/argentina-beat-france-on-penalties-to-win-world-cup/",
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
