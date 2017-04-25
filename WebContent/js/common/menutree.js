

function menutree(div) {
    var li = '<li> <a href=\"main.jsp\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a> </li>';
    var data = {
        link:'main.jsp',
        name:'Dashbo11ard'
    };

    addNode(div,buildLi(data));
    addNode(div,buildLi(data));
}

function addNode(div,node) {
    $(div).html($(div).html()+node);
}

function buildLi(data){
    var li = '<li> <a href=\"'+data.link+'\"><i class=\"fa fa-files-o  fa-fw\"></i> '+data.name+'<span class=\"fa arrow\"></span></a> </li>';
    li = '<li>  <a href=\"#\"><i class=\"fa fa-files-o fa-fw\"></i> Sample Pages<span class=\"fa arrow\"></span></a> <ul class=\"nav nav-second-level\">  <li><a href=\"blank.html\">Blank Page</a> </li><li> <a href=\"login.html\">Login Page</a></li> </ul> </li>';
    return li;
}




