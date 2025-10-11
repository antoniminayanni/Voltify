// ====== إنشاء حساب جديد ======
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-pass").value;
    const pass2 = document.getElementById("reg-pass2").value;

    if (pass !== pass2) {
        alert("كلمتا السر غير متطابقتين!");
        return;
    }

    // حفظ البيانات في localStorage
    const user = { name, email, pass };
    localStorage.setItem("user", JSON.stringify(user));

    alert("تم إنشاء الحساب بنجاح!");
    window.location.href = "index.html";
}

// ====== تسجيل الدخول ======
function loginUser(event) {
    event.preventDefault();

    const emailOrUser = document.getElementById("login-email").value;
    const pass = document.getElementById("login-pass").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("لا يوجد حساب مسجل!");
        return;
    }

    if ((emailOrUser === user.email || emailOrUser === user.name) && pass === user.pass) {
        alert("تم تسجيل الدخول بنجاح ✅");
        window.location.href = "shop.html";
    } else {
        alert("بيانات الدخول غير صحيحة ❌");
    }
}

// ====== نسيان كلمة المرور ======
function forgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById("forgot-email").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email) {
        alert("تم إرسال رابط استرجاع كلمة المرور (تجريبي) 📩");
    } else {
        alert("الإيميل غير مسجل ❌");
    }
}

// === Product Search Functionality ===
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");
    const products = document.querySelectorAll(".product");

    if (searchBox) {
        searchBox.addEventListener("keyup", () => {
            const term = searchBox.value.toLowerCase().trim();

            products.forEach(product => {
                const title = product.querySelector("h2").textContent.toLowerCase();
                const price = product.querySelector(".price").textContent.toLowerCase();

                if (title.includes(term) || price.includes(term)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    }
});