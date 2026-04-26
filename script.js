let anggota = JSON.parse(localStorage.getItem("anggota")) || [];

/* FORM */
if (document.getElementById("memberForm")) {
document.getElementById("memberForm").addEventListener("submit", function(e){
e.preventDefault();

let nama = document.getElementById("nama").value;
let email = document.getElementById("email").value;
let minat = document.getElementById("minat").value;

anggota.push({
nama:nama,
email:email,
minat:minat
});

localStorage.setItem("anggota", JSON.stringify(anggota));

alert("Data berhasil disimpan!");

window.location.href="index.html";
});
}

/* DASHBOARD */
if(document.getElementById("anggotaTable")){

let table = document.getElementById("anggotaTable");

anggota.forEach(function(data){
table.innerHTML += `
<tr>
<td>${data.nama}</td>
<td>${data.email}</td>
<td>${data.minat}</td>
</tr>
`;
});

}