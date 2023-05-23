export default function detailClient(){
    const aDetail = document.querySelectorAll("#detail");
    if (aDetail) {
        aDetail.forEach((btn) => {
btn.addEventListener("click", (e) => {
const id = e.target.parentElement.parentElement.id;
console.log(id);
window.location.href = `http://127.0.0.1:5500/client-detail.html?=${id}`;

});
});
}
}

detailClient();