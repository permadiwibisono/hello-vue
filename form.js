new Vue({
  el: "#app",
  data: {
    name: '',
    subject: '',
    gender: 'Male',
    termAndConditions: false
  },
  methods: {
    onSubmit(){
      console.log('name: ', this.name);
      console.log('subject: ', this.subject);
      console.log('gender: ', this.gender);
      console.log('termAndConditions: ', this.termAndConditions);
    }
  }
})