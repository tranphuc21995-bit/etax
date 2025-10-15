// Session helpers and DOM bindings for user info

function getCurrentUser() {
  try {
    const raw = localStorage.getItem('etax_user_info');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function requireAuth() {
  const logged = localStorage.getItem('etax_logged_in_user');
  if (!logged) {
    window.location.href = '/login.html';
    return false;
  }
  return true;
}

function bindText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) {
    el.textContent = value;
  }
}

function populateUserBindings() {
  const user = getCurrentUser() || {};
  const mst = user.mst || '';
  const fullName = user.fullName || '';

  // Common header bindings
  bindText('user-name', fullName.toUpperCase());
  bindText('username', fullName.toUpperCase());
  bindText('user-mst', mst ? `MST: ${mst}` : '');
  bindText('tax_id', mst);
  bindText('slide-username', fullName);

  // Detail panel bindings
  bindText('info-mst', mst);
  bindText('info-name', fullName);
  bindText('info-address', user.address || '');
  bindText('info-taxoffice', user.taxOffice || '');
  bindText('info-phonenumber', user.phoneNumber || '');
  bindText('info-email', user.email || '');
  
  // Additional info bindings
  bindText('info-dateOfBirth', user.dateOfBirth || '');
  bindText('info-gender', user.gender || '');
  bindText('info-nationality', user.nationality || '');
  bindText('info-placeOfOrigin', user.placeOfOrigin || '');
  bindText('info-idNumber', user.idNumber || '');
}

window.userSession = {
  getCurrentUser,
  requireAuth,
  populateUserBindings
};


