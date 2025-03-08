console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
  return `<li
            class="list-group-item list-group-info d-flex align-items-center justify-content-between"
          >
            <span class="item-text">${item.reja}</span>
            <div>
              <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
              >
                Ozgartirish
              </button>
              <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm"
                style="background-color: red; color: white"
              >
                Ochirish
              </button>
            </div>
          </li>`;
}

let createField = document.getElementById("create-field");
// 1 step reja input selekt(tanlab olyapmiz) qilyapmiz
document.getElementById("create-form").addEventListener("submit", function (e) {
  //2 step formni tanlab ichida sammit hodisa ro'y bersa function ishlaydi
  e.preventDefault(); // 3 step tradetion API ni to'xtatyapmiz
  console.log("reja:", createField.value);

  axios
    .post("/create-item", { reja: createField.value }) // 4 step axios yordamida backentdagi /create-itemga manzilga recuves (malumot)yuboryapmiz
    .then((response) => {
      console.log("response", response.data); // 8 step beck and dan javob keldi
      document
        .getElementById("item-list") // 9step malumotni front and ga rendor(chiqaryapmiz) qilyapmiz
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos, qaytadan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  //delete oper
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      // alert("Yes deb javeob berildi");
      //   } else {
      //     //  alert("No deb javob berildi");
    }
    axios
      .post("/delete-item", { id: e.target.getAttribute("data-id") })
      .then((respose) => {
        console.log(respose.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Iltumos qaytadan harakat qiling");
      });
  }

  //edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltumos qaytadan harakat qiling");
        });
    }
  }
});
document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
