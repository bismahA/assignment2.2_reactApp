import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import picS from './sample.gif'
import { useState } from 'react';



//import './App.css';
//import Button from 'react-bootstrap/Button';

function App() {
 
  const [pic, showPic] = useState(false);
  return (

    <div >
      <div className="pt-5 pb-5 text-center">
        <Button variant="outline-dark" size='lg' onClick={() => showPic(!pic)}>Press me</Button>
      </div>

      <div>
        {
          pic && (
            <div className='text-center'>
              <img src={picS} alt="Logo" />

            </div>

          )
        }
      </div>






    </div>
  );
}

export default App;
