import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.fetchRepos = this.fetchRepos.bind(this);
    this.state = {
      loading: true,
      repos: null
    };
  }
  /*
      this is like extra precontion if we dont have data in state
      then go and fetch it;
  */
  componentDidMount() {
    //if repo hasnt been fetch from the server render it here
    console.log('ssssss', this.props.match);
    this.fetchRepos(this.props.match.params.id);
  }
  //what if the route changes?
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  //route has changed fetch data for the route only call when routes changed
  fetchRepos(lang) {
    this.props.fetchInitialData(lang).then(repos =>
      this.setState(() => ({
        repos,
        loading: false
      }))
    );
  }
  render() {
    const { loading, repos } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {repos &&
          repos.map(({ name, owner, stargazers_count, html_url }) => (
            <li key={name} style={{ margin: 30 }}>
              <ul>
                <li>
                  <a href={html_url}>{name}</a>
                </li>
                <li>@{owner.login}</li>
                <li>{stargazers_count} stars</li>
              </ul>
            </li>
          ))}
      </ul>
    );
  }
}

export default Grid;
