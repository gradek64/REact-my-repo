import React from "react";
import TableComp from "./TableComp";

const Wrapper = Component => {
  class SearchTable extends React.Component {
    state = {
      filterData: this.props.data
    };

    handleOnChange = e => {
      const { value } = e.target;
      const filterData = this.props.data.filter(
        ({ firstname, lastname, age }) => {
          return (
            firstname.toLowerCase().includes(value.toLowerCase()) ||
            lastname.toLowerCase().includes(value.toLowerCase()) ||
            String(age).includes(value)
          );
        }
      );

      this.setState({ filterData });
    };
    render() {
      const { filterData } = this.state;
      return (
        <div>
          <div style={{ backgroundColor: "brown" }}>
            <input onChange={this.handleOnChange} />
          </div>
          <div>
            <Component data={filterData} />
          </div>
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <SearchTable {...props} forwardedRef={ref} />;
  });
};

export default Wrapper(TableComp);
