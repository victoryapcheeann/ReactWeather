var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div>
      <h2>Nav Component</h2>
      <IndexLink to = "/" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to = "/About" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>About</Link>
      <Link to = "/Example" activeClassName = "Active" activeStyle = {{fontWeight: 'bold'}}>Example</Link>
    </div>
  );
}

module.exports = Nav;
