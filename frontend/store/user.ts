import type { GetterTree, ActionTree, MutationTree } from 'vuex';

export const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIwNjg3OTcuNTIzODg1LCJpYXQiOjE2NzIwMjU1OTcuNTIzODg2LCJ1c2VySWQiOjEwMDAyMDUyOCwicm9sZSI6IiJ9.Y7vLuWUyrDZkXjHgrdESNm-hPeSeq5-VLrQehcbjmpU';
export const namespace = 'user';

export interface userState {
    token: null | string;
    name: null | string;
}

export const state = (): userState => ({
    token: null,
    name: null,
});

export const getters: GetterTree<userState, any> = {
    token: (statement) => statement.token,
    name: (statement) => statement.name,
};

export const mutations: MutationTree<userState> = {
    SET_TOKEN: (statement, payload: string | null) => {
      statement.token = payload;
      sessionStorage.setItem('authToken', <string>statement.token);
    },
    SET_NAME: (statement, payload: string | null) => {
        statement.name = payload;
        sessionStorage.setItem('userName', <string>statement.name);
    },
}

export const actions: ActionTree<userState, any> = {
    async LOGIN({ commit }) {
        commit('SET_TOKEN', testToken);
        commit('SET_NAME', 'Juan');
    },
    async REGISTER({ commit }) {
        commit('SET_TOKEN', testToken);
        commit('SET_NAME', 'Juan');
    },
};



