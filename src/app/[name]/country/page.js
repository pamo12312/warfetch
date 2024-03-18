// country/page.js
import { useRouter } from 'next/router';

export default function Country() {
    const router = useRouter();
    const { country } = router.query;

    return <p>Ahoj, {country || 'neznamý stát'}!</p>;
}
