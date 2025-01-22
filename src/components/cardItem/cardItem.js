//Este archivo es el que define la estructura que va a tener cada card y adicionalmente donde estan abajo las ventanas modales
import flameIcon from '../../assets/flame icon.png'
import './cardItem.css'
export function CardItem({ item }) {
    const cardImg = {
        background: '#BEBEBE'
    }
    return (
        <div>
            {/* DIV QUE ME VA A GUARDAR LA ESTRUCTURAS DE LAS CARDS */}
            <div className="cardStyles card border-0" >
                <div style={cardImg} className="rounded-top">
                    <img src={item.image} className="img" alt="weapon preview img" />
                </div>
                <div className="card-body d-flex flex-column align-items-center rounded-bottom cardBodyStyles">
                    <img src={flameIcon} alt="flame icon" id="flame1" />
                    <img src={flameIcon} alt="flame icon" id="flame2" />
                    <h5 className="card-title fs-3">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    {/* Abajo en el data bs target se necesitaba el # para que supiera que era por ese id como tal, ya que si no lo colocaba, entonces no entendia cual modal llamar por id, además de que la ` fue por una cuestión de sintaxis, y como estoy trabajando con javascript y un valor, va dentro de esas llaves */}
                    <a href=".com" className="btn buttonStyle" data-bs-toggle="modal" data-bs-target={`#${item.dataBsTarget}`}>View More</a>
                </div>
            </div>
            {/* DIV QUE ME VA A GUARDAR TODAS LAS VENTANAS MODDALES */}
            <div>
                {/* VENTANA EMERGENNTE PARA LOS ITEMS */}
                <div className="modal fade" id={item.dataBsTarget} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered d-flex justify-content-center">
                        <div className="modal-content">
                            <div className="modal-header border-dark">
                                <h4 className="modal-title fs-3" id="exampleModalLabel">{item.name}</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body d-flex justify-content-around align-items-center gap-3">
                                <ul className="d-flex flex-column gap-5 fs-5">
                                    <li>
                                        <span className="fw-bold text-uppercase">Description</span> <br /> {item.description}
                                    </li>
                                    <li>
                                        <span className="fw-bold text-uppercase">Requirements or Effects</span> <br /> {item.requirements_effects}
                                    </li>
                                    <li>
                                        <span className="fw-bold text-uppercase">Games where it appears: </span> <br /> {item.gameAppear}
                                    </li>
                                    <li>
                                        <span className="fw-bold text-uppercase">Category</span> <br />{item.category}
                                    </li>
                                </ul>
                                <img src={item.image} alt="item example" id='imgModal' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}