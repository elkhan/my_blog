/* eslint-disable no-plusplus */
/* eslint-disable func-names */

// https://robdodson.me/javascript-design-patterns-decorator/

function Validator() {
  this.errors = []
  this.decoratorsList = []
}

Validator.prototype.decorate = function (name) {
  this.decoratorsList.push(name)
}

Validator.decorators = {}

Validator.decorators.hasName = {
  // eslint-disable-next-line no-unused-vars
  validate(form) {
    // code to verify presence of name...

    // if no name found...
    this.errors.push('no name!')
  },
}

Validator.decorators.hasAge = {
  // eslint-disable-next-line no-unused-vars
  validate(form) {
    // code to verify presence of age...

    // if no age found...
    this.errors.push('no age!')
  },
}

Validator.decorators.hasZipCode = {
  // eslint-disable-next-line no-unused-vars
  validate(form) {
    // code to verify presence of zip code...

    // if no zip code found...
    this.errors.push('no zip!')
  },
}

// console.log(Validator.decorators);

Validator.prototype.validate = function (form) {
  const max = this.decoratorsList.length
  let name

  this.form = form

  for (let i = 0; i < max; i += 1) {
    name = this.decoratorsList[i]
    Validator.decorators[name].validate.call(this, form)
  }
}
