import React, {Component} from 'react';
import Menu from "../elements/menu";
import Head from "next/head";
import Headerforseometa from "../elements/headerforseometa";

class Imperativeroutingtest extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>
                        Imperative Routing Test Page
                    </title>

                    <Headerforseometa/>

                </Head>
                <Menu/>
                <h1>This is Imperative Routing Test Page</h1>

            </>
        );
    }
}

export default Imperativeroutingtest;