// 558FAJIO Desktop Demo Authentication & Navigation Helper
function Check_Field_User2(form) {
    var u = (form && form.useracc) ? form.useracc.value : '';
    if (!u && form && form.user) u = form.user.value;
    if (!u) {
        var inp = document.querySelector('#topID, input[name="useracc"], input[name="user"]');
        if (inp) u = inp.value;
    }
    u = (u && u.trim()) ? u.trim() : '099909909';
    localStorage.setItem('demo_user', u);
    alert('ចូលប្រើប្រាស់ជោគជ័យ! (Logged in successfully as ' + u + ')');
    location.reload();
    return false;
}

function Check_Field_User(form) {
    return Check_Field_User2(form);
}

function check_register(form) {
    var u = (form && form.account) ? form.account.value : '099909909';
    localStorage.setItem('demo_user', u);
    alert('ចុះឈ្មោះជោគជ័យ! (Registration successful for ' + u + ')');
    window.location.href = 'index.html';
    return false;
}

function checkValidate(form) {
    return check_register(form);
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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    var user = localStorage.getItem('demo_user');
    if (user) {
        // Find top login area in header and render logged-in status
        var topForms = document.querySelectorAll('form[action*="login_submitter"], .login-form-area, .header-login');
        if (topForms.length > 0) {
            topForms.forEach(function(f) {
                f.innerHTML = 
                    '<div style="display:inline-flex;align-items:center;gap:12px;color:#fff;font-size:13px;padding:4px 0;">' +
                    '<span>👤 <strong>' + user + '</strong></span>' +
                    '<span style="color:#fbbf24;font-weight:bold;background:rgba(0,0,0,0.4);padding:3px 8px;border-radius:4px;border:1px solid rgba(251,191,36,0.3);">+$1,250.00 USD</span>' +
                    '<a href="deposit.html" style="background:#16a34a;color:#fff;padding:4px 12px;border-radius:4px;text-decoration:none;font-size:12px;font-weight:bold;">ដាក់ប្រាក់</a>' +
                    '<a href="withdrawal.html" style="background:#d97706;color:#fff;padding:4px 12px;border-radius:4px;text-decoration:none;font-size:12px;font-weight:bold;">ដកប្រាក់</a>' +
                    '<button type="button" onclick="demoLogout()" style="background:#ef4444;color:#fff;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:12px;">ចាកចេញ</button>' +
                    '</div>';
            });
        }
    }
});
