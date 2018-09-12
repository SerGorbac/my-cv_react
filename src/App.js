import React from 'react';
import Icon from 'react-fontawesome';
import 'reset-css';
import './App.css';

function App() {
  const portrait = 'https://24smi.org/public/media/2016/12/21/_1.jpg';

  return (
    <div className="App">
      <div className="App-container">
        <header className="Header">
          <h1 className="Header-headline"> Sergej Gorbacevskij </h1> <hr />
          <img
            className="Header-image"
            src={portrait}
            alt="chtullu profesional portriat"
          />
          <div className="Header-content">
            <p className="Header-contacts">
              <span> Phone </span> +37060148434
            </p>
            <p className="Header-contacts">
              <span> Email </span> avalanciasergej@gmail.com
            </p>
            <p className="Header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.Pellentesque posuere quis arcu id consequat.Curabitur a
              fringilla massa, sed cursus nisi.Integer vulputate sit amet ligula
              ac venenatis.Sed ullamcorper id lacus a suscipit.Ut eu imperdiet
              tortor.In hac habitasse platea dictumst.Maecenas risus ligula,
              malesuada vitae nibh et, dapibus rhoncus augue.Integer non felis
              sagittis, cursus diam a, luctus lectus.Cras porttitor tellus et
              dolor cursus feugiat sit amet quis augue.Praesent dui mauris,
              porttitor eu mollis id, sagittis quis mauris.{' '}
            </p>
          </div>
        </header>
        <main className="Content">
          <section className="Content-section">
            <div className="Content-section-title">
              <h3> Education </h3>
            </div>
            <div className="Content-section-description">
              <h3> CodeAcademy, Vilnius, Lithuania </h3>
              <p className="Content-section-info">
                <span className="Content-info-bold"> Major: </span> JavaScript
              </p>
              <p className="Content-section-info">
                <span className="Content-info-bold"> Minor: </span> vue.js
              </p>
            </div>
          </section>
          <section className="Content-section">
            <div className="Content-section-title">
              <h3> Skills </h3>
            </div>
            <div className="Content-section-description">
              <h3> Technical Skills </h3>
              <p className="Content-section-info">
                JavaScript(ES6 + ), React.js
              </p>
            </div>
          </section>
          <section className="Content-section">
            <div className="Content-section-title">
              <h3> Experience </h3>
            </div>
            <div className="Content-section-description">
              <div className="Content-description-container">
                <div className="Content-section-headline">
                  <h3> Technical Skills </h3>
                  <p className="Content-section-subtitle">Web development</p>
                </div>
                <ul className="Content-section-list">
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="Content-section">
            <div className="Content-section-title">
              <h3> Hobbies </h3>
            </div>
            <div className="Content-section-description">
              <p className="Content-section-info">Living </p>{' '}
            </div>
          </section>
          <section className="Content-section">
            <div className="Content-section-title">
              <h3> Reference </h3>
            </div>
            <div className="Content-section-description">
              <p className="Content-section-info">Anybody sane </p>{' '}
            </div>
          </section>
        </main>
      </div>
      <footer className="Footer">
        <a
          href="avalanciasergej@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="envelope" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" />
        </a>
        <a href="tel:+37060148434" target="_blank" rel="noopener noreferrer">
          <Icon name="phone" />
        </a>
        <a
          href="https://github.com/SerGorbac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="GitHub" />
        </a>
        {/* TODO: Add github link icon here */}
      </footer>
    </div>
  );
}

export default App;
