import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// custom;
import SearchBox from '../functional/SearchBox';
import './search-auto-suggestions.scss';
/*
  *@ToggleState is class componet that holds only logic and uses
  *@props.render method to exposed its renderMethod and toglle state
  *@SimpleButton is extending ToggleState (using its logic) and then whole thing (ToggleState and Simple button)
  *@is wrapped in ToggleSimpleButton functional component that is expoerted outside and takes props for SingleButton
*/
class SearchAutoSuggestion extends React.Component {
  /* eslint-disable no-lone-blocks */

  state = {
    suggestions: null,
  }

  suggestionsListRef = React.createRef();

  currentItemIndex = 0

  resetList = () => {
    console.log('cleaing');
    this.setState({ suggestions: null });
    this.currentItemIndex = 0;
  }

  componentDidMount = () => {
    document.addEventListener('click', this.resetList);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.resetList);
  }

  removeActiveClass = (e) => {
    const suggestionItems = this.suggestionsListRef.current.getElementsByTagName('li');
    Array.from(suggestionItems).forEach(node => node.classList.remove('autocomplete-active'));
    if (e) {
      const { searchBoxRef } = this.props;
      searchBoxRef.current.value = e.target.innerHTML;
    }
  }

  /* eslint-enable */
  arrowDownUpHandler = (e) => {
    const suggestionItems = this.suggestionsListRef.current
      ? this.suggestionsListRef.current.getElementsByTagName('li') : {};
    const { searchBoxRef } = this.props;
    // on arrow up;
    if (e.key === 'ArrowUp') {
      // remove previous;
      this.removeActiveClass();
      this.currentItemIndex > 0 ? this.currentItemIndex -= 1 : this.currentItemIndex;
      if (suggestionItems[this.currentItemIndex]) {
        suggestionItems[this.currentItemIndex].classList.add('autocomplete-active');
        searchBoxRef.current.value = suggestionItems[this.currentItemIndex].innerHTML;
      }
    }
    // on arrow down;
    if (e.key === 'ArrowDown') {
      // remove previous;
      this.removeActiveClass();
      if (suggestionItems[this.currentItemIndex]) {
        suggestionItems[this.currentItemIndex].classList.add('autocomplete-active');
        searchBoxRef.current.value = suggestionItems[this.currentItemIndex].innerHTML;
      }
      this.currentItemIndex < suggestionItems.length - 1 ? this.currentItemIndex += 1 : this.currentItemIndex;
    }

    if (e.key === 'Enter' || e.key === 'Escape') {
      this.setState({ suggestions: null });
      this.currentItemIndex = 0;
    }
  }


  onInputHandler = (e) => {
    const triggerSearchPhrase = e.target.value;
    // if it is empty then remove the suggestions
    if (triggerSearchPhrase === '') { this.resetList(); return; }
    /* axios
      .get('http://autosug.ebaystatic.com/autosug',
        {
          headers: { 'Access-Control-Allow-Origin': '*' },
          params:
        {
          kwd: triggerSearchPhrase,
          _jgr: 1,
          sId: 3,
          _ch: 0,
          callback: 'showResults',
        },
        })
      .then((res) => {
        const { data } = res;
        const [, result] = data.match(/showResults\((.*)\)/);
        const callBackRes = JSON.parse(result);
        const suggestions = callBackRes.res ? callBackRes.res.sug : null;
        this.setState({ suggestions });
      }); */
    // harcoded value for search
    const suggestions = ['bike', 'bike lock', 'bike lights',
      'bike pump', 'mountain bike', 'bike trailer', 'bike rack',
      'bike cover', 'electric bike', 'bike bell'];
    this.setState({ suggestions });
  }


  /* toggleMethod is exposed from ToggleState class and allows to as well as toggle state
true or false , that could be used in other componenst as Simple button */

  render() {
    const { submitHandler, searchBoxRef, classSent } = this.props;
    const { suggestions } = this.state;
    return (

      <React.Fragment>
        {/* Toggle State logic is not needed since we show and hide suggestions based on input characters */}
        {/* <ToggleState
        renderComp={(toggleMethod, toggle) => ( */}
        {/* initial thought to have overlay to register click but prevernts any other action on the page */}
        {/* eslint-disable max-len */}
        {/* suggestions ? <ClickAwayListener clickAway={() => { this.setState({ suggestions: null }); }} /> : null */}
        <form className={`search-auto-suggetions ${classSent}`} autoComplete="off">
          <SearchBox
            id="results"
            className="custom-search"
            submitHandler={submitHandler}
            onFucusHandler={this.resetList}
            onInputHandler={this.onInputHandler}
            arrowDownUpHandler={this.arrowDownUpHandler}
            ref={searchBoxRef}
          />
          {suggestions ? (
            <ul
              role="presentation"
              // required by airbnb but div in this case can not be in focus
              onKeyPress={() => {}}
              className="autocomplete-items"
              ref={this.suggestionsListRef}
            >
              {suggestions.map((value, i) => (
                <li
                  key={`suggestions${i}`}
                  role="presentation"
                  className="list-item"
                  onMouseEnter={this.removeActiveClass}
                  onClick={() => { submitHandler(); this.resetList(); }}
                >
                  {value}
                </li>))}

            </ul>) : null}
        </form>
      </React.Fragment>
    );
  }
}

SearchAutoSuggestion.propTypes = {
  classSent: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
  searchBoxRef: PropTypes.instanceOf(Object).isRequired,
};
SearchAutoSuggestion.defaultProps = {
  classSent: '',
};
export default SearchAutoSuggestion;
