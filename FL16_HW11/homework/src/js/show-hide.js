const modifyItem = document.getElementById('modifyItem');
const tweetItems = document.getElementById('tweetItems');
const alertMessageEl = document.getElementById('alertMessage');

export const showMessage = () => {
  alertMessageEl.style.display = 'block';
  alertMessageEl.classList.add('show-error');
};

export const hideMessage = () => {
  alertMessageEl.style.display = 'none';
};

export const showTweets = () => {
  modifyItem.style.display = 'none';
  tweetItems.style.display = 'block';
};
export const hideTweets = () => {
  modifyItem.style.display = 'block';
  tweetItems.style.display = 'none';
};
