//editace klienta 
function putClient(){
    const id = window.location.search.split('=')[1];
    console.log(id);
    const form = document.getElementById('client-form')
    console.log(form);
    form.addEventListener('submit', (e) => {
            e.preventDefault()
            ;
            const data = new FormData(form)
            const dataForm=[...data]
            const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
            console.log(dataEteries);
            axios({
                method: "put",
                url: `http://localhost:8000/api/clients/${id}`,
                data: dataEteries,
                headers: { "Content-Type": "application/json" }

            }


            )
                .then((res) =>
                    console.log(res + "klient upraven"))
                    .then( () => window.location.href=`http://127.0.0.1:5500/index.html?id=1`)

                .catch((err) =>
                console.log(err));
        });
}
putClient();
editClient=()=>{
    const id = window.location.search.split('=')[1];
    console.log(id);
    if (id) {
        axios.get(`http://localhost:8000/api/clients/${id}`)
        .then((res) => {
            console.log(res.data);
            const client=res.data;
            console.log(client);
            document.getElementById('firstName').value=client.firstName;
            document.getElementById('lastName').value=client.lastName;
            document.getElementById('email').value=client.email;
            document.getElementById('phone').value=client.phone;
            document.getElementById('streetNumber').value=client.streetNumber;
            document.getElementById('city').value=client.city;
            document.getElementById('posteNumber').value=client.posteNumber;
            
        })
       

        .catch((err) =>
        console.log(err));
    }
}
editClient(); 