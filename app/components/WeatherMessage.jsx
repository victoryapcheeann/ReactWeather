var React = require('react');

var WeatherMessage = ({temp, location}) => {

  return (
    <h3 className = 'text-center'>It is {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;

// var WeatherMessage = React.createClass({
//   render:function() {
//     var {temp, location} = this.props;
//
//     return (
//       <h3>It is {temp} in {location}</h3>
//     );
//   }
// });
