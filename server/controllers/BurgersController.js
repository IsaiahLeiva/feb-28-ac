import { BurgersService } from "../services/BurgersService"
import { logger } from "../utils/Logger"


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
            const burgers = await BurgersService.getAllBurgers()
            //NOTE: explain line below
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            logger.log(req.body)
            const burger = await BurgersService.createBurger(req.body)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }

}