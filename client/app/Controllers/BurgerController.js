


export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getAllBurgers)
            .post('', this.createBurger)
            .delete('/:burgerId', this.removeBurger)
    }

    async getAllBurgers(req, res, next) {
        try {
            const burgers = await bur
        } catch (error) {

        }
    }

}