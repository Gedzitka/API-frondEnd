//výpis klientů
import detailClient from "./to-detail-client.js";
import editClient from "./editClient.js";
import deleteClient from "./delete-client.js";
axios.get(`http://localhost:8000/api/clients/`)
    
    .then((res) => {
        const data = res.data;     
    const clientData = document.getElementById("table");
    let table = ` <thead class="thead-light">
    <tr>
      <th scope="col">Jméno</th>
      <th scope="col">Bydliště</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody id="tbody" class="w-auto"> `;
    for (let i = 0; i < data.length; i++) {
      table += `
      
      <tr id="${data[i]._id}">
      <td data-label="Jméno a příjmeni"><a href="client-detail.html"><a id="detail" href="#">${data[i].firstName} ${data[i].lastName}</a></td>
      <td data-label="telefon">${data[i].streetNumber}, ${data[i].posteNumber}, ${data[i].city}</td>
      <td data-label="button"><button  type="button" class="mr-2 btn btn-danger">Odstranit</button><button id= "btnEdit" href="edit-client.html" type="button" class="  btn btn-warning">Editovat</button></td>
    </tr>
   
      `
            }
    table += `</tbody>
                </table>`;
                clientData.innerHTML = table;
              
    detailClient();
        editClient();
            deleteClient();

            

    }
    )


            

    
    



   

   



  






















    




    
        
            
        
            





        


    
   
   
    
    


    

      

    
 

   


// const deletebtm=document.getElementById('deleteBtn');

// console.log(deletebtm);
//  deletebtm.addEventListener('click', (e) => {


//     if (confirm('Opravdu chcete smazat klienta?')) {
//         const id = e.target.parentElement.parentElement.id;
//         console.log(id);
//         async function deleteClient(id) {

//           try {
//             const response = await fetch(`http://localhost:8000/api/clients/${id}`, {
//               method: 'DELETE',
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             });
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.log(error);
//           }
      
//     }


//     deleteClient(id);

// }
// }



// )
// }
// getUsers();
// async function deleteClient(id) {
//     try {
//       const response = await fetch(`http://localhost:8000/api/clients/${_id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

