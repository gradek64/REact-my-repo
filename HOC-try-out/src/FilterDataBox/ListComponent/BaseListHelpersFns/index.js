/*
  *@this is our logic for filtering function 
  *@as name implies it will filter our data based on state
  *@ from its wrapper it needs list, state, and click event Handler
*/

/****
 FilteredList FUNCTION number in stack: 2
 list and state Value given i\n props;
***/

let updatedList;
import * as fnHelpers from "../../helpers";
const manipulateListFns = ({ list, letterSearch, filter }) => {
  switch (filter) {
    case "sortASC":
      if (updatedList) {
        list = updatedList;
      }
      return {
        list: fnHelpers.sortASC(list, "name")
      };
    case "sortDESC":
      if (updatedList) {
        list = updatedList;
      }
      return {
        list: fnHelpers.sortDESC(list, "name")
      };
    case "search":
      updatedList = list.filter(char =>
        char.name
          .concat(char.side)
          .toLowerCase()
          .includes(letterSearch)
      );
      return {
        list: updatedList
      };
  }
};

export { manipulateListFns };
