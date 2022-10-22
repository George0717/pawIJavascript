// Deklarasi
let txtNpm = document.getElementById('npm')
let txtNama = document.getElementById('name')
let listMhs = document.getElementById('listMahasiswa')
let data = [
  
]

const buttonForm = document.getElementById('submit')
buttonForm.addEventListener('click',function(){
    console.log('Button Ditekan')
    console.log(txtNama.value)
    console.log(txtNpm.value)
    data.push({'npm' : txtNpm.value,"nama": txtNama.value})
    tampil()
})

function tampil(){
    // clear elemen mhs
    listMhs.innerHTML = ''
    // gunakan foreach
    data.forEach(listData)
}
function listData(item,index){
    listMhs.innerHTML += item.npm + ' - ' + item.nama
}







