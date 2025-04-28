

function closeModal() {
    document.getElementById("modal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function confirmBookingModal() {
    let name = document.getElementById("bookingName").value;
    let contact = document.getElementById("bookingContact").value;
    let bookingDate = document.getElementById("bookingDate").value;
    let bookingAddress = document.getElementById("bookingAddress").value;
    let machine = document.getElementById("machineType").value;

    if (name && contact && bookingDate && machine && bookingAddress) {
        alert(`Booking Confirmed!\nMachine: ${machine}\nName: ${name}\nDate: ${bookingDate}\nContact: ${contact}\nAddress: ${bookingAddress}`);
        closeModal();
    } else {
        alert("Please fill in all fields!");
    }
}



function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}

function bookNow() {
    window.location.href = "booking.html";
}



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85; 

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check
});
function submitBooking() {
  const name = document.getElementById("bookingName").value;
  const contact = document.getElementById("bookingContact").value;
  const address = document.getElementById("bookingAddress").value;
  const date = document.getElementById("bookingDate").value;
  const machine = document.getElementById("machineType").value;

  if (!name || !contact || !address || !date || !machine) {
      alert("Please fill all the fields.");
      return;
  }

  const data = {
      name: name,
      contact: contact,
      address: address,
      date: date,
      machine: machine
  };

  fetch("https://script.google.com/macros/s/AKfycbzTr5qck3Hqsc0KLZbwHiwt7UHAydMrbuvjCSqWi-lMCQaVF_fVtv3-mX_08R8tgpbw/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
  })
  .then(() => {
      alert("Booking submitted successfully!");
      // clear fields
      document.getElementById("bookingName").value = "";
      document.getElementById("bookingContact").value = "";
      document.getElementById("bookingAddress").value = "";
      document.getElementById("bookingDate").value = "";
      document.getElementById("machineType").value = "";
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Error submitting booking.");
  });
}


    
