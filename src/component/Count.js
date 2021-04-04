import React from 'react';

class Count extends React.Component {

  state = { 
    count: 0,
    input: '' 
  };

  handleAddCount = (input) => (
    this.setState( prevState => (
      { count: prevState.count + +input }
    ) )
  );  
  
  handleInputChage = (event) => (
    this.setState( { input: event.target.value } )
  );

  render() {
    const { count, input } = this.state;
    return (
      <div>
        <input name="input" type="number" value={input}
               onChange={ this.handleInputChage } 
        />
        <button onClick={ () => this.handleAddCount(input) } >
          Count: {count}
        </button>
      </div>
    );
  };
};
  
  export default Count;
  
  
  
  {/* <button onClick={this.handleAddCount(inputValue)} > */}