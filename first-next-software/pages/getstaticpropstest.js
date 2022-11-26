import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";
import Design from "../elements/designs/Design.module.css";

export async function getStaticProps(){
    const res = await fetch( 'https://restcountries.com/v3.1/all');
    const json = await res.json();

    return {
        props: {countryList:JSON.stringify(json)}
    }
}

class Getstaticpropstest extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Get Static Props Test</title>

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
                <textarea name="" id="" cols="80" rows="10">
                      {this.props.countryList}
                </textarea>
            </div>
        );
    }
}

export default Getstaticpropstest;