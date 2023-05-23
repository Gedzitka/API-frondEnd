//detail klienta
import creatAssurences from "./creat-assurences.js";
import printAssurences from "./print-assurences.js";
import editClient from "./edit-client.js";

function detailClient() {
    const id=window.location.search.split('=')[1];
    console.log(id);
if (id) {
    axios.get(`http://localhost:8000/api/clients/${id}`)
    .then((res) => {
        console.log(res.data);
        const client=res.data;
        console.log(client);

const clientInfo = document.getElementById("clientDiv");

clientInfo.innerHTML=`  <div class="col-2">
<img src="klient.png" alt="klient fotografie" class="img-fluid">
</div>
<div id="clientInfo" class="col-3"> <ul class="ul ul-expand-md">
<dt>${client.firstName} ${client.lastName}</dt>

<dd>${client.streetNumber}</dd>
<dd>${client.city}</dd>
<dd>${client.posteNumber}</dd>
</ul>
</div>
<div id="nextInfo" class="col-6">



<ul>
<dd>${client.email}</dd>
<dd>${client.phone}</dd>
</ul>
</div>
`   
}
)
.catch((err) =>
console.log(err));
}
}
detailClient();
creatAssurences();

printAssurences();
editClient();


        






