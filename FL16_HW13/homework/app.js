const appRoot = document.getElementById('app-root');

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
      <th >
        Country name <span class="arrow" id="country">&#129057;</span>
      </th>
      <th>Capital</th>
      <th>World region</th>
      <th class="languages">Languages</th>
      <th >
        Area <span class="arrow" id="area">&#129057;</span>
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
const table = document.getElementById('table');
const countryName = document.getElementById('country');
const area = document.getElementById('area');
const sortObj = { asc: [1, -1], desc: [-1, 1] };

const MAP_RADIO_TO_FUNCTION = { region: 'getCountryListByRegion', language: 'getCountryListByLanguage' };
const MAP_TO_LIST = { region: 'getRegionsList', language: 'getLanguagesList' };

function getSelectData() {
  const radioValue = document.querySelector('input[name="radio"]:checked').value;
  searchSelect.innerHTML = '<option>Select value</option>';

  externalService[MAP_TO_LIST[radioValue]]().forEach((value) => {
    searchSelect.insertAdjacentHTML('beforeend', `<option value="${value}">${value}</option>`);
  });

  searchSelect.disabled = false;
  message.classList.add('show');
  table.classList.remove('table-show');
}

function getTableData({ sortBy = 'name', sortDir = 'asc' }) {
  let dom = '';
  message.classList.remove('show');
  const radioValue = document.querySelector('input[name="radio"]:checked').value;
  const selectValue = searchSelect.value;
  table.classList.add('table-show');

  externalService[MAP_RADIO_TO_FUNCTION[radioValue]](selectValue)
    .sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return sortObj[sortDir][0];
      } else {
        return sortObj[sortDir][1];
      }
    })
    .forEach(({ name, flagURL, region, area, capital, languages }) => {
      let languageList;

      for (language in languages) {
        languageList = languages[language];
      }

      dom =
        dom +
        `<tr>
      <td>${name}</td>
      <td>${capital}</td>
      <td>${region}</td>
      <td>${languageList}</td>
      <td>${area}</td>
      <td><img src="${flagURL}"/></td>
    </tr>`;
    });

  const tBody = document.getElementsByTagName('tbody')[0];

  if (tBody) {
    tBody.remove();
  }
  table.insertAdjacentHTML('beforeend', dom);
}

radioInputs.forEach((input) => {
  input.addEventListener('change', getSelectData);
});

searchSelect.addEventListener('change', getTableData);

countryName.addEventListener('click', () => {
  countryName.classList.toggle('arrow-transform');
  getTableData({ sortBy: 'name', sortDir: countryName.classList.contains('arrow-transform') ? 'desc' : 'asc' });
});

area.addEventListener('click', () => {
  area.classList.toggle('arrow-transform');

  getTableData({ sortBy: 'area', sortDir: area.classList.contains('arrow-transform') ? 'desc' : 'asc' });
});
