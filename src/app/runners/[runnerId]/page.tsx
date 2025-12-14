type PageProps = { params: { runnerId: string } }; export default function Page({ params }: PageProps) { return (<main><h1>Runner {params.runnerId}</h1></main>); }
