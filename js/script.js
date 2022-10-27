// Deklarasi
let txtNpm = document.getElementById('npm')
let txtNama = document.getElementById('name')
let listMhs = document.getElementById('listMahasiswa')
let data = [] 


const buttonForm = document.getElementById('submit')
buttonForm.addEventListener('click',function(){
    console.log('Button Ditekan')
    console.log(txtNama.value)
    console.log(txtNpm.value)
    data.push({'npm' : txtNpm.value,"nama": txtNama.value})

    // cek apakah ada data di dalam localStorage
    if(localStorage.getItem("listMahasiswa") === null){
        // Jika localStorage kosong/null
        // simpan localStorage dengan key listMahasiswa
        localStorage.setItem("listMahasiswa",JSON.stringify(data))
        console.log("Data belum ada / belum diisi")
    }
    else{
        // Jika data sudah ada
        localStorage.getItem("listMahasiswa")
    }

    tampil()
})

function tampil(){
    // clear elemen mhs
    listMhs.innerHTML = ''
    // gunakan foreach
    data.forEach(listData)
}
function listData(item,index){
    listMhs.innerHTML += '<li>' + item.npm + ' - ' + item.nama + '</li>'
}









