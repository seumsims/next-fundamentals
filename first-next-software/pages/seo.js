import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";

class Seo extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>SEO</title>
                </Head>
                <ul>
                    <li>
                        <Link href="/">
                            Home

                        </Link>
                    </li>
                </ul>
                <h1>Salam from Seo Page</h1>

            </div>
        );
    }
}

export default Seo;