import './App.css';
import React, { Component } from 'react';
import Navigator from "./components/Navigator";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Control from "./components/Control";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject:{title:"WEB", sub:"world wide web"},
      welcome:{title:"Welcome", desc:"Hellow react"},
      contents:[
        {id:1, title:"HTML", desc:"htmlhtmlhtml"},
        {id:2, title:"CSS", desc:"csssssssssssss"},
        {id:3, title:"JavaScrisps", desc:"jsjsjsjsjsjsjs"}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:"welcome"});
          }.bind(this)}
        >
        </Subject>
        <Navigator
          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
              });
            }.bind(this)}
            data={this.state.contents}
          ></Navigator>

        

        <Control onChangeMode={function (_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
