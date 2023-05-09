"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import JSSIP from "jssip";

export default function Home() {
  const { userAgent, setUserAgent } = useStore((state) => state);

  useEffect(() => {
    if (userAgent !== undefined) {
      console.log(userAgent);
    }
  }, [userAgent]);

  const initUserAgent = () => {
    const socket = new JSSIP.WebSocketInterface("wss://sip.example.com");
    const configuration = {
      sockets: [socket],
      uri: "sip:alice@example.com",
      ha1: "350fe29ce3890bd85d105998b0a95cf7",
      realm: "sip.example.com",
    };

    const ua = new JSSIP.UA(configuration);
    setUserAgent(ua);
  };

  return (
    <main className="flex flex-1 justify-center gap-2 items-center h-screen">
      <div>
        <button onClick={initUserAgent}>Init UserAgent</button>
        {/*<button onClick={increasePopulation}>Increase Population</button>*/}
      </div>
      <div>
        {/*<button onClick={decreasePopulation}>Decrease Population</button>*/}
      </div>
    </main>
  );
}
