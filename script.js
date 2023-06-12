function getMatchData() {
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=2d2dd359-ef68-4f99-9426-f892b49a689f&offset=0")
      .then(response => response.json())
      .then(data => {
        if (data.status !== "success") {
          return [];
        }
  
        const matchList = data.data;
  
        if (!matchList) {
          return [];
        }
  
        const relevantData = matchList.map(match => `${match.name},${match.status}`);
        console.log({relevantData});
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join("");
        return relevantData;
      })
      .catch(e => console.log(e));
  }
  
  getMatchData();
  