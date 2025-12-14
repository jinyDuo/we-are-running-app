type PageProps = { params: { raceId: string } }; export default function Page({ params }: PageProps) { return (<main><h1>Race {params.raceId}</h1></main>); }
