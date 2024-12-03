// let baseuser = {
//      read: true,
//    };
//    let developer = {
//      write: true,
//    };
//    developer.__proto__ = baseuser;
//    console.log(developer.read);

let baseuser = {
  read: true,
  job: "",
  showreadpermission: function () {
    console.log(this.read);
  },
  //setter method to set the job of user
  set detail(value) {
    this.job = value;
  },
  //getter method to get job detail
  get detail() {
    return `${this.job}`;
  },
};
let developer = {
  //child object
  write: true,
};
developer.__proto__ = baseuser;
developer.showreadpermission();
developer.detail = "blogger";
console.log(developer.detail);
