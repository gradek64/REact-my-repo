import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
      console.log('repos loaded in server', repos);
    } else {
      repos = this.props.staticContext.data;
      console.log('repos loaded in client', repos);
    }

    console.log('repos is defined', repos);

    this.state = {
      repos,
      loading: repos ? false : true
    };

    this.fetchRepos = this.fetchRepos.bind(this);
  }
  /*
      this is like extra precontion if we dont have data in state
      then go and fetch it;
  */
  componentDidMount() {
    //if repo hasnt been fetch from the server render it here
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id);
      console.log('componentDidMount fetch repo in client');
    }
    console.log('repo state already loaded in server', !!this.state.repos);
  }
  //what if the route changes?
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  //route has changed fetch data for the route only call when routes changed
  fetchRepos(lang) {
    this.setState(() => ({
      loading: true
    }));

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
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
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
