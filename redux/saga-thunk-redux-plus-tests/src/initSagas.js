import * as sagas from "./sagas";

//=========================================================
//
// init sagas is a helper function that takes sagaMiddlware
// and then run registered sagas sagaMiddleware.run(saga);
// to regiester multiple sagas then we run them in the forEach loop
//
//=========================================================

/**
 * Example Usage:
 *
 * @ sagaMiddleware.run(saga); will start saga watcher for action being dispatch
 * @
 */
export const initSagas = (sagaMiddleware) => {
  Object.values(sagas).forEach((saga) => {
    //console.log("saga", saga);

    //!!!!for some reason this bellow works as well!!! but not sure how ;0
    //sagaMiddleware.run.bind(sagaMiddleware);

    sagaMiddleware.run(saga);
  });
};
