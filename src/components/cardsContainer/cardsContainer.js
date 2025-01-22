//Este archivo funciona como el container de todas las cards que va a definir que va a recibir las cards y cuando colocar una despues de otra
import { CardItem } from "../cardItem/cardItem.js";
import '../../App.css'
export function CardsContainer({ items }) {
    return (
        <div className="row">
            <div className="col  d-flex justify-content-center flex-wrap cards-items-container">
                {items.map((prod) => <CardItem item={prod} key={prod.id} />)}
            </div>
        </div>
    )
}