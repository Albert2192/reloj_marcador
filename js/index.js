const option = document.getElementById('options');
const option_on = document.getElementById('opctions_on');

option_on.addEventListener('click', function(e){
    e.preventDefault();
    option.classList.toggle('active');
});