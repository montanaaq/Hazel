import { useSearchParams } from 'react-router-dom';
import { cards } from '../../database/cards';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cards = () => {
  const [searchParams] = useSearchParams();
  const userContinent = searchParams.get('continent');
  const userPassangers = searchParams.get('passengers');
  const userWhen = searchParams.get('when');

  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    filtering();
  }, [userContinent, userPassangers, userWhen]);

  function filtering() {
    const filtered = cards.filter((card) => 
      card.continent == userContinent && card.passengers == userPassangers
    );
    setFilteredCards(filtered);
  }

  return (
    <div style={{
      height: 'fit-content',
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#341071'
    }}>
      <h1 style={{
        marginTop: '10px',
        marginBottom: '49px',
        color: 'white',
        fontWeight: 900,
        fontSize: '64px'
      }}>Result</h1>
      <div className='travel-cards'>
        {filteredCards.length > 0? 
          filteredCards.map((card) => (
            <div className='travel-card' key={card.id}>
              <p className='card-id'>#{card.id}</p>
              <div className='rectangle'>
                <div className='date-box'>
                  <p>date</p>
                  <br />
                  <p>{card.when}</p>
                </div>
                <div className='boxes'>
                  <div className='passengers-box'>
                    <p>Passengers</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>{card.passengers}</p> 
                  </div>
                  <div className='continent-box'>
                    <p>Continent</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>{card.continent}</p> 
                  </div>
                </div>
                <div className='button-card'>
                  <Link style={{
                    textDecoration: 'none',     
                  }} to={'/form'}>
                    <div>
                      Buy
                    </div>
                  </Link>
                  <div>
                    {card.price}
                  </div>
                </div>
              </div>
            </div>
          ))
          : 
          <p style={{fontSize: '48px', color: 'white', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No results</p>
        }
      </div>
    </div>
  )
};

export default Cards