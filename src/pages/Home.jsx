
import Banner from "../components/Banner";
import ListaPerfumes from "../components/ListaPerfumes";

import React from 'react'

export default function Home() {
  return (
     <>
    <Banner />

      <div className="titulo">
        <h1>PERFUMES</h1>
        <ListaPerfumes/>
      </div>
       </>
  )
}
