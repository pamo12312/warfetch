import { useRouter } from 'next/router';
import styles from "@/app/page.module.css";
export default function Country() {
    const router = useRouter();
    const { name, tld } = router.query;
    return (
        <div>
            <p className={styles.name}>Name: {name}</p>
                <p>Internet Domain: {tld}</p>

        </div>
    );
}
