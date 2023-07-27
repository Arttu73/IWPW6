import "./styles.css";

import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

const queryJson = {
  "query": [
      {
          "code": "Vuosi",
          "selection": {
              "filter": "item",
              "values": [
                  "2000",
                  "2001",
                  "2002",
                  "2003",
                  "2004",
                  "2005",
                  "2006",
                  "2007",
                  "2008",
                  "2009",
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021"
              ]
          }
      },
      {
          "code": "Alue",
          "selection": {
              "filter": "item",
              "values": [
                  "SSS"
              ]
          }
      },
      {
          "code": "Tiedot",
          "selection": {
              "filter": "item",
              "values": [
                  "vaesto"
              ]
          }
      }
  ],
  "response": {
      "format": "json-stat2"
  }
}

const getData = async () => {
  
    const url = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px";
    
    const res = await fetch(url, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(queryJson)
    })

    if(!res.ok) {return;}

    const data = await res.json();
    return data;
  
}

const buildChart = async () => {
    const data = await getData();

    const chart = new frappe.Chart("#chart", {  
    title: "This is a title",
    data: data,
    type: 'line', 
    height: 450,
    colors: ['#eb5146']
    })
}


buildChart();