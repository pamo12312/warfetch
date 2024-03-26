import Link from 'next/link';
import styles from './page.module.css';

export default async function CountryDetails({ params }) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
    const data = await response.json();

    const name = data[0].name.common;
    const officialName = data[0].name.official;
    const flagDesc = data[0].flags.alt;
    const area = data[0].area;
    const population = data[0].population;





    return (
        <main>
            <div className="card-container">
                <div className={styles.card}>
                    <h1>{name}</h1>
                    <p>
                        <span>Official Name: {officialName}</span>
                    </p>
                    <p>
                        <span>Flag Description: {flagDesc}</span>
                    </p>
                    <p>
                        <span>Area: {area} km²</span>
                    </p>
                    <p>
                        <span>Population: {population}</span>
                    </p>   <Link href={`/`} >Back</Link>
                </div>

            </div>
        </main>

    );
}
