import S from './styles.module.scss';
import logo from '../../assets/rocket.svg';

export function Header() {
  return (
    <header className={S.header}>
      <div className={S.header__logo}>
        <img src={logo} title='ícone de foguete' alt='ícone de foguete' />
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}
