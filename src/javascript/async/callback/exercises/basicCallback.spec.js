import { greeting, introduction } from '../callback'

describe('test basic callback', () => {
    it('should return with passed in callback', () => {
        expect(introduction('Joe', 'Doe', greeting)).toBe('Hello Joe Doe!')
    })
})
