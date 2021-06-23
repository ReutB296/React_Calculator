import './App.css';
import {useState} from 'react';
import Screen from './screen.js';
import Button from './button.js';



function App() {

  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);


 

  const handleButtonPress = (content) => {
    const num = parseFloat(value);

    if (content === "C"){
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content.includes("+") || content.includes("-") || content.includes("*") || content.includes("/")){
      if (operator !== null){
        if (operator === "+"){
          setMemory(memory + parseFloat(value));
        }else{
              if (operator === "-"){
                setMemory(memory - parseFloat(value));
                }else{
                  if (operator === "*"){
                    setMemory(memory * parseFloat(value));
                  }else{
                    setMemory(memory / parseFloat(value));
            }    }  }
      }else{
        setMemory(num);
      }
    
      setValue("0");
      setOperator(content);
      return;
    }


    if (content === "="){
      if (!operator){
        return;
      }
      if (operator === "+"){
        setValue((memory + parseFloat(value)).toString());
      }else{
            if (operator === "-"){
              setValue((memory - parseFloat(value)).toString());
              }else{
                if (operator === "*"){
                  setValue((memory * parseFloat(value)).toString());
                }else{
                  setValue((memory / parseFloat(value)).toString());
          }    }  }
      
      setMemory(null);
      setOperator(null);
      return;
    }

  setValue(parseFloat(num + content).toString());

}

  return (
    <div className="App">
        <Screen value={value}/>
        <Button content={"1"} onButtonClick={handleButtonPress}/>
        <Button content={"2"} onButtonClick={handleButtonPress}/>
        <Button content={"3"} onButtonClick={handleButtonPress}/>
        <Button content={"+"} onButtonClick={handleButtonPress}/>
        <Button content={"4"} onButtonClick={handleButtonPress}/>
        <Button content={"5"} onButtonClick={handleButtonPress}/>
        <Button content={"6"} onButtonClick={handleButtonPress}/>
        <Button content={"-"} onButtonClick={handleButtonPress}/>
        <Button content={"7"} onButtonClick={handleButtonPress}/>
        <Button content={"8"} onButtonClick={handleButtonPress}/>
        <Button content={"9"} onButtonClick={handleButtonPress}/>
        <Button content={"*"} onButtonClick={handleButtonPress}/>
        <Button content={"C"} onButtonClick={handleButtonPress}/>
        <Button content={"0"} onButtonClick={handleButtonPress}/>
        <Button content={"="} onButtonClick={handleButtonPress}/>
        <Button content={"/"} onButtonClick={handleButtonPress}/>
    </div>
  );
}

export default App;
