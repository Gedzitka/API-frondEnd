export default function editClient(){
    const editBtn = document.querySelectorAll(".btn-warning");
    if (editBtn) {
        editBtn.forEach((btn) => {
btn.addEventListener("click", (e) => {
const id = e.target.parentElement.parentElement.id;
console.log(id);
window.location.href = `http://127.0.0.1:5500/form-edit.html?=${id}`;

});
});
}
}
editClient();