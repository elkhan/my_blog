/* List of observers */
function ObserverList() {
  this.observerList = []
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj)
}

ObserverList.prototype.count = function () {
  return this.observerList.length
}

// eslint-disable-next-line consistent-return
ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index]
  }
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i
    }
    // eslint-disable-next-line no-plusplus
    i += 1
  }
  return -1
}

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1)
}

/* Subject */
function Subject() {
  this.observers = new ObserverList()
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0))
}

Subject.prototype.notify = function (context) {
  const observerCount = this.observers.count()
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < observerCount; i += 1) {
    this.observers.get(i).update(context)
  }
}
