function calculateAge(birthYear, birthMonth, birthDay) {
    var today = new Date();
    var todayYear = today.getFullYear ? today.getFullYear() : today.getYear() + 1900;
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();

    var age = todayYear - birthYear;

    if (todayMonth < birthMonth - 1 || (todayMonth === birthMonth - 1 && todayDay < birthDay)) {
        age--;
    }

    return age;
}