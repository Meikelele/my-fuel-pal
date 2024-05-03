import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import Content from '../components/Content';
import JustLine from '../components/JustLine';

class Myfuelpal extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        <Content header='MyfuelPal' subtext='just your fuelnotes' link='/myfuelpal' buttonName='View All'/>
                        <JustLine />
                    </section>

                </main>
            </Layout>     
        );
    }
}
export default Myfuelpal;