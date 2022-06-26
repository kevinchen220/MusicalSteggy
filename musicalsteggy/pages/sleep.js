import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/Sleep.module.css"
import Image from "next/image"
import Script from "next/script"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"

export default function Sleep() {
  const downloadXML = async () => {
    try {
      const config = {
        method: "GET",
      }
      const res = await fetch("/api/music", config)
      const data = await res.json()

      const blob = new Blob([data.musicXML], {
        type: "text/plain",
      })

      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = "TwinkleTwinkleLittleStar.musicxml"
      link.href = url
      link.click()
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className={styles.container}>
      <Script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0" />
      <main className={styles.main}>
        <div className={styles.title}>Goodnight!</div>

        <Moon right="5em" top="2em" />
        <midi-player
          src="/midi.mid"
          visualizer="#myVisualizer"
        ></midi-player>

        <div className={styles.button}>
          <button
            onClick={downloadXML}
            className="rounded-lg p-6 text-2xl text-blue-100 bg-violet-700 hover:bg-indigo-900 hover:text-blue-400"
          >
            Download
          </button>
        </div>

        <Steggy src="/images/Sleepy.svg" width="50vh" bottom="5em" left="5em" />
      </main>
    </div>
  )
}
