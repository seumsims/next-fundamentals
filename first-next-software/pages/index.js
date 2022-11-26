import React, {Component} from 'react';
import Image from "next/image";
import Head from "next/head";
import Menu from "../elements/menu";
import Headerforseometa from "../elements/headerforseometa";

export async function getStaticProps(){
    return {
        props:{
            APIKEY:process.env.APIKEY
        }
    }
}


class Index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>
                        Home
                    </title>

                  <Headerforseometa/>

                </Head>
                <h1> API KEY: {this.props.APIKEY}</h1>
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