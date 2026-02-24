function calculateAge(date) {
    const today = new Date();
    const appearance = new Date(date);
    let age = today.getFullYear() - appearance.getFullYear();
    const m = today.getMonth() - appearance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < appearance.getDate())) age--;
    return age;
}
