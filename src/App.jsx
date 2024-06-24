import React from 'react';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="card">
          <div>
            <h3>Информация для путешествинников</h3>
            <img src="Group 2.png" alt="" className="info_ico" />
          </div>
          <a href="#info" id="a">
            <div className="learn_button">Изучить</div>
          </a>
        </div>
        <div className='info' id='info'>
        <b>Hazel</b> — это ценностно ориентированная телепорткомпания, которая стремится внедрять инновационные методы на каждом этапе обслуживания пассажиров. Наша цель — сделать перелеты по эпохам доступными и безопасными для жителей всего мира. Мы внедряем самые современные технологии, чтобы создать особую атмосферу путешествия с Hazel, отличающегося не только ценой, но и качеством обслуживания. Мы предлагаем упрощенную модель обслуживания, которая подразумевает отказ от бумажных билетов, салон унифицированного класса с кожаными креслами и заказ питания на борту за дополнительную плату.
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;