import logo from './logo.svg';
import './App.css';
import { ToolBar } from './components/tool-bar/tool-bar';
import React from 'react';
import SendPhonesContext from './context/send-phones.context';
import { useSendPhones } from './hooks/send.phones.hook';

function App() {
  const {phonesList, setPhonesList, params, setParams} = useSendPhones()
  console.log()
  return (
    window.location.href.indexOf('key=dmDbcQH92j&')!==-1?
    <SendPhonesContext.Provider value={{phonesList, setPhonesList, params, setParams}}>
      <ToolBar />
    </SendPhonesContext.Provider>:<div>Go away</div>
  );
}

export default App;
