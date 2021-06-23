
import './button.css';
export default button;


function button({content, onButtonClick }){

    return(
        <button onClick= {() => onButtonClick(content)} >
            {content}
        </button>
      
    )

}




