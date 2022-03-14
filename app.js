const characters = document.getElementById("characters");
const container = document.getElementById("wrapper");
const spinner = document.getElementById("spinner");
const episodes = document.getElementById("episodes");
const quotes = document.getElementById("quotes")
const deaths = document.getElementById("deaths");
const tBody = document.getElementById("episodes-table");
const tableContainer = document.getElementById("table-div");
const tableHead = document.getElementById("table-head");
const loadingData = () => {
    spinner.style.display = "block";
   
}

const removeLoading = () => {
   
        spinner.style.display = "none";
        clearInterval(loadInterval)
    
}
const loadInterval =  setInterval(loadingData() ,1000);
window.onload = () => {
    
    loadingData();
    showApi();
    loadInterval;
    
}


const showApiQuotes = () => {
    fetch("https://breakingbadapi.com/api/quotes")
    .then(response => response.json())
    .then(data => getDataQuotes(data))
}
const getDataQuotes = (data) =>{
    loadingData();
    container.innerHTML = "";
    tBody.innerHTML = "";
    tableContainer.style.display = "block";
    tableHead.innerHTML = `
    <th scope="col">Quote Id</th>
    <th scope="col">Quote</th>
    <th scope="col">Author</th>
    
    `
    removeLoading();
    for (e of data){
       
        tBody.innerHTML += `
        
  
    <tr rowspan = "8">
      
      
      <td>${e.quote_id}</td>
      <td>${e.quote}</td>
      <td>${e.author}</td>
      
    </tr>
  
  

        `
    };

   
}
const showApiDeaths = () => {
    fetch("https://breakingbadapi.com/api/deaths")
    .then(response => response.json())
    .then(data => getDataDeaths(data))
}
const getDataDeaths = (data) =>{
    loadingData();
    container.innerHTML = "";
    tBody.innerHTML = "";
    tableHead.innerHTML = `
    
    <th scope="col">Death</th>
    <th scope="col">Cause</th>
    <th scope="col">Responsible</th>
    <th scope="col">Last Words</th>
    
    `
    removeLoading();

    for (e of data){
       
        tBody.innerHTML += `
        
  
    <tr rowspan = "8">
      
      
     
      <td>${e.death}</td>
      <td>${e.cause}</td>
      <td>${e.responsible}</td>
      <td>${e.last_words}</td>
      
    </tr>
  
  

        `
    };

   
}


const showApi = () => {
    fetch("https://breakingbadapi.com/api/characters")
    .then(response => response.json())
    .then(data => getData(data))
}


const getData = (data) =>{
    tBody.innerHTML = "";
    tableHead.innerHTML = "";

 
    removeLoading();
 
    for (e of data){
      
       
        container.innerHTML += `
        <div class="col-lg-4 col-md-6 card m-3" style="max-width: 350px;">
            <div class="row g-0">
              <div class="col-md-6">
                <img src="${e.img}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">${e.name}</h5>
                  
                 
                </div>
              </div>
            </div>
          </div>
        `
    };

   
}
const showApiEpisodes = () => {
    fetch("https://breakingbadapi.com/api/episodes")
    .then(response => response.json())
    .then(data => getDataEpisodes(data))
}

const getDataEpisodes = (data) =>{
    loadingData();
    tBody.innerHTML = "";
    container.innerHTML = "";
    tableHead.innerHTML = `
    <th scope="col">Episode Id</th>
    <th scope="col">Title</th>
    <th scope="col">Air Date</th>
    <th scope="col">Characters</th>
    `
    // tableContainer.style.display = "block";
   
    // removeLoading();
    
    for (e of data){
      
        tBody.innerHTML += `
        
  
    <tr rowspan = "8">
      
      
      <td>${e.episode_id}</td>
      <td>${e.title}</td>
      <td>${e.air_date}</td>
      <td>${e.characters}</td>
    </tr>
  
  

        `
    };

   
}


characters.addEventListener("click", showApi);
episodes.addEventListener("click", showApiEpisodes);
quotes.addEventListener("click", showApiQuotes);
deaths.addEventListener("click", showApiDeaths);