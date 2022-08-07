import '../../types'

Array.prototype.customForEach = function customForEach<T>(
  fn: (elem: T, idx: number, arr: T[]) => void
): void {
  for (let i = 0; i < this.length; i += 1) {
    fn(this[i], i, this)
  }
}
