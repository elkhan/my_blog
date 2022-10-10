function Car(model, years, miles) {
  this.model = model
  this.years = years
  this.miles = miles

  this.toString = function() {
    return `${this.model} has done ${this.miles} miles`
  }
}

const civic = new Car('Honda Civic', 2009, 20000)
const mondeo = new Car('Ford Mondeo', 2010, 5000)
console.log(civic.toString())
console.log(mondeo.toString())
/**
 * Honda Civic has done 20000 miles
 * Ford Mondeo has done 5000 miles
 */
