import style from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={style.container}>
      <h2>Logo</h2>
      <nav>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </nav>
    </header>
  )
}

export default Header