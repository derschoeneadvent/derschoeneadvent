const adventskalender = {
  sources: [
    "https://www.ardaudiothek.de/embed?episode=78838668",
    "https://www.ardaudiothek.de/embed?episode=78867920",
    "https://www.ardaudiothek.de/embed?episode=78838296",
    "https://www.ardaudiothek.de/embed?episode=76915228",
    "https://www.ardaudiothek.de/embed?episode=78838504",
    "https://www.ardaudiothek.de/embed?episode=78296772",
    "https://www.ardaudiothek.de/embed?episode=77974242",
    "https://www.ardaudiothek.de/embed?episode=78838564",
    "https://www.ardaudiothek.de/embed?episode=75594324",
    "https://www.ardaudiothek.de/embed?episode=78838632",
    "https://www.ardaudiothek.de/embed?episode=61249324",
    "https://www.ardaudiothek.de/embed?episode=78838472",
    "https://www.ardaudiothek.de/embed?episode=80759232",
    "https://www.ardaudiothek.de/embed?episode=78838680",
    "https://www.ardaudiothek.de/embed?episode=78838648",
    "https://www.ardaudiothek.de/embed?episode=78838628",
    "https://www.ardaudiothek.de/embed?episode=74267594",
    "https://www.ardaudiothek.de/embed?episode=78838476",
    "https://www.ardaudiothek.de/embed?episode=78301928",
    "https://www.ardaudiothek.de/embed?episode=78838572",
    "https://www.ardaudiothek.de/embed?episode=62406986",
    "https://www.ardaudiothek.de/embed?episode=78838508",
    "https://www.ardaudiothek.de/embed?episode=78867956",
    "https://www.ardaudiothek.de/embed?episode=83450616",
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
