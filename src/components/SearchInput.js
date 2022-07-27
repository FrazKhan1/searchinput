import React from "react";

class SearchInput extends React.Component{
   render(){
    function onchange(event){
        console.log(event.target.value);
    }
    function onsubmit(event){
        event.preventDefault();
        console.log(event.target.value)
    }
    return(
        <div className="container  mt-5">
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Search" onChange={onchange} />
                </div>  
            </form>
        </div>
    )
   }
}

export default SearchInput;