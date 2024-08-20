function ageCalculator(){
    // collecing input  from html form and turn into date format
let inputDate=document.getElementById('birthday').value;
let DOB=new Date(inputDate);
   // checking if user provide input or not 
 if (DOB == null || DOB == ''){
    document.getElementById('message').innerHTML='#Choose a Date please';
    return false;
 }

 //extract date, month and year
else{
    let DOByear=DOB.getFullYear();
    let DOBmonth=DOB.getMonth();
    let DOBday =DOB.getDate();
   // console.log(DOBday);
    //get the current 
    let Now=new Date();
    //extracting current date , mont , year

    let Currentyear=Now.getFullYear();
    let Currentmonth=Now.getMonth();
    let Currentday=Now.getDate();
    //console.log(Currentday);
    // declaring variable to store  age , year and month 
    
    let age={};
    let ageString='';
    let yearAge=0;
    let monthAge=0;
    let dateAge;

    // get years 

     yearAge= Currentyear-DOByear;
     
    // get months
   
    if(Currentmonth>= DOBmonth){
         monthAge=Currentmonth-DOBmonth;
    }else{
        yearAge--;
         monthAge=12+Currentmonth-DOBmonth;
    }

    //getDays
    
    if(Currentday>=DOBday)
    {
         dateAge=Currentday-DOBday;
        // 
    }else{
        monthAge--;
         dateAge=31+Currentday-DOBday;
         //console.log(DOBday);
        if( monthAge<0){
            monthAge=11;
            yearAge--;
        }
    }
    //grouping the age in object
      
        age={
       years:yearAge,
       months:monthAge,
       days:dateAge
        };

      ageString=`${age.years}  years  ${age.months}  months  ${age.days}  days `;
      
      return document.getElementById('result').innerHTML=ageString;

}



}