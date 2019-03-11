$(function(){
    $('#age').text('年齢 ' + getAge(1989,5,15) + '歳');

function getAge(year, month, day) {
  var birthday  = new Date(year, month-1, day);
  var today = new Date();
  var thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());  
  var age = today.getFullYear() - birthday.getFullYear();
  return (today < thisYearBirthday)?age-1:age;
}

})