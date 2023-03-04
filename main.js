const getResidentsBtn = document.querySelector("button");

const baseURL = function whenBtnIsClicked(searchInquiry) {
  axios
    .get(`https://swapi.dev/api/people/?search=${searchInquiry}`)
    .then((response) => {
      const results = response.data.results;
      for (let i = 0; i < results.length; i++) {
        axios.get(results[i].url).then((res) => {
          const newH2 = document.createElement("h2");
          newH2.textContent = res.data.name;
          document.body.appendChild(newH2);
        });
      }
    });
};

getResidentsBtn.addEventListener("click", whenBtnIsClicked);
