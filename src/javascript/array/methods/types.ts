export {}

declare global {
  interface Array<T> {
    customForEach(fn: (elem: T, idx: number, arr: T[]) => void): void
    myFilter(callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context?: any): any[]
    myMap(callback: (arg0: any, arg1: number, arg2: any) => any): any[]
    customMap(callback: (arg0: any, arg1: number, arg2: any) => any): any[]
    myReduce(callback: { call: (arg0: undefined, arg1: any, arg2: any, arg3: number, arg4: any) => any; }, initialVal: any): any
    myEvery(callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context?: any): boolean
    mySome(callback: { call: (arg0: any, arg1: any, arg2: number, arg3: any) => any; }, context?: any): boolean
  }
}
