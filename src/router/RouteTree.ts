import express from 'express'
import { Registertrees } from '../Rubber_Tree/rubbertree_'

const tree = express.Router()
const registerTreesController = new Registertrees();

tree.post('/treesave', (req, res, next) => {
    registerTreesController.Save(req, res, next);
});

tree.get('/treeall', (req, res, next) => {
    registerTreesController.all(req, res, next);
});

tree.delete('/delete/:id', (req, res, next) => {
    registerTreesController.delete(req, res, next)
})

export default tree