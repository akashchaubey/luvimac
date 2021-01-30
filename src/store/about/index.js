const state = {
    services:[
         {
            "id": 1,
            "title": "Planning & Strategy",
            "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
            "icon": '<img svg-inline src="../../img/icons/lm-sample-icon.svg" class="vue-logo" />',
            "linkOne": "link1",
         },
         {
            "id": 1,
            "title": "Planning & Strategy",
            "description": "We’re digitally inspired web development team and committed to creating cutting-edge web experiences.",
            "icon": '<img svg-inline src="../../img/icons/lm-sample-icon.svg" class="vue-logo" />',
            "linkOne": "link1",
         }

    ],
};
const getters = {
    allServices : state => state.services
};
const actions = {};
const mutations = {};


export default {
    state,
    getters,
    actions,
    mutations
}