import React, { useState } from "react";
import { useGif } from '../../hooks/Gifs';
import { InputSearch, Results } from "../../components";

export function Dashboard() {
    const { handleOnChange, data, searchWord, loading} = useGif()
  return (
    <main className=' justify-start items-center w-full h-full'>
        <h1 className=' font-bold mt-10'>Searcher of Gif's App</h1>
        <InputSearch handleInputChange={handleOnChange}/>
        <Results data={data} searchWord={searchWord} loading={loading} />
    </main>
  )
}