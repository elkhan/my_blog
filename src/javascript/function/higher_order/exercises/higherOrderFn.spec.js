import { greetWorld, repeat } from './higherOrderFn'

test('greetWorld calls the greeting function properly', () => {
    const greetImplementation = name => `Hey, ${name}!`
    const mockFn = jest.fn(greetImplementation)
    const value = greetWorld(mockFn)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith('world')
    expect(value).toBe('Hey, world!')
})

describe('it should log n number of times', () => {
    it('logs 3 times', () => {
        const consoleSpy = jest.spyOn(console, 'log')
        repeat(3, consoleSpy)
        // expect(consoleSpy).toHaveBeenCalledWith(0, 1, 2)
        expect(consoleSpy.mock.calls[0][0]).toBe(0)
        expect(consoleSpy.mock.calls[1][0]).toBe(1)
        expect(consoleSpy.mock.calls[2][0]).toBe(2)
        expect(consoleSpy.mock.calls.length).toBe(3)
    })
})
