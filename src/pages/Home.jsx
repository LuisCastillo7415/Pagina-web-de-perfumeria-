import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ListaPerfumes from "../components/ListaPerfumes";

import React from 'react'

export default function Home() {
  return (
     <>
   <Header />
    <Navbar />
    <Banner />

      <div className="titulo">
        <h1>PERFUMES</h1>
      </div>
       </>
  )
}
