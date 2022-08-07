import { output } from './promiseAll'

describe('Promise.all', () => {
    it('should render an array of strings', async () => {
        const result = await output()
        const outputArr = [
            'I just cleaned a rusty nail',
            'I just cleaned a bent nail',
            'I just cleaned a clean nail',
            'I just cleaned a splintered plank',
            'I just cleaned a straight plank',
            'I just cleaned a bent plank',
            'Whew, that was a lot of work!',
        ]
        expect(result).toEqual(outputArr)
    })
})
