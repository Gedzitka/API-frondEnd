//odkaz na editační formulář pojištění
export default function editAssurence(){
    
    const editBtn = document.getElementById("btn-edit");
    console.log(editBtn);
     editBtn.addEventListener("click", (e) => {
                let id = e.target.parentElement.parentElement.id;
                console.log(id);
                window.location.href = `http://127.0.0.1:5500/form-assur-edit.html?=${id}`;
                



            });
        }
