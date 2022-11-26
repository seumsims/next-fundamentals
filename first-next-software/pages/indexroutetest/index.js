import React, {Component} from 'react';
import Image from "next/image";
import Head from "next/head";
import Menu from "../../elements/menu";


class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>
                        Index Route Test Page
                    </title>

                    <link rel="shortcut icon" href="https://react.rabbil.com/images/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="https://react.rabbil.com/images/favicon.ico" type="image/x-icon"/>
                    <meta name="description"
                          content="Laravel tutorial bangla | Rabbil Hasan is an Expert Web Developer in Bangladesh. He is highly talented, experienced, professional and cooperative software engineer, working in programming and web world for more than 4 years. Moreover Rabbil Hasan has a skilled team for achieving his goal named “Team Rabbil”.Team Rabbil assure you a wide range of quality IT services. "/>
                    <meta name="keywords"
                          content="Laravel  tutorial bangla, Expert Web Developer in Bangladesh, Expert Mobile App Developer in Bangladesh, Android App Developer in Bangladesh"/>
                    <meta name="author" content="Rabbil Hasan"/>

                </Head>
                <button className="btn btn-success shadow"><h1>success</h1></button>

            <Menu/>

                <h1 style={{color: "limegreen"}}>Salamoon Alaikoom </h1>
                <h1 style={{color: "palevioletred"}}>This is home page</h1>
                <h1 style={{color: "lightsteelblue"}}>Welcome to Next JS 13</h1>

                <Image src="/images/file.png" alt="me" width="680" height="384"/>
                <img src="/pictures/Ixora%20casei%20458kilo.png" alt="me" width="680" height="384"/>
                {/* this is not going to work */}
                {/*<img src="./Ixora%20casei%20458kilo.png" alt="me" width="680" height="384" />*/}
            </div>
        );
    }
}

export default Index;