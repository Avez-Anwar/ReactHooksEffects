import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffect from './Hooks/UseEffect';
import ClassCounter from './Hooks/ClassCounter';
import HookMouse from './Hooks/HookMouse';
import MouseContainer from './Hooks/MouseContainer';
import HookCounter from './Hooks/HookCounter';
import DataFetching from './Hooks/DataFetching';
import CounterReducer from './Hooks/CounterReducer';
import CounterReducer2 from './Hooks/CounterReducer2';
import CounterReducer3 from "./Hooks/CounterReducer3"
import DataFetchingOne from './DataFetchingOne';
import DataFetchingTwo from './DataFetchingTwo';

function App() {

  return (
    <div className="App">
      {/*<HookCounter/>*/}
      {/*<MouseContainer/>*/}
     {/*<HookMouse/>*/}
      {/*<ClassCounter/>*/}
      {/*<DataFetching/>*/}
      
{/*<ChannelContex.Provider value={"Innovation"}>
<UserContext.Provider value={"Avez"}>
      <ComponentC/>
</UserContext.Provider>
  </ChannelContex.Provider>*/}
  {/*<CounterReducer/>*/}
  {/*<CounterReducer2/>*/}
  {/*<CounterReducer3/>*/}
  {/*<Main/>*/}
  {/*<DataFetchingOne/>*/}
  <DataFetchingTwo/>
    </div>
  );
}

export default App;
