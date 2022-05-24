document.getElementById('AC').addEventListener("click", re_move);
document.getElementById('DEL').addEventListener("click", re_move);
document.getElementById('nine').addEventListener("click", re_move);
function re_move() {
    let vals = document.getElementById('nine').innerHTML;
    console.log(vals);
}