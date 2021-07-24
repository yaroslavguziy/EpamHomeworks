class BirthdayService {
  howLongToMyBirthday(date) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject;
        return resolve;
      }, 100);
    });
  }
}
