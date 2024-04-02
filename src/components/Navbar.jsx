import styles from "../styles/navbar.module.css";
import icon from "../assets/1608908_github_icon.svg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.icon} src={icon} alt="" />
      <h2 className={styles.header}>Github Search</h2>
    </div>
  );
};

export default Navbar;
