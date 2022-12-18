import "./App.css";
import toast from "react-hot-toast";
import { useState } from "react";

function App() {
  const links = [
    "https://punchng.com/pdp-fate-uncertain-as-party-g5-govs-face-off-lingers/",
    "https://punchng.com/fayose-olujimis-names-missing-as-pdp-names-ekiti-pcc/",
    "https://www.vanguardngr.com/2022/11/asuu-fg-face-off-not-yet-over-lecturers/",
  ];

  const [news, setNews] = useState("");

  const newsCheck = () => {
    return links.map((item) => {
      if (item.toLowerCase().includes(news.toLowerCase())) {
        return toast.success("This news is confirmed to be TRUE");
      } else {
        return toast.error("This news is confirmed to be FAKE!!!");
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
