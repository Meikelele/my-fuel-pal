import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/addcar.css';

import Menu from '../components/Menu';
import Content from '../components/Content';
import Button from '../components/Button';
import StyledInput from '../components/StyledInput';

import File from '../images/upload_file.svg';



class AddCar extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        <Content header='MyCars' subtext='just your cars' link='/mycars' buttonName='View all'/>
                        <section className='addcar'>
                            <form className='addcar__form'>
                                <img src={File} alt="Logo" width={80} height={80}/>
                                <input type="file" className='upload_file'></input>
                                <StyledInput type='text' text='*Nickname' />
                                <select name='brand'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>BMW</option>
                                    <option>AUDI</option>
                                    <option>LEXUS</option>
                                </select>
                                <select name='model'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>E46</option>
                                    <option>E36</option>
                                    <option>A4</option>
                                    <option>A5</option>
                                    <option>IS 200</option>
                                </select>
                                <StyledInput type='text' text='*Course' />
                                <StyledInput type='text' text='*License number' />
                                <StyledInput type='text' text='*Country' />
                                <select name='fuel'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>ON</option>
                                    <option>PB 95</option>
                                    <option>PB 98</option>
                                    <option>LPG</option>
                                </select>
                                <textarea name="description" rows="5" placeholder="Some note..."></textarea>
                                <p className='subtext'>*not null areas</p>
                                <Button text="Save" />
                            </form>
                        </section>
                        
                    </section>

                </main>
            </Layout>     
        );
    }
}
export default AddCar;