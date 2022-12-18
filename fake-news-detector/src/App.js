import "./App.css";
import axios from "axios";
import True from "./components/True";
import False from "./components/False";

function App() {
  const options = {
    method: "POST",
    url: "https://fake-news-detection1.p.rapidapi.com/",
    params: { text: "https://punchng.com/" },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "2a63e78121msh9ce29411fdb7a9fp159cffjsn984862b053d3",
      "X-RapidAPI-Host": "fake-news-detection1.p.rapidapi.com",
    },
    data: '{"key1":"value","key2":"value"}',
  };

  const getNews = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let links = [
    "https://punchng.com/pdp-fate-uncertain-as-party-g5-govs-face-off-lingers/",
    "https://punchng.com/fayose-olujimis-names-missing-as-pdp-names-ekiti-pcc/",
    "https://www.vanguardngr.com/2022/11/asuu-fg-face-off-not-yet-over-lecturers/",
  ];

  // let url = document.getElementById("url").value;


  // const onClick = () => {
  //   if ( url === links[0] || url === links[1] || url === links[2]) {
  //     return <True />;
  //   } else {
  //     return <False />;
  //   }
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>FAKE NEWS DETECTOR</h1>
      </header>
      <section>
        <input type="text" placeholder="Enter news url here" id="url" />

        <button type="submit" >
          Check
        </button>
      </section>
    </div>
  );
}

export default App;
