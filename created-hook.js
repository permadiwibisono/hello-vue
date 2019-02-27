new Vue({
  el: "#app",
  data: {
    isLoading: true,
    name: '',
    email: '',
    company: {
      name: '',
      catchPhrase: ''
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      const data = resp.data;
      const randomUser = resp.data[
        Math.floor(Math.random() * data.length)
      ];
      this.isLoading = false;
      this.name = randomUser.name;
      this.email = randomUser.email;
      this.company.name = randomUser.company.name;
      this.company.catchPhrase =
      randomUser.company.catchPhrase;
    })
  }
})