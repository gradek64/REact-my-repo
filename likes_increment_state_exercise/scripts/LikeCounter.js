import PropTypes from 'prop-types';
import React from 'react';


export class LikesButton extends React.Component {
  constructor(props) {
    super(props);

    const pocket = `pocket${this.props.id}`;
    if (localStorage.getItem('Likes_in_LS')) {
      this.savedLikes = JSON.parse(localStorage.getItem('Likes_in_LS'));
    }

    // update
    /* this.state = {
      likes: this.getLikesObject(this.props.id)[pocket] ?
        this.getLikesObject(this.props.id)[pocket] : 0
    }; */
    this.state = {
      likes: this.getLikesObject(this.props.id)[pocket] ?
        this.getLikesObject(this.props.id)[pocket] : 0
    };
  }

  getLikesObject() {
    let savedLikes = {};
    if (localStorage.getItem('Likes_in_LS')) {
      savedLikes = JSON.parse(localStorage.getItem('Likes_in_LS'));
    }
    return savedLikes;
  }

  clickMe(id) {
    return () => {
      const localStorageObject = this.getLikesObject();
      localStorageObject[`pocket${id}`] = this.state.likes;
      localStorage.setItem('Likes_in_LS', JSON.stringify(localStorageObject));
      return this.setState({ likes: this.state.likes + 1 });
    };
  }

  render() {
    return (
      <div>
        <h1>view likes {this.state.likes}</h1>
        <button
          type="button"
          data-test="LikesButton-component"
          onClick={
            () =>
              this.setState({ likes: this.state.likes + 1 })
          }
        >update
        </button>
      </div>
    );
  }
}
LikesButton.propTypes = {
  id: PropTypes.number.isRequired,
};

class Panel extends React.Component {
  render() {
    return (
      <div className="panel-group">
        <LikesButton id={this.props.id} />
      </div>);
  }
}
Panel.propTypes = {
  id: PropTypes.number.isRequired,
};


// WARNING: React only does a shallow merge of the default props and the actual props,
// i.e. nested default props are overridden instead of merged. This is by design.
Panel.defaultProps = {
  title: 'title',
  author: 'anon',
  tags: 'tags',
  date_taken: 'default',
  media: { m: '' }
};

const listItems = [2, 3, 4].map((item, i) =>
  <Panel key={i} id={i} />);

const allLikesLS = () => (JSON.parse(localStorage.getItem('Likes_in_LS'))
  ? JSON.parse(localStorage.getItem('Likes_in_LS')) : { pocket: 0 });

const allLikesCalculated = Object.keys(allLikesLS())
  .reduce((sum, key) => sum + allLikesLS()[key], 0);


const LikeCounter = () => (
  <div>
    <h3>all likes:{allLikesCalculated}</h3>
    <div>{listItems}</div>
  </div>
);

export default LikeCounter;
