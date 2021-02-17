import React from 'react';
import PropTypes from 'prop-types';
import EnhancedList from '../functional/ListComponents/EnhancedList';
import Simplebutton from '../functional/Simplebutton';
import ToogleButton from '../functional/Togglebutton';
import DropDown from '../functional/DropDown';
import SearchBox from '../functional/SearchBox';

/** *********

    This component is like a wrapper it holds all partials componenets as searchBox etc (functionality components)
    the only reason is a class component cause it needs logic for setting filtering, searching etc
    U need to specify handlers here for SearchCompoennt, Sorting, filtering basically anything dynamic user changes to
    the table, If user wasnt interacing with it then it should be functional component not a class.

************ */
const styles = {
  list: {
    listStyleType: 'none',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
  },
};
const withSimpleState = classes => (EnhancedListComp) => {
  {
    /* the class below is needed for table logic as search, filters etc... */
  }
  class TableStates extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sortBy: 'sortASC',
        action: 'sortBy',
        searchValue: '',
        filter: '',
      };
      this.searchText = this.searchText.bind(this);
      this.filterSide = this.filterSide.bind(this);
      this.sortBy = this.sortBy.bind(this);
    }
    searchText(searchValue) {
      this.setState(state => ({
        ...state,
        action: 'search',
        searchValue: searchValue.toLowerCase(),
      }));
    }
    filterSide(filterby) {
      this.setState(state => ({
        ...state,
        filter: filterby,
        action: 'filter',
      }));
    }
    sortBy(sortValue) {
      this.setState(state => ({
        ...state,
        sortBy: sortValue,
        action: 'sortBy',
      }));
    }
    render() {
      return (
        <div>
          <div className="tableHeader">
            <h1>active filter: {this.state.filter === '' ? 'none' : this.state.filter}</h1>
            <h1>active sortBy: {this.state.sortBy}</h1>
            <SearchBox placeholder="filter" eventHandler={this.searchText} />
            <Simplebutton
              eventHandler={this.filterSide}
              value="dark"
              label="filter DARK side"
            />
            <Simplebutton
              eventHandler={this.filterSide}
              value="light"
              label="filter LIGHT side"
            />
            <ToogleButton
              action={this.sortBy}
              label="sort"
              toggleLabels={['ASC', 'DESC']}
              values={['sortASC', 'sortDESC']}
            />
            <div
              style={{
                width: '10%',
                display: 'inline-block',
                backgroundColor: 'white',
              }}
            >
              {/* DropDown is composed with Togglebutton that
                requires eventHandler so U need to specify an empty method */}
              <DropDown label="DropDown">
                <ul style={classes.list}>
                  <li>
                    <Simplebutton
                      eventHandler={this.sortBy}
                      value="sortDESC"
                      label="sortDESC"
                    />
                  </li>
                  <li>
                    {' '}
                    <Simplebutton
                      eventHandler={this.sortBy}
                      value="sortASC"
                      label="sortASC"
                    />
                  </li>
                </ul>
              </DropDown>
            </div>
          </div>
          <div>
            <EnhancedListComp
              {...this.props}
              letterSearch={this.state.searchValue}
              sortBy={this.state.sortBy}
              filter={this.state.filter}
              actionType={this.state.action}
            />
          </div>
        </div>
      );
    }
  }

  TableStates.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
  };
  return TableStates;
};

const FilteredListSearch = withSimpleState(styles)(EnhancedList);

export default FilteredListSearch;
