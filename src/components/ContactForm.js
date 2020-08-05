import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"

const style = {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  padding: "0",
  width: "100%",
}

const ContactForm = () => {
  return (
    <form
      style={style}
      name="contactForm"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <h3 style={{ marginBottom: "10px" }}>Enquiry Form</h3>
      <input type="hidden" name="form-name" value="contactForm"></input>
      <TextField
        required
        id="outlined-required"
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Phone Number"
        name="number"
        variant="outlined"
        required
      />
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        name="email"
        variant="outlined"
      />
      <TextField
        id="message"
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button
        style={{ margin: "10px", backgroundColor: "#273c75" }}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<SendIcon />}
      >
        SEND
      </Button>
    </form>
  )
}

export default ContactForm
