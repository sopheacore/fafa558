// 558FAJIO Mobile Demo Authentication & Navigation Helper
function Check_Field_User2(form) {
    return mobileLogin(form);
}
function Check_Field_User(form) {
    return mobileLogin(form);
}
function checkValidate(form) {
    return check_register(form);
}

function check_register(form) {
    var u = (form && form.account) ? form.account.value : '';
    if (!u) {
        var inp = document.querySelector('input[name="account"], input[name="username"]');
        if (inp) u = inp.value;
    }
    u = (u && u.trim()) ? u.trim() : '099909909';
    localStorage.setItem('demo_user', u);
    alert('ចុះឈ្មោះជោគជ័យ! (Registration successful for ' + u + ')');
    window.location.href = 'index.html';
    return false;
}

function mobileLogin(form) {
    var u = '';
    if (form) {
        if (form.user) u = form.user.value;
        else if (form.username) u = form.username.value;
        else if (form.account) u = form.account.value;
    }
    if (!u) {
        var inp = document.querySelector('#username, input[name="user"], input[name="username"]');
        if (inp) u = inp.value;
    }
    u = (u && u.trim()) ? u.trim() : '099909909';
    localStorage.setItem('demo_user', u);
    alert('ចូលប្រើជោគជ័យ! (Logged in successfully as ' + u + ')');
    window.location.href = 'index.html';
    return false;
}

function demoLogout() {
    localStorage.removeItem('demo_user');
    alert('បានចាកចេញដោយជោគជ័យ! (Logged out successfully)');
    location.reload();
}

function demoQuickLogin() {
    localStorage.setItem('demo_user', '099909909');
    location.reload();
}

// Mobile DOM Initialization
document.addEventListener('DOMContentLoaded', function() {
    var user = localStorage.getItem('demo_user');
    if (user) {
        var rightHeader = document.querySelector('.header-right1');
        if (rightHeader) {
            rightHeader.innerHTML = 
                '<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#fff;">' +
                '<span style="max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">👤 ' + user + '</span>' +
                '<span style="color:#fbbf24;font-weight:bold;background:rgba(0,0,0,0.3);padding:2px 5px;border-radius:3px;">$1,250.00</span>' +
                '<button type="button" onclick="demoLogout()" style="background:#ef4444;color:#fff;border:none;padding:3px 6px;border-radius:3px;font-size:10px;cursor:pointer;">ចាកចេញ</button>' +
                '</div>';
        }
    }

    // Attach form listener to form-login if present
    var formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            mobileLogin(formLogin);
        });
    }

    var formRegister = document.getElementById('form1');
    if (formRegister) {
        formRegister.addEventListener('submit', function(e) {
            e.preventDefault();
            check_register(formRegister);
        });
    }
});
