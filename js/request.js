const API = `https://restcountries.com/v3.1/all`;

const overlay = document.querySelector(".overlay");

// showoverlay

const showOverlay = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

// get data

const getdata = async (resource) => {
  showOverlay(true);
  try {
    const request = await fetch(resource);

    if (request.ok) {
      const data = await request.json();
      showOverlay(false);
      return data;
    }
  } catch (error) {
    console.error("Xatolik", error.message);
    showOverlay(false);
  }
};
getdata(API)
  .then((data) => {
    return data;
  })
  .then((data) => {
    updateUI(data);
  })
  .catch((err) => {
    console.error("Malumot olishda hatolik", err.message);
  });

// const getCountry = async (resource) => {
//   showOverlay(true);
//   try {
//     const request = await fetch(resource);
//     if (request.ok) {
//       const data = await request.json();
//       showOverlay(false);
//       // console.log(data);

//       return data;
//     }
//   } catch (error) {
//     alert(error.message);
//     showOverlay(false);
//   }
// };
