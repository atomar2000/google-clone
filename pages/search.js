import Head from 'next/head'
import Header from '../components/Header'
import dotenv from 'dotenv'
import Response from '../Response'
import {useRouter} from 'next/router';
import SearchResults from '../components/SearchResults'

function Search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google search</title>
            </Head>
            <Header/>
            <SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;

    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`).then(res => res.json());

    return {
        props: {
            results: data
        }
    }
}
