export default function deleteClient(){
    const deleteBtn = document.querySelectorAll(".btn-danger");
    if (deleteBtn) {
        deleteBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                let id = e.target.parentElement.parentElement.id;
              
                sessionStorage.setItem('id', id);
                if (confirm('Opravdu chcete smazat klienta?')) {
                    axios.delete(`http://localhost:8000/api/clients/${id}`)
                   
                    .then(client => console.log(client + "deleted"	))
                    .then(() => location.reload())

                    .catch(error => console.error(error))
                }


            });



        });

    }

}


deleteClient();