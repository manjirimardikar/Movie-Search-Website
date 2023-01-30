const selectinput= document.getElementById("selectinput")
let selectvalue =selectinput.value
const movies= document.getElementById("movies")
const series= document.getElementById("series")

const cards= document.getElementById("cards")

radioone()

 function hello(){
    selectvalue =selectinput.value
    console.log("day",selectvalue)

    if(movies.checked == true && selectvalue =="day"){
 movies.addEventListener('change', moviesearch(selectvalue))
        // console.log("day",selectvalue)
        
    }
    else if(movies.checked==true && selectvalue=="week"){
        movies.addEventListener('change', moviesearch(selectvalue))

        // console.log("week",selectvalue)
    }
    else if(series.checked==true && selectvalue=="day"){
        series.addEventListener('rad', seriessearch(selectvalue))

        // console.log("week",selectvalue)
    }
    else if(series.checked==true && selectvalue=="week"){
        series.addEventListener('change', seriessearch(selectvalue))

        // console.log("week",selectvalue)
    }

 }

 function radioone(){
    moviesearch(selectvalue)
 }
 function radiotwo(){
    seriessearch(selectvalue)
 }


 async function moviesearch(selectvalue){
    cards.innerHTML=""
     const res=  await fetch(`https://api.themoviedb.org/3/trending/movie/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     const data = await res.json()
     console.log(data.results);
     
     data.results.map((ele)=>{
        const date=ele.first_air_date
       console.log(date)
        cards.innerHTML +=` 
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />
        <div class="imgcontent">
        <h3>${ele.title}</h3>
        
        <small>${ele.release_date }</small>
        </div>
        <div class="votingpercent">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>
        
    </div>`
    

       

     })
    
     
}


async function seriessearch(selectvalue){
    cards.innerHTML=""
     console.log("hello")
     const response =await fetch(`https://api.themoviedb.org/3/trending/tv/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     console.log(response)
     const data= await response.json()
     console.log(data)
     console.log(data.results);
     
     data.results.map((ele)=>{
    //     const date=ele.first_air_date
    //    console.log(date)
        cards.innerHTML +=` 
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />
        <div class="imgcontent">
        <h3>${ele.original_name   }</h3>
        <small>${ele.first_air_date }</small>
        </div>
        <div class="votingpercent">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>
        
    </div>`
    

       

     })
     


}