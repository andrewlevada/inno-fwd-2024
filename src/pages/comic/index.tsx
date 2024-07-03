import Head from "next/head";
import Comic from "../../components/Comic";


export default function ComicPage() {
    return (
        <div className="page flex flex-col w-full">
            <Head>
                <title>Assignment 2: Comic</title>
            </Head>

            <h3>Assignment 2: Comic</h3>

            <Comic />
        </div>
    );
}
