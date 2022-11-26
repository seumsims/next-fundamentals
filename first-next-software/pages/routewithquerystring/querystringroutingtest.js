import React, {Component} from 'react';
import Head from "next/head";
import Link from "next/link";
import Headerforseometa from "../../elements/headerforseometa";
import Menu from "../../elements/menu";
import Design from "../../elements/designs/Design.module.css";


class Querystringroutingtest extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Querystringroutingtest</title>

                <Headerforseometa/>
                </Head>
                <ul>
                    <li>
                        <Link href={{pathname:"/about", query: {firstName:"Rabbil",lastname:"Hasan"}}}>
                            About Me
                        </Link>
                    </li>
                </ul>
                <h1 className="display-3">Salam From querystringroutingtest.js</h1>
                <h1 color="text-primary">pages/routewithquerystring/querystringroutingtest.js</h1>
                <div className={Design.QueryStringTest}>
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Querystringroutingtest;