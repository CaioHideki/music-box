import React from "react";
import ItemMusica from "../components/ItemMusica";

function Musicas() {
    return (
        <>

            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    <ItemMusica 
                    musica="Whisper"
                    artista="Halsey"
                    categoria="pop"
                    ano = {0}
                    id="1"/>
                    <ItemMusica />
                    <ItemMusica />  
                    <ItemMusica />
                    <ItemMusica />
                </div>
            </div>
        </>
    );

}

export default Musicas;