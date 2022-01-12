import * as React from "react"

const Text = ({ h1_title, h1_detail, h3_title, h3_detail }) => {

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 font-sans sm:text-5xl lg:text-6xl"> {h1_title} </h1>
      <p className="mt-6 text-lg text-zinc-400 font-sans max-w-3xl"> {h1_detail} </p>

      <h3 className="text-lg font-normal text-stone-100"> {h3_title} </h3>
      <p className="text-base text-stone-100 font-sans max-w-3xl"> {h3_detail} </p>
    </>
  )
}

export default Text