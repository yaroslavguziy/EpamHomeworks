const appRoot = document.getElementById('app-root');

/*
write your code here


list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/

appRoot.insertAdjacentHTML('afterbegin', `<h1 class="app-title">Countries Search</h1>`);
const form = document.createElement('form');
form.classList.add('form');
appRoot.append(form);

form.insertAdjacentHTML(
  'afterbegin',
  `
<div class="form-group">
  <span>Please choose the type of search:</span>
  <div class="group-left">
    <div>
      <input name="radio" value="region" type="radio" id="region"  class="radio-input" />
      <label for="region">By Region</label>
    </div>
    <div>
      <input name="radio" value="language" type="radio" id="language" class="radio-input" />
      <label for="language">By Language</label>
    </div>
  </div>
</div>
<div class="form-group">
  <label for="search">Please choose search query:</label>
  <select id="select" disabled>
  <option>Select value</option>
  </select>
</div>
<p class ="message" id="message">No items, please choose 
  search query</p>
`
);

appRoot.insertAdjacentHTML(
  'beforeend',
  `
<table class="table" id="table">
  <thead>
    <tr>
      <th id="country">
        Country name <span class="arrow ">&#129057;</span>
      </th>
      <th>Capital</th>
      <th>World region</th>
      <th class="languages">Languages</th>
      <th id="area">
        Area<span class="arrow ">&#129057;</span>
      </th>
      <th>Flag</th>
    </tr>
  </thead>
</table>
`
);
const message = document.getElementById('message');
const regionInput = document.getElementById('region');
const languageInput = document.getElementById('language');
const radioInputs = document.querySelectorAll('.radio-input');
const searchSelect = document.getElementById('select');
const regionList = externalService.getRegionsList();
const languagesList = externalService.getLanguagesList();
const table = document.getElementById('table');
const countryName = document.getElementById('table');
const area = document.getElementById('area');
const MAP_RADIO_TO_FUNCTION = { region: 'getCountryListByRegion', language: 'getCountryListByLanguage' };

function addLanguagesList() {
  return languagesList.forEach((language) => {
    searchSelect.insertAdjacentHTML('beforeend', `<option value="${language}">${language}</option>`);
  });
}

function addRegionList() {
  return regionList.forEach((region) => {
    searchSelect.insertAdjacentHTML('beforeend', `<option value="${region}">${region}</option>`);
  });
}
let radioValue;

radioInputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    radioValue = e.currentTarget.value;
    console.log(radioValue);
    searchSelect.disabled = false;
    addRegionList();
    message.classList.add('show');
  });
});


searchSelect.addEventListener('change', ({ target }) => {
  console.log(typeof target.value);
  message.classList.remove('show');
  let dom = '';
  externalService[MAP_RADIO_TO_FUNCTION['region']](target.value).forEach(
    ({ name, flagURL, region, area, capital, languages }) => {
      dom =
        dom +
        `<tr>
      <td>${name}</td>
      <td>${capital}</td>
      <td>${region}</td>
      <td>${languages}</td>
      <td>${area}</td>
      <td><img src="${flagURL}"/></td>
    </tr>`;
    }
  );
  table.insertAdjacentHTML('beforeend', dom);
});

// radioInputs.addEventListener('click', (e) => {
//   console.log(e.target);
// });

// form.addEventListener('click', ({ target }) => console.log(target.value));
// regionInput.addEventListener('click', ({ target }) => {
//   console.log(target.value);
//   searchSelect.disabled = false;
//   addRegionList();
//   message.classList.toggle('show');
// });

// languageInput.addEventListener('click', ({ target }) => {
//   console.log(target.value);
//   searchSelect.disabled = false;
//   addLanguagesList();
//   message.classList.toggle('show');
// });
