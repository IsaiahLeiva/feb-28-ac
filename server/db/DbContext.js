import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);


  Burgers = [
    { id: 1, name: 'Goodburger', cheese: 'cheddar' },
    { id: 2, name: 'Greatburger', cheese: 'pepperjack' },
    { id: 3, name: 'Amazingburger', cheese: 'feta' }
  ]
}

export const dbContext = new DbContext()
