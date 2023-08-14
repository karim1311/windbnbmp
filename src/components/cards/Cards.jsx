{
  /* archivo Cards dentro de carpeta cards dentro de carpeta components dentro de src */
}
import "./card.css";

function Cards({ foto, superhost, tipo, camas, calificacion, titulo }) {

  
  return (
    <div className="card border border-0 monts">
      <img
        src={foto}
        className="card-img-top rounded-4"
        width="395"
        height="269"
        alt="foto-estadía"
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex">
          {superhost && <p className="card-text">SUPERHOST</p>}
          <p className="card-text">{tipo}</p>
          {camas !== null && <p className="card-text">.{camas} beds</p>}
          <p>
            <span className="material-symbols-outlined star">grade</span>
            {calificacion}
          </p>
        </div>

        <div>
          <h5 className="card-title">{titulo}</h5>
        </div>
      </div>
    </div>
  );
}

export default Cards;
