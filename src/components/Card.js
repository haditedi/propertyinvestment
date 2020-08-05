import React from "react"
import Divider from "./Divider"

const Card = ({ mainText, children, style }) => {
  return (
    <div
      style={{
        ...style,
        maxWidth: "750px",
        padding: "10px 10px 20px",
        margin: "20px",
        borderRadius: "5px",
      }}
    >
      <h2
        style={{
          textTransform: "capitalize",
          padding: "10px 10px 30px",
          textAlign: "center",
        }}
      >
        {mainText}
      </h2>
      {children}
    </div>
  )
}

export default Card
