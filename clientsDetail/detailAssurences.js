 //odkaz na detail pojištění
 export default function detailAssurence(){
    
    const detail = document.getElementById("detail");
    console.log(detail);
     detail.addEventListener("click", (e) => {
                let id = e.target.parentElement.parentElement.id;
                console.log(id);
                window.location.href = `http://127.0.0.1:5500/assurence-detail.html?=${id}`;
                



            });
        }