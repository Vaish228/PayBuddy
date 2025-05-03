const GroupModel = require('../models/groupmodels');

class GroupService {
    async createGroup(name, memberIds, createdBy) {
        const group = {
            name,
            members: memberIds,
            createdBy,
            expenses: []
        };
        await GroupModel.create(group);
        console.log(group);
    }

    async getAllGroups() {

        return await GroupModel.find().populate('members', 'name email');
    }

    async getGroupById(id) {
        const group = await GroupModel.findById(id).populate('members', 'name email').populate('expenses')
        if (!group) throw new Error("Group not found");
        return group;
    }

    async updateGroup(groupId, groupName, members) {
        const group = await GroupModel.findById(groupId);
        if (!group)
            throw new error("Group not found");
        group.name = groupName;
        group.members = members;
        await group.save();
    }


    async addMemberToGroup(groupId, memberId) {
        const group = GroupModel.findById(groupId);
        if (!group) throw new Error("Group not found");
        if (!group.members.includes(memberId)) {
            group.members.push(memberId);
            await group.save();
        }
    }

    async deleteGroup(groupId) {
        await GroupModel.findByIdAndDelete(groupId);
    }
}




const groupService = new GroupService();
module.exports = groupService;

