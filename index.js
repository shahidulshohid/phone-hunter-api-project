const loadAllPhones = async (status, searchBox) => {
  // console.log('wow 3 minutes gone')
  document.getElementById("spinner").style.display = "none";

  const uri = `https://openapi.programming-hero.com/api/phones?search=${
    searchBox ? searchBox : "iphone"
  }`;
  //   const uri = 'https://openapi.programming-hero.com/api/phones?search=iphone'
  const res = await fetch(uri);
  const data = await res.json();

  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};

// for display those data
displayAllPhones = (phones) => {
  const phoneContainer = document.getElementById("phones-container");
  phones.forEach((phone) => {
    console.log(phone);
    const {brand, image, slug, } = phone
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card my-2 bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
        `;

    phoneContainer.appendChild(div);
  });
};

const handleShowAll = () => {
  loadAllPhones(true);
};

//handle search button
const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";
  const searchBox = document.getElementById("search-box").value;
  setTimeout(() => {
    loadAllPhones(false, searchBox);
  }, 3000);
};

const phoneDetails = (slug) => {
    console.log(slug)
}

loadAllPhones(false, "iphone");
