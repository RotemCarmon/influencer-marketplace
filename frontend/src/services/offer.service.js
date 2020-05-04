const fs = require('fs');
import httpService from "./httpService.js";

async function query(filterBy = {}) {
    var queryParams = new URLSearchParams();
    if(filterBy) queryParams.append("id",filterBy);
    return await httpService.get(`offer?${queryParams}`);
}

async function getById(id) {
    return await httpService.get(`offer/${id}`);
}

async function remove(id) {
    return await httpService.delete(`offer/${id}`, id);
}

async function add(message) {
    var offer = await _createOffer(message)
    await httpService.post(`offer`, offer)
    return offer    
}

async function update({ offerData }) {
    return await httpService.put(`offer/${offer._id}`, offerData)
}

function _createOffer(message) {
    const newOffer = {
        from: {
            brandName: message.from.brandName,
            brandId: message.from.brandId
        },
        influencerId: message.to,
        messageId: message._id,
        content: message.content,
        subject: message.subject,
        createdAt: Date.now()
    };
    return newOffer;
}

export default {
    query,
    getById,
    remove,
    add,
    update,
}