
import './App.css';
import Upper from './components/Upper';
import Text from './components/Text';
import Alert from './components/Alert';
import React,{useState} from 'react'


function App() {
  const[Mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(messege,type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark mode is enabled","success");
      document.title="Textutiles:Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode is enabled","success");
      document.title="Textutiles:Light Mode"
    }
  }
  return (
  <>
   <Upper title="Textutils1" abouttext="About us" Mode={Mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Text showAlert={showAlert} heading="Enter the Text to Analyze below:" Mode={Mode} />
   
   
   </div>
</>
  );
}

export default App;
