document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value.trim(), 10);

        if (!name || isNaN(age)) {
          alert("Please fill out all fields correctly.");
          return;
        }

        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (age > 18) {
              resolve();
            } else {
              reject();
            }
          }, 4000); // 4-second delay
        })
          .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
          })
          .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
          });
      });