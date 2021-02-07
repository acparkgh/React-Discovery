import React from 'react';

class Discovery extends React.Component {

  constructor() {
    super()
    this.state = {
      burgerIngredients: {
        bun: 0,
        meat: 0,
        lettuce: 0,
        onion: 0,
        cheese: 0,        
      },
      totalIngredientsCount: 0
    }
  }

  handleAddIngredients = (ingredient) => {
    const newIngredientCount = this.state.burgerIngredients[ingredient] + 1;
    const updatedBurgerIngredient = { ...this.state.burgerIngredients };
    updatedBurgerIngredient[ingredient] = newIngredientCount;

    this.setState({ burgerIngredients: updatedBurgerIngredient });

    this.handleTotalIngredients();
  }
  
  handleTotalIngredients = () => {
    const burgerIngredientsObject = { ...this.state.burgerIngredients }
    const ingredientsCountArray = Object.keys(burgerIngredientsObject).map(ingredient => {
      return burgerIngredientsObject[ingredient]
    });
    const updatedTotalIngredientsCount = ingredientsCountArray.reduce( (sum, item) => { return sum + item }, 0 )

    this.setState({ totalIngredientsCount: updatedTotalIngredientsCount })
  }
  
  render() {
    return (
      <div>
        <button name="bun" onClick={(event) => this.handleAddIngredients(event.target.name)} >Bun: {this.state.burgerIngredients.bun}</button>
        <button name="meat" onClick={(event) => this.handleAddIngredients(event.target.name)} >Meat: {this.state.burgerIngredients.meat}</button>
        <button name="lettuce" onClick={(event) => this.handleAddIngredients(event.target.name)} >lettuce: {this.state.burgerIngredients.lettuce}</button>
        <button name="onion" onClick={(event) => this.handleAddIngredients(event.target.name)} >onion: {this.state.burgerIngredients.onion}</button>
        <button name="cheese" onClick={(event) => this.handleAddIngredients(event.target.name)} >cheese: {this.state.burgerIngredients.cheese}</button>
        <h4>Total Burger Ingredients: {this.state.totalIngredientsCount}</h4>
      </div>
    )
  }
  
}

export default Discovery;




  // handleTotalIngredients = (burgerIngredients) => {
  //   const ingredientsArray = Object.keys(burgerIngredients).map(ingredient => {
  //     return burgerIngredients[ingredient]
  //   });
  //   const totalIngredientCount = ingredientsArray.reduce( (sum, item) => { return sum + item }, 0 )

  //   this.setState({ totalIngredients: totalIngredientCount })
  // }

  // handleTotalIngredients = () => {
    
  //   this.setState( prevState => {
  //     const prevBurgerIngredients = prevState.burgerIngredients;

  //     const ingredientsArray = Object.keys(prevBurgerIngredients).map(ingredient => {
  //       return prevBurgerIngredients[ingredient]
  //     });
  //     const totalIngredientCount = ingredientsArray.reduce( (sum, item) => { return sum + item }, 0 )

  //     return { totalIngredients: totalIngredientCount }

  //   })
        
  // }