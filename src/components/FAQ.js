import { Link } from "react-router-dom"

function FAQ() {
  return (
    <>
      <h2>FAQ</h2>
      <nav>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

export default FAQ