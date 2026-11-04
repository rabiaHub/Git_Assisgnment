
// 1. INTERACTIVE FORM HANDLING & VALIDATION


const form = document.querySelector("#booking-form");

form.addEventListener("submit", function(e) {

 
  e.preventDefault();

  
  const username = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  const birthYear = document.querySelector("#birth-year").value;

  const year = parseInt(birthYear);

  const age = 2026 - year;

 
  const message = document.querySelector("#booking-message");


  if (username !== "" && email !== "")
     {

    
    if (!isNaN(year)) {

      if (age <= 25 || age >= 60) {

        message.textContent =d
          `Thank you for visiting, ${username}! ` +
          `We will contact you at ${email}. ` +
          `You are ${age} years old and qualify for a special discount!`;

      } else {

        message.textContent =
          `Thank you for visiting, ${username}! ` +
          `We will contact you at ${email}. ` +
          `You are ${age} years old.`;

      }

    } else {

      message.textContent =
        `Thank you for visiting, ${username}! ` +
        `We will contact you at ${email}. ` +
        `Please enter a valid birth year for discount verification.`;

    }

  }

});



// 2. TABLE ROW HIGHLIGHTING


const rows = document.querySelectorAll(".showtime-row");


rows.forEach((row)=> {

  row.addEventListener("mouseover", ()=> { 

    row.style.backgroundColor = "#333";

  });



  row.addEventListener("mouseout", ()=> {

    row.style.backgroundColor = "";

  });

});



// 3. LIGHT / DARK MODE


const themeButton = document.querySelector("#theme-toggle");


themeButton.addEventListener("click", function() {

  document.body.classList.toggle("light-mode");

});


// 4. INTERACTIVE ORDER / TICKET TOTAL


const movieItems = document.querySelectorAll(".movie-item");

const total = document.querySelector("#total");


movieItems.forEach(function(item) {

  item.addEventListener("change", function() {

    let sum = 0;


   
    movieItems.forEach(function(movie) {

      if (movie.checked) {

        
        sum = sum + parseFloat(movie.dataset.price);

      }

    });


    // Display total
    total.textContent =
      `Total: $${sum.toFixed(2)}`;

  });

});



// 6. READ MORE / READ LESS


const readMoreButton =
  document.querySelector("#read-more-btn");

const extraText =
  document.querySelector("#extra-text");


readMoreButton.addEventListener("click", function() {

  if (
    extraText.style.display === "none" ||
    extraText.style.display === ""
  ) {

    
    extraText.style.display = "block";
    readMoreButton.textContent = "Read Less";

  } else {

   
    extraText.style.display = "none";

    readMoreButton.textContent = "Read More";

  }

});


// 7. LIVE CATEGORY FILTER


const filterButtons =
  document.querySelectorAll(".filter-btn");


filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

   
    const category =
      button.dataset.category;


    rows.forEach(function(row) {

      if (category === "all") {

        row.style.display = "";

      }

      else if (
        row.dataset.category === category
      ) {

        row.style.display = "";

      }

      
      else {

        row.style.display = "none";

      }

    });

  });

});


// 8. DYNAMIC OPENING STATUS


const openingStatus =
  document.querySelector("#opening-status");



const currentHour =
  new Date().getHours();


if (currentHour >= 8 && currentHour < 5) 
  {

  openingStatus.textContent =
    "We are Open!";

  openingStatus.classList.add("open");

} else {

  openingStatus.textContent =
    "Closed - Open at 8 AM";

  openingStatus.classList.add("closed");

}


// 9. CHARACTER COUNTER

const specialNotes =
  document.querySelector("#special-notes");

const charCount =
  document.querySelector("#char-count");


specialNotes.addEventListener("input", function() {

  const remaining =
    100 - specialNotes.value.length;


  charCount.textContent =
    `${remaining} characters remaining`;

});
