import {Component} from "react";

class App extends Component {
  componentDidMount() {
    let path_origin =window.location.pathname
    let replace_domain = process.env.url;
    let new_url = replace_domain+path_origin;
    window.location.replace(new_url);
  }

  render() {
    return null;
  }
}
export default App;
