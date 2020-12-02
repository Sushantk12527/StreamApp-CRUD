import React from "react";
import {connect} from "react-redux"
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history"
import {fetchStream,deleteStream} from "../../actions"

class StreamDelete extends React.Component {


componentDidMount(){
this.props.fetchStream(this.props.match.params.id)

}



renderAction(){
  const {id}=this.props.match.params
return <React.Fragment>
    <button onClick={()=>{this.props.deleteStream(id)}} className="ui button negative">Delete</button>
    <Link to="/" className="ui button">Cancel</Link>
  </React.Fragment>
}  

renderContent(){
  if(!this.props.stream){
return "Are you sure you want to delete this stream ?"
  }
  else{
    return `Are you sure you want to delete this stream with the title: ${this.props.stream.title} ?`
  }
}



render(){

  return <Modal 
  title="Delete Stream"
  content={this.renderContent()}
  action={this.renderAction()}
  onDismiss={() => history.push("/")}
  />
 
}
 
}

const mapStatetoProps=(state,ownProps)=>{
  return{stream:state.streams[ownProps.match.params.id] }
}

export default connect(mapStatetoProps,{fetchStream,deleteStream})(StreamDelete);
