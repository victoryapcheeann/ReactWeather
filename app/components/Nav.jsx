var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet ready!');
  },

  render:function () {
    return(
    <div className = "top-bar">
      <div className = "top-bar-left">
        <ul className = "menu">
          <li className = "menu-text">Victor Weather App</li>
          <li>
            <IndexLink to = "/" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to = "/About" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to = "/Example" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>Example</Link>
          </li>
        </ul>
      </div>
      <div className = "top-bar-right">
        <form onSubmit = {this.onSearch}>
          <ul className = "menu">
            <li>
              <input type = "search" placeholder = "Search Weather"/>
            </li>
            <li>
              <input type = "submit" className= "button" value = "Get Weather"/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
  }
});

module.exports = Nav;
