import React, { useState } from "react";
import Axios from "axios";
import "./lyrics.css";

const Lyrics = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  const fetchLyrics = async () => {
    try {
      const response = await Axios.get(
        `https://api.lyrics.ovh/v1/${artist}/${song}`
      ).then((res) => {
        console.log(res.data.lyrics);
        setLyrics(res.data.lyrics);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Lyrics Finder</h1>
      <input
        className="inp"
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        className="inp"
        type="text"
        placeholder="Song"
        value={song}
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button className="btn" onClick={() => fetchLyrics()}>
        Search
      </button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
};

export default Lyrics;
