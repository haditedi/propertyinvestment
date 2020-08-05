import React from "react"

const HeadingText = ({ text }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "15px auto",
        padding: "0 20px",
        maxWidth: "800px",

        backgroundColor: "#7f8fa6",
      }}
    >
      <h1 className="fadeIn">{text}</h1>
    </div>
  )
}

export default HeadingText
