import style from "../styles/header.module.css"

const Header = () => {
  return (
    <header className={style.container}>
      <h1>
        <span className="nprinsley-text-blupelan">JZN Note</span> &#9749;
      </h1>

      <ul className={style.list}>
        <li>
          <a href="#catatan">Tambah Catatan</a>
        </li>
        <li>
          <a href="#aktif">Catatan Aktif</a>
        </li>
        <li>
          <a href="#arsip">Catatan Arsip</a>
        </li>
        <li>
          <a href="#footer">Footer</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
