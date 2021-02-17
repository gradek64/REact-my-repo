const sortASC = (array, property) => {
  return array.sort(function(a, b) {
    var x, y;
    if (property) {
      (x = a[property].toUpperCase()), (y = b[property].toUpperCase());
    } else {
      (x = a.toUpperCase()), (y = b.toUpperCase());
    }

    if (x > y) {
      return 1; //y will be before x;
    }
    if (x < y) {
      return -1; //x will be before y;
    }

    //default x = y ;
    return 0;
  });
};

const sortDESC = (array, property) => {
  return array.sort(function(a, b) {
    var x, y;
    if (property) {
      (x = a[property].toUpperCase()), (y = b[property].toUpperCase());
    } else {
      (x = a.toUpperCase()), (y = b.toUpperCase());
    }

    if (x > y) {
      return -1; //x will be before x;
    }
    if (x < y) {
      return 1; //y will be before x;
    }

    //default x = y ;
    return 0;
  });
};

export { sortASC, sortDESC };
