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
  beforeCreate(){
    //Instance is being created.
    console.log('Instance is being created.');
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
  },
  beforeMount(){
    //Instance is being mounted.
    console.log('Instance is being mounted.');
  },
  mounted(){
    // instance has been mounted
    //In the mounted() hook of an instance, we’re able to access the rendered DOM with this.$el
    //The mounted() hook is often best used when DOM dependant changes need to be made (i.e. when you need access to the DOM to make certain changes).
    console.log("mounted() ", this.$el);
  },
  beforeUpdate(){
    //Instance is being mounted.
    console.log('Instance is being updated.');
  },
  updated(){
    // instance has been updated
    //In the updated() hook, the accessible DOM refers to the resolved DOM after the update has been made.
    console.log("updated() ", this.$el) // DOM after update is complete
  },
  beforeDestroy(){
    //Instance is being mounted.
    console.log('Instance is being destroyed.');
  },
  destroyed(){
    // instance had been destroyed
    console.log("destoryed() ", this.$el) // DOM after destroy is complete

  }
})