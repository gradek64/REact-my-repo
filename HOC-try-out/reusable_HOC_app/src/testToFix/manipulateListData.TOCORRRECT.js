// method to test;
import { manipulateListFns } from '../../../functional/ListComponents/manipulateListData';
// 1 only list passed;
const ListTestData = {
  list: [
    { name: 'Greg', side: 'dark' },
    { name: 'Libby', side: 'dark' },
    { name: 'Kate', side: 'light' },
    { name: 'Mark', side: 'dark' },
    { name: 'Suzie', side: 'light' },
  ],
};
// 2: filter dark or side
const filterByDarkSideExpected =
{
  list: [
    { name: 'Greg', side: 'dark' },
    { name: 'Libby', side: 'dark' },
    { name: 'Mark', side: 'dark' },
  ],
};
const filterByLightSideExpected = {
  list:
         [{ name: 'Kate', side: 'light' },
           { name: 'Suzie', side: 'light' }],
};

/*
  *@our manipulateListFns mutates the data cause
  *@we want to search on filtered results so the sequeance of actions
  are important for example filter by Dark side and then order ASC on previous results;
*/

let listTransform;
test('it returns list if not action specified', () => {
  listTransform = manipulateListFns(ListTestData);
  // only list arg provided;
  expect(listTransform).toEqual(ListTestData);
});

// 2
let updatedList;
test('filters dark side or light side', () => {
  const listTransformLight = manipulateListFns({ action: 'filter', filter: 'light', ...ListTestData });
  listTransform = manipulateListFns({ action: 'filter', filter: 'dark', ...ListTestData });
  updatedList = listTransform;
  expect(listTransformLight).toEqual(filterByLightSideExpected);
  expect(listTransform).toEqual(filterByDarkSideExpected);
});

// 2
test('data is using previos list otherwise using orginal list', () => {
  const sortByProps = {
    action: 'sortBy', filter: '', letterSearch: '', sortBy: 'sortDESC',
  };
  // sort DESC previous list result;
  const previousListDESC = manipulateListFns({ ...sortByProps, ...listTransform });
  // updated list is used;
  expect(updatedList).toEqual(previousListDESC);
});

// 3: look for 'g' letter based on previous filterByDarkSideExpected;
test('search for leter "g" based on previous filterByDarkSideExpected', () => {
  const serachProps = {
    action: 'search', filter: '', letterSearch: 'g', sortBy: 'ASC',
  };
  const searchList = manipulateListFns({ ...serachProps, ...listTransform });
  listTransform = manipulateListFns({ action: 'filter', filter: 'dark', ...listTransform });

  const expectedInSearch = {
    list: [
      { name: 'Greg', side: 'dark' },
    ],
  };

  expect(searchList).toEqual(expectedInSearch);
});

// 4: sortBy DESC and ASC
test('filters dark side or light side', () => {
  const sortByASCList = manipulateListFns({
    action: 'sortBy', filter: '', sortBy: 'sortASC', ...ListTestData,
  });
  const sortByDESCList = manipulateListFns({
    action: 'sortBy', filter: '', sortBy: 'sortDESC', ...ListTestData,
  });
  listTransform = manipulateListFns({ action: 'filter', filter: 'dark', ...ListTestData });

  const expetedASCList = {
    list:
         [{ name: 'Mark', side: 'dark' },
           { name: 'Libby', side: 'dark' },
           { name: 'Greg', side: 'dark' }],
  };

  const expetedDESCList = {
    list:
         [{ name: 'Mark', side: 'dark' },
           { name: 'Libby', side: 'dark' },
           { name: 'Greg', side: 'dark' }],
  };

  expect(sortByASCList).toEqual(expetedASCList);
  expect(sortByDESCList).toEqual(expetedDESCList);
});

