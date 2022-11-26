import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";
import Design from "../elements/designs/Design.module.css";

class Seo extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>SEO</title>

                    <link rel="shortcut icon" href="https://react.rabbil.com/images/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="https://react.rabbil.com/images/favicon.ico" type="image/x-icon"/>
                    <meta name="description"
                          content="Laravel tutorial bangla | Rabbil Hasan is an Expert Web Developer in Bangladesh. He is highly talented, experienced, professional and cooperative software engineer, working in programming and web world for more than 4 years. Moreover Rabbil Hasan has a skilled team for achieving his goal named “Team Rabbil”.Team Rabbil assure you a wide range of quality IT services. "/>
                    <meta name="keywords"
                          content="Laravel  tutorial bangla, Expert Web Developer in Bangladesh, Expert Mobile App Developer in Bangladesh, Android App Developer in Bangladesh"/>
                    <meta name="author" content="Rabbil Hasan"/>

                </Head>
                <ul>
                    <li>
                        <Link className={Design.TestColorFF25C9FF} href="/">
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