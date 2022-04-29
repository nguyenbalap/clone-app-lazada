/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'globalthis/implementation';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async getMovies() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      this.setState({data: json.movies});
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getMovies();
  }
  render() {
    console.log(this.state);
    return <Text>Lap</Text>;
  }
}
export default Fetch;
