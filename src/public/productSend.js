//CAPTURO EL EVENTO 
document.addEventListener('submit', (event=>{
    event.preventDefault();
    //prueba
    let title = document.getElementById('title').value;
    console.log(title);
    //fin prueba
    let form = document.getElementById('form_product');
    let formData = new FormData(form);
    console.log(formData);
    console.log(form);
    fetch('/api/products',{
        method: 'POST',
        body: formData
    }).then(result=>{
        return result.json();
    }).then(json=>{
        Swal.fire({
            icon: 'success',
            title: 'Se Guardo el Producto',
            showConfirmButton: false,
            timer: 3000
          })
        console.log(json);
    }).then(result=>{
        location.href='/';
    })
}))

