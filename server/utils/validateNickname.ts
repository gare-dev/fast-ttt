export default function validateNickname(nickname: string | number) {
    if (typeof nickname === "string") {
        if (nickname.length > 3) {
            if (nickname !== 'admin') {
                return true
            }
        }
    }
    return false

}