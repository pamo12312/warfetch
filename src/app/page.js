import styles from './page.module.css';
import Link from 'next/link';
export default async function Home() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    const countries = data.map(country => ({
        name: country.name.common,
        flag: country.flags.svg,
        officialName: country.name.official,
        tld: country.tld ? country.tld[0] : 'N/A'
    }));


    return (
        <div className={styles.container}>
            {countries.map((country, index) => (
                <div key={index} className={styles.card}>
                    <p className={styles.name}>Name: {country.name}</p>
                    <div className={styles.flag}>
                        <img src={country.flag} alt={`${country.name} flag`} width="100" height="100" />
                    </div>
                    <p className={styles.officialName}>Official Name: {country.officialName}</p>
                    <p className={styles.tld}>Internet Domain: {country.tld}</p>
                    <Link href={`/country/${country.name}`} >More Info</Link>

                </div>
            ))}
        </div>
    );
}