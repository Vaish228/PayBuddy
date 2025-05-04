const express=require('express');
const { getAllGroups, createGroup, getGroupByID, updateGroup, addMemberToGroup, deleteGroupById } = require('../controllers/groupcontrollers');

const groupRouter=express.Router();

groupRouter.get('/',getAllGroups);

groupRouter.post('/',createGroup);

groupRouter.get('/:id',getGroupByID);

groupRouter.put('/:id',updateGroup);

groupRouter.put('/:id/add-member',addMemberToGroup);

groupRouter.delete('/:id',deleteGroupById);

module.exports=groupRouter;