import React from 'react';
import PropTypes from 'prop-types'


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://aromasian.com/wp-content/uploads/2017/07/grill-pork-belly-samgyeopsal.jpg',
    rating: '4.9'
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2008/01/bibimbap-bowl.jpg',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Donkasu',
    image: 'https://s3-media1.fl.yelpcdn.com/bphoto/5d7cIbC6vpXyvV2SZHrdzw/l.jpg',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg',
    rating: 4.6
  },
]

function Food({name, picture, raiting}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{raiting}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
}

// 속성명은 반드시 'propTypes'으로 설정해야함
// 예를 들어 'sexyTypes'는 안됨
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  raiting: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          raiting={dish.rating} 
        />
      ))}
    </div>
  )
}

export default App;
