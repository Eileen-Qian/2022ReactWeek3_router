import { Link, useNavigate } from "react-router-dom"

function About() {
  let navigate = useNavigate();
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/faq">FAQ</Link>
        <br />
        <input type="button" value="回首頁" onClick={(e) => {
          navigate("/")
        }} />
      </nav>
    </>
  )
}

export default About
