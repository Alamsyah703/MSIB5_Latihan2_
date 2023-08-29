
$(document).ready(function () {
  $("#gradeForm").submit(function (event) {
      event.preventDefault(); 

      
      var name = $("#nameInput").val();
      var mataKuliah = $("#mataKuliahInput").val();
      var sks = $("#SKS").val();
      var grade = $("#grade").val();

   
      if (name === "" || mataKuliah === "" || sks === "disabled selected" || grade === "disabled selected") {
          alert("Harap isi semua field!");
          return;
      }

     
      var nilai = hitungNilai(grade);

    
      tambahkanDataKeTabel(name, mataKuliah, sks, grade, nilai);

    
      $("#gradeForm")[0].reset();
  });

 
function hitungNilai(grade) {
  var nilaiMap = {
      "A": 4,
      "B": 3,
      "C": 2,
      "D": 1,
      "E": 0
  };

  return nilaiMap[grade] || 0; 
}


  
  function tambahkanDataKeTabel(name, mataKuliah, sks, grade, nilai) {
      var table = $("#dataTable");
      var newRow = $("<tr>");
      newRow.append("<td>" + name + "</td>");
      newRow.append("<td>" + mataKuliah + "</td>");
      newRow.append("<td>" + sks + "</td>");
      newRow.append("<td>" + grade + "</td>");
      newRow.append("<td>" + nilai.toFixed(2) + "</td>"); 
      table.append(newRow);
  }
});
