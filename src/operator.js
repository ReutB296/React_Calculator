export default operator;


    function operator({ value, onOperatorClick}){
        return(
            <button onClick= {() => {
                onOperatorClick[0](value);
                onOperatorClick[1](value)
            }}>
                {value}
            </button>
          
        )
    
}