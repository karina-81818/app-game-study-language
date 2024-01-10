import styles from './HomePage.module.scss'

export default function HomePage(props) {
    return (
        <div className={styles.container}>
                <img className={styles.img} src="https://img.freepik.com/free-vector/flat-style-hand-drawn-english-school-illustration_23-2149502849.jpg?w=740&t=st=1702098455~exp=1702099055~hmac=557c8fcffc238ca026a4aa66a32b45d22675fbaff641c6b52d9dc7ec3fa23853" alt="study girl" />
        </div>
    );
}