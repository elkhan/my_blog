const hero = {
  health: 100,
}

Object.defineProperty(hero, 'status', {
  get() {
    if (this.health > 50) {
      return 'Feel like a champ'
    }
    return 'Hurt'
  },
})

hero.health = 45
console.log(hero.status) // Hurt
hero.health = 55
console.log(hero.status) // Feel like a champ

// see proxy folder for continuation
