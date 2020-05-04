import offerService from '../../services/offer.service.js';

export default {
    state: {
        offers: null
    },
    getters: {
        offer(state) {
            return state.offers;
        }
    },
    mutations: {
        setOffers(state, { offers }) {
            state.offers = offers
        },
        updateOffer(state, { offerStatus }) {

        }
    },
    actions: {
        async updateOffer(context, payload) {
            return await offerService.update(payload)
        },
        async addOffer(context, {message}) {
            return await offerService.add(message)
        },
        async loadOffers(context, { influencerId }) {
            const offers = await offerService.query(influencerId);
            context.commit({
                type: 'setOffers',
                offers
            })
            return offers
        }
    }
}