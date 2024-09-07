function Card({ img, description, price }) {
  return (
    <div className="card">
      <img src={img} alt="1jpg" width="133px" height="112px" />
      <h5>{description}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <button className="button">
          <img
            src="/assets/img/plus.svg"
            alt="plus"
            width="11px"
            height="11px"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
