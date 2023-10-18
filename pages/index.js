import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [aigfInput, setaigfInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aigf: aigfInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setaigfInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>AIsha</title>
      </Head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <img src="https://cdn.discordapp.com/attachments/923041823562276894/1150637371872772226/AIsha._1000_50_px_1.png" alt="Logo" width='100%'></img>
    <img src="https://cdn.discordapp.com/attachments/923041823562276894/1150657803992703106/Black_And_White_Aesthetic_Minimalist_Modern_Simple_Typography_Coconut_Cosmetics_Logo_800_500_px_1000_500_px.png" alt="Logo" width='100%'></img>

      <main className={styles.main}>
        <h2>Dating in the 21st century is hard. That's why we've created an AI girlfriend...</h2>
        <h2>a revolutionary digital companion designed to provide companionship, support, and genuine connection in a complex world of relationships.</h2>
        <img src="https://cdn.discordapp.com/attachments/923041823562276894/1150679189087866920/Untitled_1000_300_px.png" width="100%"></img>
        <h3>Talk to AIsha</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="aigf"
            placeholder="Start Talking"
            value={aigfInput}
            onChange={(e) => setaigfInput(e.target.value)}
          />
          <input type="submit" value="Talk to your girlfriend" />
        </form>
        <div className={styles.result}>{result}</div>
        <div className={aigfInput}>{aigfInput}</div>

        <br></br>
        <img src="https://cdn.discordapp.com/attachments/923041823562276894/1150688441332400189/AIsha._1000_50_px_2.png" width="100%"></img>
      </main>
    </div>
  );
}