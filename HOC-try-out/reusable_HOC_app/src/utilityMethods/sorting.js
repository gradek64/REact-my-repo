const sortASC = (array, property) =>
  array.sort((a, b) => {
    let x;
    let y;

    if (property) {
      x = a[property].toString().toUpperCase();
      y = b[property].toString().toUpperCase();
    } else {
      x = a.toString().toUpperCase();
      y = b.toString().toUpperCase();
    }

    if (x > y) {
      return 1; // y will be before x;
    }
    if (x < y) {
      return -1; // x will be before y;
    }

    // default x = y ;
    return 0;
  });

const sortDESC = (array, property) =>
  array.sort((a, b) => {
    let x;
    let y;

    if (property) {
      x = a[property].toString().toUpperCase();
      y = b[property].toString().toUpperCase();
    } else {
      x = a.toString().toUpperCase();
      y = b.toString().toUpperCase();
    }

    if (x > y) {
      return -1; // x will be before x;
    }
    if (x < y) {
      return 1; // y will be before x;
    }

    // default x = y ;
    return 0;
  });

export { sortASC, sortDESC };
