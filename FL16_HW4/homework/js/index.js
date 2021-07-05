'use strict';

class Pizza {
  constructor(size, type) {
    if (arguments.length !== 2) {
      throw new PizzaException(`Required two arguments, given: ${arguments.length}`);
    } else if (!Pizza.allowedSizes.includes(size)) {
      throw new PizzaException('Invalid size');
    } else if (!Pizza.allowedTypes.includes(type)) {
      throw new PizzaException('Invalid type');
    } else {
      this.size = size;
      this.type = type;
      this.extraIngredients = [];
    }
  }

  addExtraIngredient(ingredient) {
    if (
      !Pizza.allowedExtraIngredients.includes(ingredient) ||
      this.type === Pizza.TYPE_VEGGIE && ingredient === Pizza.EXTRA_MEAT
    ) {
      throw new PizzaException('Invalid ingridient');
    } else if (this.extraIngredients.includes(ingredient)) {
      throw new PizzaException('Duplicate ingredient');
    } else if (arguments.length > 1) {
      throw new PizzaException('You can add only one ingredient');
    } else {
      this.extraIngredients.push(ingredient);
    }
  }

  removeExtraIngredient(ingredient) {
    if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
      throw new PizzaException('Invalid ingridient');
    } else if (!this.extraIngredients.includes(ingredient)) {
      throw new PizzaException('This ingredient not add before');
    } else if (arguments.length > 1) {
      throw new PizzaException('You can add only one ingredient');
    } else {
      this.extraIngredients = this.extraIngredients.filter((ing) => ing !== ingredient);
    }
  }

  getSize() {
    return this.size;
  }

  getPrice() {
    let totalPrice = Pizza.MAP_SIZE_TO_PRICE[this.size] + Pizza.MAP_TYPE_TO_PRICE[this.type];

    if (this.extraIngredients.length) {
      this.extraIngredients.forEach((ingridient) => {
        totalPrice += Pizza.MAP_EXTRA_TO_PRICE[ingridient];
      });
    }

    return totalPrice;
  }

  getPizzaInfo() {
    let info = `size: ${this.getSize()} , type: ${this.type}`;

    if (this.extraIngredients.length) {
      info += `, extraingredients: ${this.extraIngredients.join(', ')}`;
    }
    info += `, price: ${this.getPrice()}  `;

    return info;
  }
  getExtraIngredients() {
    return this.extraIngredients;
  }
}

Pizza.SIZE_S = 'S';
Pizza.SIZE_M = 'M';
Pizza.SIZE_L = 'L';

Pizza.TYPE_VEGGIE = 'VEGGIE';
Pizza.TYPE_MARGHERITA = 'MARGHERITA';
Pizza.TYPE_PEPPERONI = 'PEPPERONI';

Pizza.EXTRA_TOMATOES = 'TOMATOES';
Pizza.EXTRA_CHEESE = 'CHEESE';
Pizza.EXTRA_MEAT = 'MEAT';

Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];

Pizza.MAP_SIZE_TO_PRICE = { [Pizza.SIZE_S]: 50, [Pizza.SIZE_M]: 75, [Pizza.SIZE_L]: 100 };
Pizza.MAP_TYPE_TO_PRICE = { [Pizza.TYPE_VEGGIE]: 50, [Pizza.TYPE_MARGHERITA]: 60, [Pizza.TYPE_PEPPERONI]: 70 };
Pizza.MAP_EXTRA_TO_PRICE = { [Pizza.EXTRA_TOMATOES]: 5, [Pizza.EXTRA_CHEESE]: 7, [Pizza.EXTRA_MEAT]: 9 };

class PizzaException {
  constructor(log) {
    this.log = log;
  }
}
