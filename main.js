const header = 'loadHeader';
const headertext = `
<div class="header">

    <center>
        <a href="/" id="header-logo">
            <img src="cdn/logo_res.png" width="500">
        </a>
    </center>

    <!-- Selection -->
    <hr class="header-hr" id="h_hr1">
        <center>
            <table border="0">
                <tr align="center">
                        <td id="header-addpadding"><button id="header-btn" onclick="click_see()">👁</button></td>
                        <td id="header-addpadding"><button id="header-btn" onclick="click_add()">+</button></td>
                        <td id="header-addpadding"><button id="header-btn" onclick="click_rem()">🗑</button></td>
                </tr>
            </table>
        </center>
    <hr class="header-hr" id="h_hr2">
</div>
`

const headertext_account = `
<div class="header">

    <center>
        <a href="/" id="header-logo">
            <img src="../cdn/logo_res.png" width="500">
        </a>
    </center>

    <!-- Selection -->
    <hr class="header-hr" id="h_hr1">
        <center>
            <table border="0">
                <tr align="center">
                        <td id="header-addpadding"><button id="header-btn" onclick="click_see()">👁</button></td>
                        <td id="header-addpadding"><button id="header-btn" onclick="click_add()">+</button></td>
                        <td id="header-addpadding"><button id="header-btn" onclick="click_rem()">🗑</button></td>
                </tr>
            </table>
        </center>
    <hr class="header-hr" id="h_hr2">
</div>
`

function copyclip(a) {
    navigator.clipboard.writeText(a);
    window.alert('Successfully Copied!');
}

function click_see() {
    window.location.href = "/accounts";
}
function click_add() {
    window.location.href = "/accounts/add";
}
function click_rem() {
    window.location.href = "/accounts/delete";
}
function click_submit() {
    window.location.href = "/accountspw";
}
function pw_click_eye() {
    var pwinput = document.getElementsByName('getpassword')[0];
    var pwbtn = document.getElementById('pw-btn');
    if (pwinput.type == 'password') {
        pwinput.type = 'text';
        pwbtn.textContent = 'Hide';
    } else {
        pwinput.type = 'password';
        pwbtn.textContent = 'Show';
    }
}
function pw_hover(index) {
    var name_obj_hover = 'hover_' + index;
    var name_obj_pw = 'pw_' + index;
    var name_obj_copy = 'copypw_' + index;
    var obj_hover = document.getElementById(name_obj_hover);
    var obj_pw = document.getElementById(name_obj_pw);
    var obj_copy = document.getElementById(name_obj_copy);

    console.log('on pw hovered')

    obj_hover.style.display = 'none';
    obj_copy.style.display = 'none';
    obj_pw.style.display = 'inline';
}
function pw_nohover(index) {
    var name_obj_hover = 'hover_' + index;
    var name_obj_pw = 'pw_' + index;
    var name_obj_copy = 'copypw_' + index;
    var obj_hover = document.getElementById(name_obj_hover);
    var obj_pw = document.getElementById(name_obj_pw);
    var obj_copy = document.getElementById(name_obj_copy);

    console.log('on pw not hovered more')

    obj_hover.style.display = 'inline';
    obj_copy.style.display = 'inline';
    obj_pw.style.display = 'none';
}
function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }
  
    return '';
}

function writeHeader() {
    if (getMeta('account_count') == 1) {
        let acctitle = document.getElementById('caption_u');
        acctitle.textContent = getMeta('account_count') + ' Account';
    }

    const getHeader = document.getElementById(header);
    //console.log(getHeader);
    let lochref = window.location.href;
    if (lochref.includes('account') == true) {
        if (lochref.includes('add') == true) {
            getHeader.innerHTML = headertext_account;
        } else {
            getHeader.innerHTML = headertext;
        }
    } else {
        getHeader.innerHTML = headertext;
    }
}


// END

window.onload = writeHeader;