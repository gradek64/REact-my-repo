import React from 'react';
import PropTypes from 'prop-types';
import PureList from './DisplayList';
import { manipulateListFns } from './manipulateListData';

/*
  *@this Component is resposible of extending baseList component but
  it will transform/change props according to the actionType given from the parent Component
  as filering,sorting etc..
*/

/*
  *@There is 2 wasy of making your EnhancedCompoent (component that changes is baseComponent)
  *@1) wrap in a function that passes the baseCompoent into Enhanced compoent and return BaseCompoent
  *@1) use  baseCompoent directly as return value as below
*/

// const withTransformProps = helperFunc => BaseComponent => baseProps => {
const withTransformProps = (helperFunc) => {
  const withTransformPropsComp = (props) => {
    /** ** props is a object defined in propTypes
    * */
    console.log('props of ListWithTransformation:', props);

    /*
      pure list takes only {list:[]} but we do not validate that here;
      It is validated in <PureList list=[] />
    */
    const transformedProps = helperFunc(props);
    return <PureList {...transformedProps} />;
  };

  withTransformPropsComp.propTypes = {
    list: PropTypes.instanceOf(Array).isRequired,
    letterSearch: PropTypes.string,
    sortBy: PropTypes.string,
    filter: PropTypes.string,
    actionType: PropTypes.string,
  };

  withTransformPropsComp.defaultProps = {
    letterSearch: '',
    sortBy: '',
    filter: '',
    actionType: '',
  };

  return withTransformPropsComp;
};
// const ListWithTransformation = withTransformProps(manipulateListFns)(RenderDisplayList);
const ListWithTransformation = withTransformProps(manipulateListFns);

export default ListWithTransformation;
