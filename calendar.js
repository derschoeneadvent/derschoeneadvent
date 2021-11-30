const adventskalender = {
  sources: [
    "https://www.ardaudiothek.de/embed?episode=84688300",
    "https://www.ardaudiothek.de/embed?episode=94523998",
    "https://www.ardaudiothek.de/embed?episode=85030828",
    "https://www.ardaudiothek.de/embed?episode=84589086",
    "https://www.ardaudiothek.de/embed?episode=87030760",
    "https://www.ardaudiothek.de/embed?episode=87239606",
    "https://www.ardaudiothek.de/embed?episode=87761774",
    "https://www.ardaudiothek.de/embed?episode=84027834",
    "https://www.ardaudiothek.de/embed?episode=85505206",
    "https://www.ardaudiothek.de/embed?episode=84139538",
    "https://www.ardaudiothek.de/embed?episode=84144224",
    "https://www.ardaudiothek.de/embed?episode=84146556",
    "https://www.ardaudiothek.de/embed?episode=85254614",
    "https://www.ardaudiothek.de/embed?episode=84595558",
    "https://www.ardaudiothek.de/embed?episode=84655810",
    "https://www.ardaudiothek.de/embed?episode=84595366",
    "https://www.ardaudiothek.de/embed?episode=90816730",
    "https://www.ardaudiothek.de/embed?episode=91118574",
    "https://www.ardaudiothek.de/embed?episode=91324088",
    "https://www.ardaudiothek.de/embed?episode=91472444",
    "https://www.ardaudiothek.de/embed?episode=86805748",
    "https://www.ardaudiothek.de/embed?episode=86179404",
    "https://www.ardaudiothek.de/embed?episode=94118326",
    "https://www.ardaudiothek.de/embed?episode=89294766",
  ],
  init: function () {
    this.cacheDom();
    this.bindEvents();
    this.checkDate();
  },
  cacheDom: function () {
    this.inputs = document.querySelectorAll("input");
    this.iframe = document.getElementById("my-iframe");
    this.grid = document.querySelector(".grid-1");
  },
  bindEvents: function () {
    this.grid.addEventListener(
      "click",
      function (event) {
        this.handleSources(event);
      }.bind(this)
    );
  },
  checkDate: function () {
    // Get the current Date and the current Day
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    // Check if it is December
    if (currentMonth + 1 === 12) {
      // Loop through every input and get its Day
      this.inputs.forEach((input) => {
        let day = parseInt(input.nextElementSibling.children[0].textContent);
        //console.log(day);

        // Compare the current day with each day of every input

        if (currentDay >= day) {
          input.removeAttribute("disabled");
        } else {
          return;
        }
      });
    } else {
      return;
    }
  },
  handleSources: function (event) {
    //Note: Disabled checkboxes do not fire on click events!

    // Check if an input was clicked
    if (event.target.tagName === "INPUT" && event.target.checked) {
      // Get the day (number) of the input that was clicked
      const clickedDay = parseInt(
        event.target.nextElementSibling.children[0].textContent
      );
      // Add the corresponding source to the iframe
      // And check if source is already active
      if (this.iframe.getAttribute("src") === this.sources[clickedDay - 1]) {
        $("#adventskalenderModal").modal("show");
      } else {

        this.iframe.setAttribute("src", this.sources[clickedDay - 1]);
      }

      // Open Modal
      $("#adventskalenderModal").modal("show");
    } else {
      return;
    }
  },
};

adventskalender.init();
