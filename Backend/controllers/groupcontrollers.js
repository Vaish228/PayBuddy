const groupService =require('../service/groupservice.js');

exports.createGroup= async function(req,res) {
    try{
          const payload=req.body;
          const {groupName,members}=payload;
          const createdBy = payload.createdBy || null;
          const result=await groupService.createGroup(groupName,members,createdBy);
          res.status(201).json({status:true, message:"Group created", data:result});
    }
    catch(error){
          res.status(400).json({status:false , message:error.message});
          console.log(req.body);
    }
}


exports.getAllGroups= async function(req,res){
       try{
            const result =await groupService.getAllGroups();
            res.status(200).json({
                  status:true,
                  message:"Got all groups details",
                  data:result
            });

       }
       catch(error){
            res.status(400).json({status:false,message:error.message});
       }
}

exports.getGroupByID = async function(req,res){
      try{
            const groupId=req.params.id;
            const group= await groupService.getGroupById(groupId);
            res.status(200).json({
                  status:true,
                  message:"Group is fetched",
                  data:group
            });
      }
      catch(error){
            res.status(400).json({
                  status: false,
                  message: error.message
              });
          }
}

exports.addMemberToGroup=async function(req,res){
      try{
            const groupId=req.params.id;
            const {memberId}=req.body;
            const updatedGroup = await groupsService.addMemberToGroup(groupId, memberId);

            res.status(200).json({
                  message: "Member added successfully",
                  data: updatedGroup
            });
      }
      catch(error){
            res.status(500).json({ error: error.message });

      }
}

exports.updateGroup=async function(req,res) {
      try{
            const payload=req.body;
            const id=payload._id;
            const groupName=payload.name;
            const members=payload.members;
            await groupService.updateGroup(id,groupName,members);
            res.status(200).json({
                  status: true,
                  message: "updated successfully"
              });
      
      }
      catch(error){
            res.status(400).json({
                  status: false,
                  message: error.message
              });
      
      }
}

exports.deleteGroupById=async function(req,res){
      try{
            const id=req.params.id;
            await groupService.deleteGroupById(id);
            res.json({
                  status: true,
                  message: 'Group deleted successfully.'
              });
      }
      catch(error){
            res.status(400).json({
                  status: false,
                  message: error.message
              });
      
      }
}

