import React, {Component} from 'react';
import Link from "next/link";
import Design from "./designs/Design.module.css";

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link className={Design.TestColor20c997} href="/">Home</Link>
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

                    <li>
                        <Link href="/seo">SEO</Link>
                    </li>
                    <li>
                        <Link href="/getstaticpropstest">GetStaticPropsTest</Link>
                    </li>
                    <li>
                        <Link className={Design.TestColor20c997} href="/getserversidepropstest">
                            getServerSideProps
                        </Link>
                    </li>

                    <li>
                        <Link className={Design.TestColor20c997} href="/indexroutetest">
                            Index Route Test
                        </Link>
                    </li>

                    <li>
                        <Link className={Design.TestColorFF25C9FF} href="/nestedroutes/nestedroutetest">
                            Nested Route Test
                        </Link>
                    </li>

                    <li>
                        <Link className={Design.TestColorff8306} href="/nestedroutes/nestedroutesdir/anoternestedroutefile">
                            Another Nested Route On Nested Dir
                        </Link>
                    </li>

                    <li>
                        <Link className="text-primary" href="/routewithquerystring/querystringroutingtest">
                            Query String Routing
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;