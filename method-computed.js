new Vue({
  el: "#app",
  data: {
    message: "Hello World!"
  },
  methods: {
    reverseString(str){
      console.log("This is reverseString");
      return str.split('').reverse().join('');
    }
  },
  computed: {
    reverseMessage(){
      console.log("This is reverseMessage");
      return this.message.split('').reverse().join('');
    }
  }
})