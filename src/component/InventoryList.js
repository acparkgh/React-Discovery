import React from 'react';

class InventoryList extends React.Component {

  state = {
    box: 5,
    tape: 10,
    pencil: 15,
    eraser: 20,
  }

  handleInputChange = (event) => {
    let item = event.target.name;
    let count = event.target.value;
    this.setState({ [item]: count })
  }

  render() {
    return (
      <form>
        <label>
          box:
          <input name="box" type="number" value={this.state.box}
                 onChange={this.handleInputChange} />
        </label>
        <br /><br />
        <label>
          tape:
          <input name="tape" type="number" value={this.state.tape}
                 onChange={this.handleInputChange} />
        </label>
        <br /><br />        
        <label>
          pencil:
          <input name="pencil" type="number" value={this.state.pencil}
                 onChange={this.handleInputChange} />
        </label>
        <br /><br />        
        <label>
          eraser:
          <input name="eraser" type="number" value={this.state.eraser}
                 onChange={this.handleInputChange} />
        </label>
        <br /><br />  
    </form>
    )
  }

}

export default InventoryList;