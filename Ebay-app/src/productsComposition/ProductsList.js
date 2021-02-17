import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// custom
import { fetchProducts } from '../redux/actions/products_actions';
import api from '../services/apiService';
import TopSearchBox from './TopSearchBox';


class ProductsList extends React.Component {
  state ={ searchResults: null }

  componentDidMount() {
    // call my api service for browser API
    /* api.get('/item/v1|153228438937|0').then((data) => {
      console.log('datass', data);
    }); */
    /* api.get('/item_summary/search/', { q: 'iphone', limit: '3' }).then((data) => {
      console.log('data API', data);
    }); */
    // fetch products in redux middleware redux-thunk
    // this.props.dispatch(fetchProducts());
  }


  populateSearchResults = () => {
    const searchResult = this.searchBoxRef.current.value;

    // call api with search item result
    api.get('/item_summary/search/', { q: searchResult, limit: '3' }).then((data) => {
      console.log('data API', data);
      const { itemSummaries } = data.data;

      console.log('itemSummaries', itemSummaries);
      this.setState({ searchResults: itemSummaries }, () => {
        console.log(this.state);
      });
    });
  }

  render() {
    const { error, loading, products } = this.props;
    const { searchResults } = this.state;

    console.log(this.state);


    if (error) {
      return (
        <div>
Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <div>
          {/* U need java script input refference created here to get input value */}
          <TopSearchBox
            populateSearchResults={this.populateSearchResults}
            searchBoxRef={this.searchBoxRef = React.createRef()}
          />
          <ul>
            {products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
          <p>
this is to test clickaway
            <a href="#">Away</a>
          </p>
        </div>
        {searchResults ? searchResults.map(({ image, price }, i) => (
          <Link to={`/item/${i}`} key={`result${i}`}>
            <div>
              <img width="100" height="auto" src={image.imageUrl} />
              <span>
price:
                {price.value}
              </span>
            </div>
          </Link>
        )) : null}
        <div />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(ProductsList);
