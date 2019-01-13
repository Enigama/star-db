import React,{Component} from 'react'

export default class ErrorButton extends Component{
  state = {
    renderError: false
  }

  render(){
    console.log('render()');
    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return(
      <button
        className='btn btn-denger btn-lg'
        onClick={() => this.setState({renderError: true})}
      >Throw Error</button>
    )
  }
}
