//Este componente es como el principal en el que llegan los otros componentes (doncde se va a montar todo)
import React, { useState } from 'react';
import './cardsSection.css';
import '../../App.css';
import { DataSaver } from '../dataSaver/dataSaver.js';
import ReactPlayer from 'react-player';
import videoBg from '../../assets/bonfireVideo.mp4'
export function CardsSection() {
    const [searchTerm, setSearchTerm] = useState(""); // Estado con su función y parámetro que voy a usar (ojo que arranca vacío ya que el usuario no ha escrito nada aún)
    return (
        <section className="container-fluid cardsSection text-center d-flex flex-column align-items-center gap-5">
            <ReactPlayer
                url={videoBg}
                controls={false}
                loop={true}
                muted={true}
                playing={true}
                className={"react-player"}
            />
            <div className="bgDark"></div>
            {/* FILA CON EL TÍTULO PRINCIPAL */}
            <div className="row">
                <div className="col">
                    <h1>The Bonfire Lit</h1>
                </div>
            </div>
            {/* FILA CON EL PARRAFO */}
            <div className="row">
                <div className="col">
                    <p className='fs-4 pDescription'>Welcome to the <span>bonfire lit</span> , the place where you can find the items of the from software games. Please type an item name or select a game to start</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className='fs-5 pDescription'>pre-release-version-0.1</p>
                </div>
            </div>
            {/* FILA CON LA BARRA DE BÚSQUEDA */}
            <div className="row rowSearch">
                <div className="col d-flex justify-content-end">
                    <div className="search-container">
                        <div className="search-bar">
                            {/* Actualizar el estado en cuanto el usuario escriba algo, como la letra de un arma o consumible */}
                            <input type="text" className="search-input" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <div className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="glow"></div>
                    </div>
                </div>
            </div>
            {/* FILA QUE CONTIENE LAS CARDS */}
            <div className="row">
                <div className="col flex-wrap cards-items-container">
                    {/* Aquí se pasa el searchTerm para filtrar dentro del DataSaver */}
                    <DataSaver searchTerm={searchTerm} />
                </div>
            </div>
        </section>
    );
}
