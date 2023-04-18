
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from './reduxSaga/reducer';
import { useEffect } from 'react';

function App() {

  const dispatch=useDispatch();
  const catsArray=useSelector(state=>state.cat.items);
  const isLoading=useSelector(state=>state.cat.isLoading)
  

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  
  
  return (

    <div>
      <h2>Do You Love Cat ?</h2>
      <h6>{isLoading && 'LOADING....'}</h6>
        {catsArray.map((item,index)=>{return <div className='card' key={index}>
          <div>
          </div>
          <h5>{item.name}-{item.origin}</h5>
          <p>adaptability score: {item.adaptability}</p>
          <p>{item.temperament}</p>
          {item.description}</div>})}
    </div>
  );
}

export default App;
