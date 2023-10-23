import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [stockbotInput, setstockbotInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stockbot: stockbotInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setstockbotInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/stocktify_logo.png" className={styles.icon} />
        <h3>Talk to Stockbot DIRECT</h3>
        <p>This site is not availible to be accessed by the public and is intended for demonstration and development purposes. If you are not authorized to be on this site, proceed with caution.</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="stockbot"
            placeholder="Enter any questions"
            value={stockbotInput}
            onChange={(e) => setstockbotInput(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
