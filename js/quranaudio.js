let SurahsTitels = document.querySelectorAll('.surah');
         let popup = document.querySelector('.surah-popup');
let SurahsContainer = document.querySelector('.surahsContainer'); 
getSurahs()
function getSurahs()
{
    fetch("http://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data=>{
        let surahs = data.data.surahs.references;
        let numberOfSurahs = 114;
        SurahsContainer.innerHTML = "";
        for (let i = 0; i < numberOfSurahs; i++) {
            
            SurahsContainer.innerHTML +=`
            <div class="surah">
            <p>${surahs[i].name}</p>
            <p>${surahs[i].englishName}</p>
            <p>${surahs[i].numberOfAyahs} ايه</p>
            <p>${surahs[i].revelationType}</p>
            
                
            ` 
        }
    

        let SurahsTitels = document.querySelectorAll('.surah');
         let popup = document.querySelector('.surah-popup'),
           AyatContainer = document.querySelector('.ayat');
           SurahsTitels.forEach((title,index)=>{
            title.addEventListener('click',()=>{
                fetch(`http://api.alquran.cloud/v1/surah/${index +1}`)
                .then(response => response.json())
                .then(data=>{
                    AyatContainer.innerHTML = "";
                    let Ayat =  data.data.ayahs;
                    Ayat.forEach(aya=>{
                        popup.classList.add('active');
                        AyatContainer.innerHTML += `
                        <div class="ayat">
                        <p>{${aya.numberInSurah}} - ${aya.text}</p>
                        
                </div>
                        `
                    })
                })
            })


            let closePopup = document.querySelector('.close-popup');
            closePopup.addEventListener('click',()=>{
                popup.classList.remove('active');
            })
           })
        })
    }
