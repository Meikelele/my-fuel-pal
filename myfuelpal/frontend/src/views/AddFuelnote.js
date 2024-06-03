import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/addfuelnote.css';

import Menu from '../components/Menu';
import Content from '../components/Content';
import Button from '../components/Button';
import StyledInput from '../components/StyledInput';



class AddFuelnote extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        {/* MyFuelPal section */}
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyFuelPal</h1>
                                <p className='subtext'>just your cars</p>
                            </div>
                            <button className='button__viewall'>View all</button>
                        </div>



                        <section className='addfuelnote'>
                            <form className='addfuelnote__form'>
                                <StyledInput type='text' text='*Price' />
                                
                                <StyledInput type='text' text='*Liters' />
                                    {/* CZAS i DATA maja sie domyslnie ustawiac na aktualna */}
                                <StyledInput type='time' text='*Time' />
                                <StyledInput type='date' text='*Date' />
                                <select name='car__select'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    {/* NIECH SIE USTAWIA OSTATNIO DODANE AUTO ??? */}
                                    <option>*select</option>
                                    <option>Nickname_1</option>
                                    <option>Nickname_2</option>
                                    <option>Nickname_3</option>
                                    <option>Nickname_4</option>
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
export default AddFuelnote;