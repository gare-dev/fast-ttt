import validateNickname from "../../../utils/validateNickname"


describe('validate nickname', () => {
    it('must validate the nickname length', () => {
        expect(validateNickname('gar')).toBe(false)
    })

    it('must validate the nickname type', () => {
        expect(validateNickname(10000)).toBe(false)
    })

    it('must validate if the nickname is admin', () => {
        expect(validateNickname('admin')).toBe(false)
    })
})

