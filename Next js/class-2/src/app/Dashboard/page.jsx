import Link from "next/link";

export default async function Dashboard() {

    try {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        
        const memes = data.data.memes;

        return (
            <div>
                {memes.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.url} alt={item.name} width={200} />
                        <Link href={`Details/${item.id}`}>Go</Link>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error('Error fetching memes:', error);
        return <div>Error loading memes.</div>;
    }
}
