"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Search</h1>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Link
          href="artist/name/[name]"
          as={`/artist/name/${encodeURIComponent(search)}`}
        >
          <button>Search</button>
        </Link>
      </main>
    </>
  );
};

export default Home;