import React from "react";
import SearchBox from "./SearchBox/SearchBoxComponent";
import DropDownSelect from "./DropDownSelect/DropDownSelect";
import { ListWithTransformation } from "./ListComponent/BaseList";

/***********

    To make all components reusable again, we need to move the logic back to the [.. withTransformProps] HoC. 
    To achieve this, we need to figure out how to use the [...withTransformProps]
    and [...withSimpleState] HoCs with the [...base component] at the same time and 
    allow the [...renderDisplayList] to only be responsible for the presentation again.
    We can achieve this behavior using &&&& composition $$$$$.


*************/

/*
  *@this component is responsible for logic only 
  *@it has state functionality pass down to Base Component
*/
const withSimpleState = TransformedBaseComponent => {
  return class WithSimpleState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sortBy: "sortASC",
        value: ""
      };
      this.searchText = this.searchText.bind(this);
      this.sortBy = this.sortBy.bind(this);
    }
    searchText(value) {
      this.setState({
        sortBy: "search",
        value: value.toLowerCase()
      });
    }
    sortBy(sortValue) {
      this.setState({
        sortBy: sortValue,
        value: ""
      });
    }
    render() {
      return (
        <div>
          <SearchBox eventHandler={this.searchText} />
          <DropDownSelect eventHandler={this.sortBy} />
          <TransformedBaseComponent
            {...this.props}
            letterSearch={this.state.value}
            filter={this.state.sortBy}
          />
        </div>
      );
    }
  };
};

/****
 TOP HOC component that holds logic for state ,  number in stack: 1
 U need to export it to top HOC , this component will take our FILTERED COMPONEMT and it get exported for rendering
***/

/*
  *@Our state component needs our Base compoenent to be passed with the filters applied to it\
  *@
*/
const FilteredListSearch = withSimpleState(ListWithTransformation);

export default FilteredListSearch;
