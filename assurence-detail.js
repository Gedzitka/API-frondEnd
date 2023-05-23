



function detailAssurence(){
    const id=window.location.search.split("=")[1];
    axios.get(`http://localhost:8000/api/assurances/${id}`,
)
.then((res) => {
const data=res.data;

console.log(data);
console.log(data.clientID);
const clientID=data.clientID;


axios.get(`http://localhost:8000/api/clients/${clientID}`,)
.then ((res)=>{
const clientData=res.data;
console.log(clientData);
const clientName=clientData.firstName
const clientSurname=clientData.lastName
const clientFullname=clientName+" "+clientSurname;
console.log(clientFullname);

const table = document.getElementById("table");
table.innerHTML=
`
<thead class="thead-light">
<tr>
<th scope="col">Jméno a příjmení pojištěnce</th>
<th scope="col">Typ pojištění</th>
<th scope="col">Předmět pojištění</th>
<th scope="col">Pojistná částka</th>
<th scope="col">Pojištěno od</th>
<th scope="col">Pojištěno do</th>

</tr>
</thead>
<tbody id="tbody" class="w-auto">
<tr >
<td data-label="name"> <a id="client" href="#">${clientFullname}</a></td>
<td data-label="type">${data.type}</td>
<td data-label="subject">${data.subjectOfinsurance}</td>
<td data-label="amount">${data.price}</td>
<td data-label="from">${data.validFrom}</td>
<td data-label="to">${data.validTo}</td>
</tr>


</tbody>`
const client=document.getElementById("client");
client.addEventListener("click",()=>{
window.location.href=`http://127.0.0.1:5500/client-detail.html?=${data.clientID}`;

}
)
.catch((error) => console.error(error));
}
)
}
)
}

detailAssurence();

   

