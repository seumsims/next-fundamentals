import React, {Component} from 'react';
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <div>

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

                <h1 style={{color:"limegreen"}}>Salamoon Alaikoom </h1>
                <h1 style={{color: "palevioletred"}}>This is home page</h1>
                <h1 style={{color: "lightsteelblue"}}>Welcome to Next JS 13</h1>

                <img src="/public/images/file.png" />
            </div>
        );
    }
}

export default Index;