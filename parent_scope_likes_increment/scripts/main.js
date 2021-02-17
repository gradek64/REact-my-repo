  import PropTypes from 'prop-types';
  import React from 'react';
  import ReactDOM from 'react-dom';

  /*3 Likes Button*/


    class LikesButton extends React.Component {
        constructor(props){
          super(props);
         
          const pocket = 'pocket'+this.props.id;
          if(localStorage.getItem('Likes_in_LS') ){
            this.savedLikes = JSON.parse( localStorage.getItem('Likes_in_LS'));
          }

          //update 
          this.state = {
            likes:this.getLikesObject( this.props.id )[pocket] ? this.getLikesObject( this.props.id )[pocket]:0
          };

      }

      getLikesObject(){
        let savedLikes = {};
        if(localStorage.getItem('Likes_in_LS') ){
            savedLikes = JSON.parse( localStorage.getItem('Likes_in_LS'));
        } 
        return savedLikes;
      }

      clickMe(id) {
         return (e) => {
          this.setState({likes:this.state.likes=this.state.likes+1});
          let localStorageObject = this.getLikesObject();
          localStorageObject['pocket'+id]=this.state.likes;
          localStorage.setItem('Likes_in_LS',JSON.stringify(localStorageObject));

          //callback to parent
          this.props.callbackParentLikesButton(this.state.likes);
        }
      }

      render(){
        return <button onClick={this.clickMe(this.props.id)}>likes {this.state.likes}</button>
      }
          
    }
    LikesButton.propTypes = {
         id:PropTypes.number.isRequired,
         callbackParentLikesButton:PropTypes.func,
      };


      /*2 Panel*/


    class Panel extends React.Component{

      onChildChangedPanel(newState) {
        //console.log(newState);
        this.props.callbackParentPanel(newState);
      }

      render(){
        return (
          <div className="panel-group">
              <h2> panel layer 2</h2>
             <LikesButton id={this.props.id} callbackParentLikesButton={(newState) => this.onChildChangedPanel(newState)}/>
          </div>);
      }
    }
    Panel.propTypes = {
         id:PropTypes.number.isRequired,
         callbackParentPanel:PropTypes.func,
      };


    //WARNING: React only does a shallow merge of the default props and the actual props, 
    //i.e. nested default props are overridden instead of merged. This is by design.
    Panel.defaultProps = {
            title: "title",
            author: "anon",
            tags: "tags",
            date_taken: "default",
            media: {m: ""}
    };

  

    const allLikesLS = () => JSON.parse(localStorage.getItem('Likes_in_LS')) 
        ? JSON.parse( localStorage.getItem('Likes_in_LS')) : {'pocket':0};

    let allLikesCalculatedOut = Object.keys(allLikesLS())
      .reduce( (sum,key)=> { return sum + allLikesLS()[key] }, 0);

    /* 1 Wrapper Pannel*/

    class WrapperPanel extends React.Component {

      constructor(props){
        super(props);
        this.state = { current: false };
        this.allLikesCalculated = 0;
      }

      onChildChanged(newState) {
        this.allLikesCalculated++;
        console.log('WrapperPanel', newState);
        this.setState({ current: newState });
      }

      render(){
        return (
            <div>
               <h3>all likes:{allLikesCalculatedOut+this.allLikesCalculated}</h3>
               { [2,3,4].map((item,i) => <Panel key={i} id={i} callbackParentPanel={(newState) => this.onChildChanged(newState)}/>)}
            </div>
          )
      }

    }
           

    ReactDOM.render(
            <WrapperPanel />, document.getElementById('app')
    );


