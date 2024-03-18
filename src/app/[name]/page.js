// [name].js
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    const { name } = router.query;

    return <p>{name}</p>;
}
