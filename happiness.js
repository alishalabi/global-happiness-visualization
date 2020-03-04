fetch("2019.json")
  .then(response => response.json())
  .then(json => {
    handleData(json)
  }).catch(err => console.log(err.message))

function handleData(data) {
  const fields = data.map(country => country)
  // const fields = data.map(country => country["country or region"])
  // console.log(fields)

  // Spans
  const numberOfCountries = document.getElementById("number-of-countries")
  const gdp = document.getElementById("GDP")
  const social = document.getElementById("Social")
  const life = document.getElementById("Life")
  const generosity = document.getElementById("Gen")

  // Helper functions
  function getNumberOfCountries(fields) {
    let count = 0
    for (let i in fields) {
      count++
    }
    numberOfCountries.innerHTML = count
  }

  function getTopGDP(fields) {
    const gdpSorted = fields.sort(function(first, second) {
      return second["GDP per capita"] - first["GDP per capita"]
    })
    const sorted = gdpSorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country
    })
    return outputArray
  }

  function titleGetTopGDP(fields) {
    const gdpSorted = fields.sort(function(first, second) {
      return second["GDP per capita"] - first["GDP per capita"]
    })
    const sorted = gdpSorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country["Country or region"]
    })
    return outputArray
  }

  function getTopSocialSupport(fields) {
    const socialSorted = fields.sort(function(first, second) {
      return second["Social support"] - first["Social support"]
    })
    const sorted = socialSorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country
    })
    return outputArray
  }

  function titleGetTopSocialSupport(fields) {
    const socialSorted = fields.sort(function(first, second) {
      return second["Social support"] - first["Social support"]
    })
    const sorted = socialSorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country["Country or region"]
    })
    return outputArray
  }

  function getTopHealthy(fields) {
    const healthySorted = fields.sort(function(first, second) {
      return second["Healthy life expectancy"] - first["Healthy life expectancy"]
    })
    const sorted = healthySorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country
    })
    return outputArray
  }

  function titleGetTopHealthy(fields) {
    const healthySorted = fields.sort(function(first, second) {
      return second["Healthy life expectancy"] - first["Healthy life expectancy"]
    })
    const sorted = healthySorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country["Country or region"]
    })
    return outputArray
  }

  function getTopGenerosity(fields) {
    const generositySorted = fields.sort(function(first, second) {
      return second["Generosity"] - first["Generosity"]
    })
    const sorted = generositySorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country
    })
    return outputArray
  }

  function titleGetTopGenerosity(fields) {
    const generositySorted = fields.sort(function(first, second) {
      return second["Generosity"] - first["Generosity"]
    })
    const sorted = generositySorted.slice(0,10)
    const outputArray = sorted.map(function(country) {
      return country["Country or region"]
    })
    return outputArray
  }

  function visualizeGDP(fields) {
    array = getTopGDP(fields)
    const root = document.getElementById("gdp-content")
    root.style.display = "flex"
    root.style.flexWrap = "wrap"
    root.style.alignItems = "baseline"
    array.forEach((country) => {
      // console.log(country)
      const el = document.createElement("div")
      root.appendChild(el)
      // console.log(country["GDP per capita"])
      el.style.height =  `${country["GDP per capita"]* 150}px`
      el.style.width = "140px"
      el.style.margin = "5px"
      el.style.backgroundColor = "#90EE90"
    });

  }

  function visualizeSocial(fields) {
    array = getTopSocialSupport(fields)
    const root = document.getElementById("social-content")
    root.style.display = "flex"
    root.style.flexWrap = "wrap"
    root.style.alignItems = "baseline"
    array.forEach((country) => {
      // console.log(country)
      const el = document.createElement("div")
      root.appendChild(el)
      // console.log(country["Social support"])
      // / array[0]["GDP per capita"]
      el.style.height =  `${country["Social support"]* 150}px`
      el.style.width = "140px"
      el.style.margin = "5px"
      el.style.backgroundColor = "#add8e6"
    });
  }

  function visualizeHealthy(fields) {
    array = getTopHealthy(fields)
    const root = document.getElementById("life-content")
    root.style.display = "flex"
    root.style.flexWrap = "wrap"
    root.style.alignItems = "baseline"
    array.forEach((country) => {
      // console.log(country)
      const el = document.createElement("div")
      root.appendChild(el)
      // console.log(country["Social support"])
      // / array[0]["GDP per capita"]
      el.style.height =  `${country["Healthy life expectancy"]* 150}px`
      el.style.width = "140px"
      el.style.margin = "5px"
      el.style.backgroundColor = "#fed8b1"
    });
  }

  function visualizeGenerosity(fields) {
    array = getTopGenerosity(fields)
    const root = document.getElementById("gen-content")
    root.style.display = "flex"
    root.style.flexWrap = "wrap"
    root.style.alignItems = "baseline"
    array.forEach((country) => {
      // console.log(country)
      const el = document.createElement("div")
      root.appendChild(el)
      // console.log(country["Social support"])
      // / array[0]["GDP per capita"]
      el.style.height =  `${country["Healthy life expectancy"]* 150}px`
      el.style.width = "140px"
      el.style.margin = "5px"
      el.style.backgroundColor = "#fed8b1"
    });
  }

  // Populate number of countries
  getNumberOfCountries(fields)
  // Get Top GDP
  gdp.innerHTML = titleGetTopGDP(fields)
  // Get Top Social Support
  social.innerHTML = titleGetTopSocialSupport(fields)
  // Get Top Healthy
  life.innerHTML = titleGetTopHealthy(fields)
  // Get Top Generosity
  generosity.innerHTML = titleGetTopGenerosity(fields)

  // Visualize GDP
  visualizeGDP(fields)
  // Visualize Social Support
  visualizeSocial(fields)
  // Visualize Healthy
  visualizeHealthy(fields)
}
