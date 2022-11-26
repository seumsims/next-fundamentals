import React, {Component} from 'react';
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <div>
                <h1>Salamoon Alaikoom Welcome to Next JS 13</h1>
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
            </div>
        );
    }
}

export default Index;