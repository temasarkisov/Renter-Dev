import type { GetterTree, MutationTree } from 'vuex';

export const namespace = 'ads';

export interface adsItem {
    name: null | string;
    type: null | string;
    neighbourhood: string | null;
    date: {
        start: null | string;
        end: null | string;
    }
    price: null | string;
    description: null | string;
    images: null | string[];
}

export interface adsState {
    form: adsItem;
    list: Array<adsItem>;
}

export const state = (): adsState => ({
    form: {
        name: null,
        type: null,
        neighbourhood: null,
        date: {
            start: null,
            end: null,
        },
        price: null,
        description: null,
        images: null
    },
    list: []
});

export const getters: GetterTree<adsState, any> = {
    form: (statement) => statement.form,
    list: (statement) => statement.list,
};

export const mutations: MutationTree<adsState> = {
    setForm: (state: adsState, payload: adsItem) => {
        state.form = payload;
    },
    addAdvertisement: (state: adsState) => {
        state.list.push(state.form);
    },
}