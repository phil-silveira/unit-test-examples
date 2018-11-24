const UserException = (message) => {
    this.name = 'UserException'
    this.message = message

    this.prototype.toString = () => {
        return `${this.name}: "${this.message}"`
    }
}