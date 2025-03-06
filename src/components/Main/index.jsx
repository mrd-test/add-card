import './index.css';
import Card from '../Card';
import { useSelector } from 'react-redux';

const Main = ({  }) => {

    const cards = useSelector(state => state.cards)

    console.log(cards)


    return(
        <div className='main__container'>
          { cards.map(item => (
            <Card key={item.id}
                  id={item.id}
                  gender={item.gender}
                  name={item.name}
                  src={item.src}
                  fav={item.fav}/>
          ))  }
        </div>
    )
}

export default Main;