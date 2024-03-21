import styles from "@/app/page.module.css";

export default function Country({ name, tld }) {
    return (
        <div>
            <p className={styles.name}>Name: {name}</p>
            <p>Internet Domain: {tld}</p>
        </div>
    );
}


