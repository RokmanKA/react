import React from 'react';

import Characters from './components/Characters'

function App() {
  return (
      <div>
        <Characters
        id={1}
        name={"Rick Sancehez"}
        status={"Alive"}
        Species={"Human"}
        gender={"Male"}
        image={"https://i.pinimg.com/originals/58/f9/b3/58f9b3494168cc9f502967823c8e1626.jpg"}
        alt={"Rick"}
        />
      </div>
  );
}

export default App;