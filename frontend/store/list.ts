import type { GetterTree, ActionTree, MutationTree } from 'vuex';

export const namespace = 'list';

export interface listState {
    info: {
        id: number;
        image: string;
        images: string[];
        price: number;
        name: string;
        neighbourhood: string;
        apart_type: string;
        description: string;
        date: {
            start: string;
            finish: string;
        }
    }[];
}

export const state = (): listState => ({
    info: [
        {
            id: 1,
            image: 'https://images.adsttc.com/media/images/6116/9b16/f91c/819f/6b00/0029/slideshow/CHE_6832-HDR_%D0%BE%D1%82%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F.jpg',
            images: [
                'https://images.adsttc.com/media/images/6116/9a7f/f91c/819f/6b00/0021/slideshow/CHE_6749.jpg',
                'https://images.adsttc.com/media/images/6116/9aeb/f91c/8107/9700/0025/slideshow/CHE_6576-HDR.jpg',
            ],
            price: 80,
            name: 'Gran Via Studio Madrid',
            neighbourhood: 'Hispanoam&eacute;rica',
            apart_type: 'Entire home/apt',
            description: 'Studio located 50&nbsp;meters from Gran Via, next to&nbsp;the Plaza de&nbsp;Callao.',
            date: {
                start: '04/15/22',
                finish: '08/15/22'
            }
        }
    ],
});

export const getters: GetterTree<listState, any> = {
    info: (statement) => statement.info,
};

export const mutations: MutationTree<listState> = {
}

export const actions: ActionTree<listState, any> = {
};



