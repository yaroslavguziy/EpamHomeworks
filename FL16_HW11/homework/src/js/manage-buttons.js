import { getTweets } from './locale-storage';

export const navigationButtonsEl = document.getElementById('navigationButtons');

export const manageButtons = () => {
  if (location.hash === '#/liked') {
    navigationButtonsEl.innerHTML = '';
    navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="back">back</button>`);
  } else {
    const isLiked = Object.values(getTweets()).some(({ like }) => like);
    navigationButtonsEl.innerHTML = '';
    navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="addTweet">Add Tweet</button>`);
    if (isLiked) {
      navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="liked-tweets">go to liked</button>`);
    } else {
      navigationButtonsEl.insertAdjacentHTML('beforeend', `<button class="addTweet">Add Tweet</button>`);
      navigationButtonsEl.lastChild.remove();
    }
  }
};
