import Card from '../card/Card'

function App() {
  return (
    <>
      <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img
              src="/assets/img/logo.png"
              alt="logo"
              width="40px"
              height="40px"
            />
            <div>
              <h3 className="text-uppercase">REACT SNEAKERS</h3>
              <p className='opacity-5'>Магазин лучших кроссовок</p>
            </div>
          </div>

          <ul className="d-flex">
            <li className="mr-30">
              <img
                src="/assets/img/cart.svg"
                alt="cart"
                width="18px"
                height="18px"
              />
              <span>1205 руб.</span>
            </li>

            <li>
              <img
                src="/assets/img/user.svg"
                alt="user"
                width="18px"
                height="18px"
              />
            </li>
          </ul>
        </header>

        <div className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>
          <div className="d-flex">
            <Card img={"/assets/img/sneakers/1.jpg"} price={'12 999'} description={'Мужские Кроссовки Nike Blazer Mid Suede'} />
            <Card img={"/assets/img/sneakers/2.jpg"} price={'12 899'} description={'Мужские Кроссовки Nike Air Max 270'} />
            <Card img={"/assets/img/sneakers/3.jpg"} price={'8 499'} description={'Мужские Кроссовки Nike Blazer Mid Suede'} />
            <Card img={"/assets/img/sneakers/4.jpg"} price={'8 999'} description={'Кроссовки Puma X Aka Boku Future Rider'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
