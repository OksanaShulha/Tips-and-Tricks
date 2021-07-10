const toggleClass = (obj, newClass) => {
  obj.classList[0].remove();
  obj.classList.add(newClass);
};
if (answer === true){
  toggleClass(target.green);
} else {
  toggleClass(target.red);
}
