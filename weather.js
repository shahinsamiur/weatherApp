 // openweather 
 //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 // 3a2943e318e46bb77dc45d0138fa8b23
 //http://api.openweathermap.org/data/2.5/weather?q=Dhaka,uk&APPID=3a2943e318e46bb77dc45d0138fa8b23


 //  api.openweathermap.org/data/2.5/weather?q={dhaka}&appid={3a2943e318e46bb77dc45d0138fa8b23}


 var submit = document.querySelector("button");
 var search_box = document.querySelector(".search-box");
 var Time = document.querySelector("Time");
 var output = document.querySelector(".output");
 var deg_point = document.querySelector(".deg-point")
 var date = document.querySelector(".date")



 // date code on output









 // date code on output


 // Month code on output header start


 var Date = new Date()

 var month = Date.getMonth() + 1;
 var today_date = Date.getDate();

 switch (month) {
     case 1:
         date.innerHTML = `${today_date}th January`
         break;

     case 2:
         date.innerHTML = `${today_date}th February`
         break;


     case 3:
         date.innerHTML = `${today_date}th March`
         break;

     case 4:
         date.innerHTML = `${today_date}th April`
         break;


     case 5:
         date.innerHTML = `${today_date}th May`
         break;

     case 6:
         date.innerHTML = `${today_date}th June`
         break;


     case 7:
         date.innerHTML = `${today_date}th Jully`
         break;

     case 8:
         date.innerHTML = `${today_date}th August`
         break;


     case 9:
         date.innerHTML = `${today_date}th September`
         break;

     case 10:
         date.innerHTML = `${today_date}th October`
         break;


     case 11:
         date.innerHTML = `${today_date}th November`
         break;

     case 12:
         date.innerHTML = `${today_date}th December`
         break;




     default:
         break;
 }





 // Month code on output header end


 // weather chack with api 

 submit.addEventListener('click', async(e) => {
     e.preventDefault()
     var search_box_val = document.querySelector(".search-box").value.trim()

     if (search_box_val === "") {
         output.innerHTML = ' Please search with your  city name ';
     } else if (search_box_val.length <= 1) {

         output.innerHTML = 'Please enter a valid  city name ';
     } else {

         try {
             const api_link = `https://api.openweathermap.org/data/2.5/weather?q=${search_box_val}&appid=3a2943e318e46bb77dc45d0138fa8b23`;
             const api = fetch(api_link).then((res) => {
                 return res.json();
             }).then((result) => {
                 var satusCode = result.cod;

                 if (satusCode === 200) {
                     output.innerHTML = ` ${result.name}    ${result.sys.country}`;
                     var temp = result.main.temp_max - 273
                     var temp = Math.round(temp)
                     deg_point.innerHTML = temp;
                 } else {
                     output.innerHTML = 'Please enter a valid  city name ';
                     deg_point.innerHTML = '0';
                 }
             }).catch((err) => {
                 output.innerHTML = 'We Are Sorry Please Try Agine  ';
             })
         } catch (error) {
             console.log('in catch')
         }

     }
 })





 // End