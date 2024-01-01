
function showAlert() {
    var fn = document.getElementById('fname').value
    var ln = document.getElementById('lname').value;
    var sj = document.getElementById('subject').value;

    if (fn == null || fn == '') {
        alert("First Name Is Compulsory");
    }
    else if (ln == null || ln == "") {
        alert("Last Name Is Compulsory");
        return false;
    }
    else if (sj == null || sj == "") {
        alert("Subject Is Compulsory");
        return false;
    }
    else if(sj.length <= 5){
        alert("Subject Should Be At Least 5 Characters");
        return false;
    }
    else{
        alert("Your form has been sent. Thank you for sharing it with us.");
    }
 }