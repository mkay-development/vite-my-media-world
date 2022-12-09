import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state () {
    return {
      loggedin: false,
      token: '',
      user: {}
    };
  },
  actions: {
    load: function () {
      this.token = localStorage.getItem('token');
    },
    save: function () {
      this.token = localStorage.setItem('token', this.token);
    },
    logout: function () {
      localStorage.removeItem('token');
      window.location = '/';
    },
    login: function (email, password) {
      const that = this;
      fetch('https://backend.my-media.world/api/user/login', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer: ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          if (data.token) {
            that.token = data.token;
            that.loggedin = true;
            that.save();
            window.location = '/';
          }
        });
    },
    check: function () {
      this.load();
      if (this.token) {
        const that = this;
        fetch('https://backend.my-media.world/api/user/check', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            if (data.user) {
              that.user = data.user;
              that.loggedin = true;
            }
          });
      }
    }
  }
});
