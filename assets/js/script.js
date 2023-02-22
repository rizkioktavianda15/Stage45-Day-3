// DOM (DOCUMENT OBJECT MODEL)


        // GETTING DATA FROM HTML FORM
function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value


        // DATA FILL ALERT
    if(name==""){
        return alert("Nama Harus diisi")
    } else if(email==""){
        return alert("email Harus diisi")
    } else if(phone==""){
        return alert("Phone Harus diisi")
    } else if(subject==""){
        return alert("Subject Harus diisi")
    } else if(address==""){
        return alert("Address Harus diisi")
    }


    // EMAIL GENERATOR
    const emailReceiver = "oktaviandarizki15@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo Nama Saya ${name}, Alamat saya ${address}, bisakah hubungi saya di ${phone}`
    a.click()


    // DATA STORE
    let data ={
        name,
        email,
        phone,
        subject,
        address
    }
        console.log(data)
}