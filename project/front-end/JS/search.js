
document.addEventListener('DOMContentLoaded', function() {

    loadHtmlTable([]);
});

function loadHtmlTable(data) {
    const table = document.querySelector('table tbody');
    //let tableHtml = "";

    if (data.length === 0) {
        table.innerHTML = "<tr><td>aya</td><td>31715007077</td><td class='goto'><a href='generalmedical.html'> Medical Information</a></td></tr>";
    }
}




