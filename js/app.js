const countries = document.querySelector(".countries");
const input = document.querySelector(".input");
const select = document.querySelector("select");
const modal = document.querySelector(".modal");

let selectValue;

select.addEventListener("change", () => {
  selectValue = select.value;

  let region = document.querySelectorAll(".region");

  region.forEach((item) => {
    if (!item.textContent.includes(selectValue)) {
      item.parentElement.parentElement.parentElement.classList.add("hidden");
    } else {
      item.parentElement.parentElement.parentElement.classList.remove("hidden");
    }
  });
});

input.addEventListener("input", () => {
  let inputValue = input.value.toLowerCase();
  const name = document.querySelectorAll(".name");
  //   console.log(name);

  name.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.parentElement.classList.add("hidden");
    }
  });
});

// updateUI

const updateUI = (data) => {
  countries.innerHTML = ``;

  data.forEach((item) => {
    // console.log(item);

    const { flags, population, name, region, capital } = item;
    countries.innerHTML += `

      <li class="country">
            <img src=${flags.png} alt="">
            <div class="country__intro">
                <h4 class="name">${name.common}</h4>
                <p>Population: <span>${population} </span></p>
                <p >Region: <span class='region'>${region} </span></p>
                <p>Capital: <span>${capital}</span></p>
            </div>
        </li>
    
    `;
  });
};

// update modal

const updateModal = (data) => {
  console.log(data);
  let item = data[0];
  console.log(item);

  modal.innerHTML = `
  
        <div  class="close"><i class="fa-solid fa-xmark"></i></div>
        <img src=${item?.flags.png} width="560" height=" 401">
        <div class="modal__intro">
            <h2 class="country__name">
              ${item?.name.common}
            </h2>
            <div class="country__desc">
                <div>
                    <p>Native Name:<span>${item?.name.common}</span></p>
                    <p>Population:<span>${item?.population}</span></p>
                    <p>Region:<span>${item?.region}</span></p>
                    <p>Sub Region:<span>${item?.subregion}</span></p>
                    <p>Capital:<span>${item?.capital}</span></p>
                </div>
                <div>
                    <p>Top Level Domain:<span>${item?.tld}</span></p>
                    
                    
                </div>
            </div>
            <h5 class="country__border">Border Countries: 
                <span>France</span>
                <span>Germany</span>
                <span>Netherlands</span>
             </h5>
        </div>

      
  
  `;

  modal.classList.remove("hidden");
};

let countryName;
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("country__intro")) {
    countryName = e.target.children[0].textContent;
    console.log(countryName);
  }

  getdata(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((data) => {
      return data;
    })
    .then((data) => {
      updateModal(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("fa-xmark")) {
    modal.classList.add("hidden");
  }
});






*/

/*

        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <img src="./images/flag-germany.png" width="560" height=" 401">
        <div class="modal__intro">
            <h2 class="country__name">
                Belgium
            </h2>
            <div class="country__desc">
                <div>
                    <p>Native Name:<span></span></p>
                    <p>Population:<span></span></p>
                    <p>Region:<span></span></p>
                    <p>Sub Region:<span></span></p>
                    <p>Capital:<span></span></p>
                </div>
                <div>
                    <p>Top Level Domain:<span></span></p>
                    <p>Currencies<span></span></p>
                    <p>Languages <span></span></p>
                </div>
            </div>
            <h5 class="country__border">Border Countries: 
                <span>France</span>
                <span>Germany</span>
                <span>Netherlands</span>
             </h5>
        </div>

      
*/
