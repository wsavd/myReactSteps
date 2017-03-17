/*var HotelCard = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is form a component!</p>
      </div>
    );
  }
});
*/
var HotelApp = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>This is {this.props.atrib2}!!!</p>
      </div>
    );
  }
});

ReactDOM.render(
  <HotelApp name="World" atrib2="второй атрибут" />,
  document.getElementById('root')
);
