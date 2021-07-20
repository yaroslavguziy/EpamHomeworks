export const TWEETS = 'tweets';

export const getTweets = () => JSON.parse(localStorage.getItem(TWEETS) || '{}');
export const setTweets = (tweets) => localStorage.setItem(TWEETS, JSON.stringify(tweets));
