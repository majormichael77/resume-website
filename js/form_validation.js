function validate(e) {
  document.getElementById("final").innerHTML = "";
  document.getElementById("username").innerHTML = "";
  document.getElementById("user-email").innerHTML = "";
  document.getElementById("subs").innerHTML;
  document.getElementById("messages").innerHTML;
  document.getElementById("name").style.borderColor = "";
  document.getElementById("email").style.borderColor = "";
  document.getElementById("subject").style.borderColor = "";
  document.getElementById("message").style.borderColor = "";

  let kave = document.getElementById("name").value;
  let mail = document.getElementById("email").value;
  let sub = document.getElementById("subject").value;
  let msg = document.getElementById("message").value;

  if (kave == "") {
    document.getElementById("name").style.borderColor = "red !important";
    document.getElementById("username").innerHTML = "Please fill in your name";
    e.preventDefault();
  } else if (mail == "") {
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("user-email").innerHTML =
      "Please fill in your email address";
    e.preventDefault();
  } else if (sub == "") {
    document.getElementById("subject").style.borderColor = "red";
    document.getElementById("subs").innerHTML = "Please include a subject";
    e.preventDefault();
  } else if (msg == "") {
    document.getElementById("message").style.borderColor = "red";
    document.getElementById("messages").innerHTML =
      "Please input your intended message";
    e.preventDefault();
  } else if (kave == "" || mail == "" || sub == "" || msg == "") {
    alert("Kindly ensure that all fields required are filled");
    e.preventDefault();
  } else if (kave == "" && mail == "" && sub == "" && msg == "") {
    alert(
      "You cannot subit an empty contact form! Kindly fill required fields"
    );
    e.preventDefault();
  } else {
    document.getElementById("final").innerHTML =
      "Message was sent successfully!";
  }
}
