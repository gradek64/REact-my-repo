import React from 'react';


/*
  *@HOC componemt with State;
  *@
*/

class withFilterProps extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:props.default};
    }
    updateState(value){
        this.setState({value});
    }
    render(){
        const filteredList = list.filter(({side:orig})=>orig===this.state.value);
        return <BaseComponent list={filteredList} action={updateState} />;
    }
}


const renderDisplayList = ({ list, action }) =>
    <div>
        <button onClick={()=>{action;}} />
        {list.map(char =>
            <div key={char.name}>
                <div>Character: {char.name}</div>
                <div>Side: {char.side}</div>
            </div>
        )}
    </div>;


/*
  *@the are 2 ways to call react Component 
  *@rember component always return JSX
*/
/*
  *@either by calling <component props={props} />
  *@or by calling a function that return component as (props) => <component props={props} />
*/
const HOC = (props) => withFilterProps(renderDisplayList)(props);


export default HOC;
