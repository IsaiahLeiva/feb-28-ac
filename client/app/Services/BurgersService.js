


class BurgersService {
    removeBurger(burgerId) {
        logger.log('burgerId form user', typeof burgerId)
        const index = dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
        if (index === -1) {
            throw new Error('no burger at that id')
        }
        dbContext.Burgers.splice(index, 1)
        return 'No burger fren'
    }
}