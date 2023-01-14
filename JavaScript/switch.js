var test = "admin";
switch(test){

  case "admin":
	console.log("You get full access");
	break;

  case "subadmin":
  	console.log("You get access to Create/Delete courses");
  	break;

  case "testprep":
  	console.log("You get access to Create/Delete tests");
  	break;
  case "user":
  	console.log("You get acceess to consume content");
  	break;

  default:
  	console.log("trial user");
    break;


}