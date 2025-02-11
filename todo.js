document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn1");
    const ul = document.getElementById("list1");
    const f = document.frm;
    const s = f.ser;
  
    btn.addEventListener("click", () => {
      let item = prompt("Yangi vazifa kiriting:");
      if (item) {
        addTask(item.toUpperCase());
      }
    });
  
    function addTask(task) {
      let li = document.createElement("li");
      li.innerHTML = `${task} 
                      <button class="update-btn">Update</button>
                      <button class="delete-btn">Delete</button>`;
      ul.appendChild(li);
      addEventListeners(li);
    }
  
    function addEventListeners(li) {
      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });
  
      li.querySelector(".update-btn").addEventListener("click", () => {
        let newText = prompt("Vazifani yangilang:", li.firstChild.textContent.trim());
        if (newText) {
          li.firstChild.textContent = newText.toUpperCase() + " ";
        }
      });
    }
  
    function find(val) {
      let items = ul.querySelectorAll("li");
      items.forEach((x) => {
        if (!x.innerText.toUpperCase().includes(val.toUpperCase())) {
          x.classList.add("hide");
        } else {
          x.classList.remove("hide");
        }
      });
    }
  
    s.addEventListener("keyup", () => {
      find(s.value);
    });
  
    document.querySelectorAll("#list1 li").forEach(addEventListeners);
  });
  