// Deklarasi
let txtNpm = document.getElementById('npm')
let txtNama = document.getElementById('name')
let listMhs = document.getElementById('listMahasiswa')
let tblMhs = document.getElementById('tblMahasiswa')
let data = [] 
tampil()


const buttonForm = document.getElementById('submit')
buttonForm.addEventListener('click',function(){
    console.log('Button Ditekan')
    console.log(txtNama.value)
    console.log(txtNpm.value)
   

    // cek apakah ada data di dalam localStorage
    if(localStorage.getItem("listMahasiswa") === null){
        // Simpant object ke arrayData
        data.push({'npm' : txtNpm.value,"nama": txtNama.value})
        // Jika localStorage kosong/null
        // simpan localStorage dengan key listMahasiswa
        localStorage.setItem("listMahasiswa",JSON.stringify(data))
        console.log("Data belum ada / belum diisi")
    }
    else{
        // Jika data sudah ada
        // variabel dataLs dibuat agar data yang telah diisi tidak akan hilang
        const dataLs = JSON.parse(localStorage.getItem("listMahasiswa"))
        dataLs.push({"npm" : txtNpm.value,"nama": txtNama.value})
        localStorage.setItem("listMahasiswa",JSON.stringify(dataLs))
        localStorage.getItem("listMahasiswa")
       
    }

    tampil()
})

function tampil(){
    // clear elemen mhs
    listMhs.innerHTML = ''
    // gunakan foreach
    data.forEach(listData)
    // mengambil data localStorage dengan key listMahasiswa
    const dataLs = JSON.parse(localStorage.getItem('listMahasiswa'))
    dataLs.forEach(listData)
}
function listData(item,index){
    listMhs.innerHTML += '<li>' + item.npm + ' - ' + item.nama + '</li>'
    
    tblMhs.innerHTML += `<tr><td>${item.npm}</td> <td>${item.nama}</td> </tr>`  
}









