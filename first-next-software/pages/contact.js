import React, {Component} from 'react';
import Link from 'next/link';

class Contact extends Component {
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

                <h1 style={{color: "limegreen"}}>Salamoon Alaikoom </h1>
                <h1 style={{color:"fuchsia"}}>This is Contact page</h1>
                <h1 style={{color: "chocolate"}}>Welcome to Next JS 13</h1>

            </div>
        );
    }
}

export default Contact;