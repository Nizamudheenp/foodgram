/* list section start*/
const bar = document.getElementById("bar");
const list = document.getElementById("list");
const close = document.getElementById("close");
const spots = document.getElementById("spots");

if (bar) {
  bar.addEventListener("click", () => {
    list.classList.add("active");
    spots.classList.add("active");
  })
}

if (close) {
  close.addEventListener("click", () => {
    list.classList.remove("active");
    spots.classList.remove("active");
  })
}

/* list section end*/



const goToRegister = document.getElementById("go-to-register");
const logOutBtn = document.getElementById("logoutBtn");

window.addEventListener('scroll', () => {
  if (window.scrollY > 300 && sessionStorage.length <= 1) { // Show popup after 300px scroll
    document.querySelector('.login-popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
  }
});



goToRegister.addEventListener("click", () => {
  document.querySelector('.register-popup').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
  document.querySelector('.login-popup').style.display = 'none';

});

// reg section start


document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault();

  let rname = document.getElementById("regName").value;
  let rusername = document.getElementById("regUserName").value;
  let rpassword = document.getElementById("regPassword").value;
  let rconformPassword = document.getElementById("regConform-password").value;

  if (rpassword !== rconformPassword) {
    alert("password don't match")
    return;
  }

  const user = {
    name: rname,
    username: rusername,
    password: rpassword
  }

  localStorage.setItem(rusername, JSON.stringify(user));
  alert("registration successful!  please login..");
  document.querySelector('.register-popup').style.display = 'none';
  document.querySelector('.login-popup').style.display = 'block';

});

// reg section end

// log section start

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  let user = localStorage.getItem(username);

  if (user) {
    let parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
      localStorage.setItem("user", JSON.stringify(parsedUser));
      sessionStorage.setItem("user", JSON.stringify(parsedUser));
      window.location.href = "homepage.html";
    } else {
      alert("incorrect password");
    }
  } else {
    alert("user not found");
  }
});

if (sessionStorage.length >= 2) {
  logOutBtn.innerHTML = "LOGOUT";
}

// log section end

// log out section start
document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.reload();
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");

});


// log out section end

