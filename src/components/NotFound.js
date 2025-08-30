import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <h2>您的網址出錯囉！</h2>
      <nav>
        <Link to="/">回到首頁</Link>
      </nav>
    </>
  )
}

export default NotFound