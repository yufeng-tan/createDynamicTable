/*
  Name: Yufeng Tan
  E-mail: Yufeng_Tan@student.uml.edu
  Assignment: hw6, Interactive Dynamic table: create a table completely dynamically
              based on parameters entered in an HTML form, then crate a multiplication table completely dynamically.
  This is the javascrip file for hw6
*/


function createTable(){
  // get values from input
  var mul_s = +document.getElementById("multiplier_start").value
  var mul_e = +document.getElementById("multiplier_end").value
  var mulcnt_s = +document.getElementById("multiplicant_start").value
  var mulcnt_e = +document.getElementById("multiplicant_end").value


if(validate(mul_s, mul_e, mulcnt_s, mulcnt_e)){
      generateForm(mul_s, mul_e, mulcnt_s, mulcnt_e);
  }
}

// validate the input numbers
function validate(mul_s, mul_e, mulcnt_s, mulcnt_e){
  if (mul_s >= mul_e || mulcnt_s >= mulcnt_e){
    alert("Starting numbers can not greater or equal to ending number");
    return false;
  }
  if (mul_s < 1 || mul_e < 1 || mulcnt_s < 1 || mulcnt_e < 1 || isNaN(mul_s) || isNaN(mul_e) || isNaN(mulcnt_s) || isNaN(mulcnt_e)){
    alert("Please input valid integers");
    return false;
  }
  return true;
}

//follow examples to create table in https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
function generateForm(mul_s, mul_e, mulcnt_s, mulcnt_e) {

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = mul_s, ii = mul_e + 1; i <= ii;  ++i) {
    var row = document.createElement("tr");
    for (var j = mulcnt_s, jj = mulcnt_e + 1; j <= jj; ++j) {
      var cell = document.createElement("td");
      var cellText;
      if (i == mul_s && j == mulcnt_s) {
        cellText = document.createTextNode("");
      }
      else if (i == mul_s) {
        cellText = document.createTextNode(j - 1);
      }
      else if(j == mulcnt_s) {
        cellText = document.createTextNode(i - 1);
      }
      else {
        cellText = document.createTextNode((i - 1) * (j - 1));
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
