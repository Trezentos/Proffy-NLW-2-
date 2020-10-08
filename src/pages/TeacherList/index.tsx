import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import PageHeader from '../../components/PageHeader'

function TeacherList(){
    return(
        <div id="page-teacher-list" className='container'>
            <PageHeader title="Esses são os proffys disponíveis" >
                    <form  id="search-teachers" >
                        <div className="input-block">
                            <label htmlFor="subject">Materia</label>
                            <input type="text" id="subject" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="week_day">Dia da Semana</label>
                            <input type="text" id="week_day" />
                        </div>

                        <div className="input-block">
                            <label htmlFor="time">Hora</label>
                            <input type="text" id="time" />
                        </div>
                    </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/42190569?s=460&u=becab3173911efa751c9a64dca238dd3ae3ee048&v=4" alt=""/>
                        <div>
                            <strong>Gustavo de Andrade Fagundes: </strong>
                            <span>Matemática</span>
                        </div>
                        </header>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                             <br /><br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                , when an unknown printer took a galley of type and scrambled it to make a
                                 type specimen book
                            </p>
                            <footer>
                                <p>
                                    Preço/hora
                                    <strong>R$ 80,00</strong>
                                </p>

                                <button type="button">
                                    <img src={whatsAppIcon} alt="Whats logo" />
                                    Entrar em contato
                                </button>
                            
                            </footer>                   
                </article>
            </main>

        </div>
    )
    
}

export default TeacherList;