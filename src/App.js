import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Amsterdam" />
      <footer>
        This page was built by{" "}
        <a
          href="https://www.linkedin.com/in/stacey-remnant-79338122a/"
          target="_blank"
          rel="noreferrer"
        >
          Stacey Remnant
        </a>
        <br />
        <a
          href="https://github.com/StazzRem/react-final-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Open Source
        </a>{" "}
        |{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Hosted by Netlify
        </a>
      </footer>
    </div>
  );
}
