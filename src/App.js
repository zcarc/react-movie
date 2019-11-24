import React from 'react';


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg'
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://aromasian.com/wp-content/uploads/2017/07/grill-pork-belly-samgyeopsal.jpg'
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://www.maangchi.com/wp-content/uploads/2008/01/bibimbap-bowl.jpg'
  },
  {
    id: 4,
    name: 'Donkasu',
    image: 'https://s3-media1.fl.yelpcdn.com/bphoto/5d7cIbC6vpXyvV2SZHrdzw/l.jpg'
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/1200px-Vegetable_gimbap.jpg'
  },
]

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>;
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  )
}

export default App;
