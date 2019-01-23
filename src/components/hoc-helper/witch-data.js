import React, {Component} from "react";
import Spinner from "../spinner";

const  withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: false,
      error: false
    };

    componentDidMount() {
     this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.props.getData()
        .then( data => {
          this.setState({
            data: data,
            loading: true,
            error: false
          })
        })
        .catch( reject => {
          this.setState({
            loading: false,
            error: true
          })
        })
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <Spinner/>
      }

      if (error) {
        return;
      }

      return <View {...this.props} data={data}/>
    }
  }
};
export default withData;