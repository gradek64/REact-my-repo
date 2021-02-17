import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';



const ExpenseListFilters = (props) => {
const { filters , setTextFilter, sortByDate, sortByAmount } = props;

return (
    <div>
      <input 
      type='text' 
      value={filters.text} 
      onChange={ (e)=>{ setTextFilter(e.target.value); 
      }}/>
      <select 
      onChange={
        (e)=>{ 
            eval(e.target.value)(); 
        }}>
        <option value='sortByDate' >Date</option>
        <option value='sortByAmount' >Amount</option>
      </select>
    </div>
)};

const mapStateToProps = (state) => (
    { filters:state.filters }
  )

export default connect(mapStateToProps,{ setTextFilter, sortByDate, sortByAmount })(ExpenseListFilters);

