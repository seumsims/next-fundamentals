import React, {Component} from 'react';
import Link from "next/link";
import Head from "next/head";

class Login extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>
                        Login
                    </title>
                </Head>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>

                <h1 style={{color: "limegreen"}}>Salamoon Alaikoom </h1>
                <h1 style={{color: "olive"}}>This is Login page</h1>
                <h1 style={{color: "#ff4e1a"}}>Welcome to Next JS 13</h1>
            </div>
        );
    }
}

export default Login;