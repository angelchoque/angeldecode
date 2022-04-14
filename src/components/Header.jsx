
export default function Header(){
  return (
    <header className="main-header">
      <nav className="navbar-main">
        <ul className="logo-content">
          <li><a href="/">ANGEL DEV.</a></li>
        </ul>
        <ul className="navbar-list">
          <li><a href>Home</a></li>
          <li><a href>Blog</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href>Contact me</a></li>
          <li className="download-button"><a href download="Angelchoque-CV">Download CV</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <div className="header-content__profile">
          <h2 className="name-content">
            Angel Choque
          </h2>
          <h1 className="main-title">
            Frontend Developer
          </h1>
          <a className="download-button--blue" href download="Angelchoque-CV">Download CV</a>
        </div>
        <picture className="img-profile">
          <img src alt="angel choque" />
        </picture>
      </div>
    </header>
  )
}