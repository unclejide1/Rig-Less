$(document).ready(function (){
    $.ajax({
        "url": "http://localhost:3000/candidates",
        "method": 'get'
    }).done(res =>{
        res.forEach((elem, i) =>{
            $('#candidates').append(
                `<tr>
                <td>${i+1}</td>
                <td>${elem.name}</td>
                <td>${elem.party}</td>
                <td>${elem.age}</td>
                <td><input type="button" class="btn btn-primary" onclick="updateCandidate(${
                    elem.id
        })" value="View"> &nbsp;<input type="button" class="btn btn-danger" onclick="deleteCandidate(${
            elem.id
})" value="Delete"></td>
                </tr>
                `
            )
        })
    })
})

function updateCandidate(i) {
  $.ajax({
    url: "http://localhost:3000/candidates/" + i,
    method: "get"
  }).done(repl => {
    console.log(repl);

    $("#change").html(
      `
      <input type="text" id="candidates" value="${repl.name}" class="form-control" placeholder="Candidates Name">
      <input type="email" id="candid-email" value="${repl.email}" class="form-control" placeholder="candidates Email">
      <input type="num" id="candid-age" value="${repl.age}" class="form-control" placeholder="candidates age">
      <input type="text" id="politicalP" value="${repl.party}" class="form-control" placeholder="Political party">
      <input type="button" value="update" class="btn btn-yellow btn-general" onclick="updateCandidateInfo(${repl.id})">
      `
    );
  });
}

function updateCandidateInfo(i) {
  let name = $("#candidates").val();
  let email = $("#candid-email").val();
  let age = $("#candid-age").val();
  let party = $("#politicalP").val();
//checking to see that the passed in values are not empty strings
  if (
    name !== "" &&
    email !== "" &&
    party !== "" &&
    age !== "" 
  ) {
    $.ajax({
      url: "http://localhost:3000/candidates/" + i,
      method: "put",
      data: {
        name,
        email,
        party,
        age,
      }
    }).done(resp => {
      console.log(resp);
    });
  }
}

//delete candidates
function deleteCandidate(i) {
    $.ajax({
      url: "http://localhost:3000/candidates/" + i,
      method: "delete"
    }).done(resp => {
        console.log(resp);
      });
    }
