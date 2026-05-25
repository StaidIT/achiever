import { createApp } from 'vue'

import Category from './vue/Users/Category.vue';
import Users_Lists from './vue/Admin/Users_Lists.vue';
import User_Data_Modal from './vue/Modals/User_Data_Modal.vue';

const app = createApp({

    data() {
        return {
            showUserModal: false,
            selectedUser: {}
        }
    },

    methods: {

        openUserModal(user) {

            this.selectedUser = user;
            this.showUserModal = true;

        }

    }

});

app.component('category-lists', Category);
app.component('users-lists', Users_Lists);

// MODALS
app.component('user-data-modal', User_Data_Modal);

app.mount('#app');