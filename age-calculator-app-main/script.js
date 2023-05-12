function calculateAge() {
   var inputDay = parseInt(document.getElementById('day').value);
   var inputMonth = parseInt(document.getElementById('month').value);
   var inputYear = parseInt(document.getElementById('year').value);

   var currentDate = new Date();
   var currentDay = currentDate.getDay();
   var currentMonth = currentDate.getMonth() + 1;
   var currentYear = currentDate.getFullYear();

   var ageYears = currentYear - inputYear;
   var ageMonths = currentMonth - inputMonth;
   var ageDays = currentDay - inputDay;

   if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
    ageYears--;
    ageMonths = 12 + ageMonths;
   }

   document.getElementById('ageYears').textContent = ageYears;
   document.getElementById('ageMonths').textContent = ageMonths;
   document.getElementById('ageDays').textContent = ageDays;
}

document.getElementById('arrowimg').addEventListener('click', calculateAge);