import React, { useEffect, useState } from 'react';
import './dataSaver.css'
import { ExtractData } from '../../helpers/extractData.js';
import { CardsContainer } from '../cardsContainer/cardsContainer.js';
export function DataSaver({ searchTerm }) {
    const [items, setItems] = useState([]);
    console.log(items); // Para revisar si los datos llegan bien
    useEffect(() => {
        ExtractData()
            .then((res) => {
                setItems(res);
            });
    }, []);
    // Filtrar los items con base en el searchTerm
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            {/* Mostrar las cards solo si hay resultados */}
            {filteredItems.length === 0 ? (
                <div>
                    <h2 className='fs-1'>Sorry ˙◠˙ <br /> There isn't any item with that name yet.</h2>
                </div>
            ) : (
                <CardsContainer items={filteredItems} />
            )}
        </div>
    );
}
