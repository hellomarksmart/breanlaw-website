import * as React from "react"

const Success_message = ({ message }) => {
  return (
    <>
      <div className="w-96">
        <p className="text-sm w-full font-bold tracking-tight text-zinc-400 font-sans sm:text-sm"> {message} </p>
      </div>
    </>
  )
}

export default Success_message