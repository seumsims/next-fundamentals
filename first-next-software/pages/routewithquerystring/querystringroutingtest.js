import React, {Component} from 'react';
import Head from "next/head";
import Headerforseometa from "../../elements/headerforseometa";


class Querystringroutingtest extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Querystringroutingtest</title>

                <Headerforseometa/>
                </Head>
                <h1 className="display-3">Salam From querystringroutingtest.js</h1>
                <h1 color="text-primary">pages/routewithquerystring/querystringroutingtest.js</h1>
            </div>
        );
    }
}

export default Querystringroutingtest;