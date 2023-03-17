const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) 


const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }
    if(hh == 0){hh = 12}

    if(hh < 10){hh = `0${hh}`}

    
    textHour.innerHTML = `${hh}:`
    
   
    if(mm < 10){mm = `0${mm}`}
    
   
    textMinutes.innerHTML = mm

 
    textAmPm.innerHTML = ampm

     let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) 

// PRAY
let cards = document.querySelector('.cards');
function getPrayerTimes(latitude, longitude){
    const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=4`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
    
    const timings = data.data.timings;
    cards.innerHTML = "";
    
    const prayersTimes = {
     الفجر : timings.Fajr,
     الشروق : timings.Sunrise,
     الظهر : timings.Dhuhr,
     العصر : timings.Asr,
     المغرب : timings.Maghrib,
     العشاء : timings.Isha,
}

    for (const time in prayersTimes) {

            cards.innerHTML +=
                `
                <div class="card">
                <div class="circle">
                <svg>
                <Circle cx="100" cy="100" r="100"></Circle>
            </svg>
    
            <div class="prayTime" style="color: #CD9A51">${prayersTimes[time]}</div>
            </div>
                    
                    <div dir="ltr"> 
                    <p style="color: #607BAF">${time}</p>
                    
                    </div>
                </div>
    
                    
            `
            
        }

      });
  }

 
  navigator.geolocation.watchPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.getElementById("latitude").innerHTML = latitude;
      document.getElementById("longitude").innerHTML = longitude;
      getPrayerTimes(latitude, longitude);
    },
    
  );
