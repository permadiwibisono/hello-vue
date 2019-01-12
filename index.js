new Vue({
  el: "#app",
  data: {
    greeting: "Hello World!",
    alertMessage: "",
    user: "Permadi Wibisono",
    city: "Toronto",
    cityImgUrl: 'https://bit.ly/2SKJPqJ',
    numbers: [1, 2, 3, 4, 5, 6, 7, 9, 10 ]
  },
  methods: {
    changeCity() {
      if(this.city === 'Toronto'){
        this.city = "Lagos"
        this.cityImgUrl = "https://bit.ly/2Rd4gQ3";
      }
      else{
        this.city = "Toronto"
        this.cityImgUrl = "https://bit.ly/2SKJPqJ";
      }
    },
    alertMessageKeyUp(ev) {
      console.log("Event ", ev);
      this.alertMessage = "You typed something!";
    },
    alertMessageKeyUpEnter(ev) {
      console.log("Event ", ev.target.value);
      this.alertMessage = ev.target.value;
    },
    changeGreeting(ev) {
      console.log("Event ", ev);
      this.greeting = this.greeting === 'Hello World!' ?
      'What is up!' :
      'Hello World!';
    }
  }
})