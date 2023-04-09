const url = "https://go.greedygame.com/v4/report/adx/generate?from=2023-02-01&to=2023-02-28&dim=date&metrics=ae_revenue";

const apiKey = "2D502667AEE7767F3BE5949404B5BCDC"

fetch(url, {
    headers: {
        "API-Key": apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        // Populate the frontend with the data
        const todaydlr = document.getElementById("todaydlr");
        const yesdlr = document.getElementById("yesdlr");
        const dlr7 = document.getElementById("dlr7");
        const mthdlr = document.getElementById("mthdlr");
        const bdlr = document.getElementById("bdlr");
        const clicks = document.getElementById("ae_clicks");
        const impressions = document.getElementById("ae_imp");

        todaydlr.innerHTML = Math.round((data.result[27].ae_revenue) * 0.7);

        yesdlr.innerHTML = Math.round((data.result[26].ae_revenue) * 0.7);

        dlr7.innerHTML = Math.round(((data.result[27].ae_revenue + data.result[26].ae_revenue + data.result[25].ae_revenue + data.result[24].ae_revenue + data.result[23].ae_revenue + data.result[22].ae_revenue + data.result[21].ae_revenue)) * 0.7)
        mthdlr.innerHTML = Math.round(((data.result[27].ae_revenue + data.result[26].ae_revenue + data.result[25].ae_revenue + data.result[24].ae_revenue + data.result[23].ae_revenue + data.result[22].ae_revenue + data.result[21].ae_revenue + data.result[20].ae_revenue + data.result[19].ae_revenue + data.result[18].ae_revenue + data.result[17].ae_revenue + data.result[16].ae_revenue + data.result[15].ae_revenue + data.result[14].ae_revenue + data.result[13].ae_revenue + data.result[12].ae_revenue + data.result[11].ae_revenue + data.result[10].ae_revenue + data.result[9].ae_revenue + data.result[8].ae_revenue + data.result[7].ae_revenue + data.result[6].ae_revenue + data.result[5].ae_revenue + data.result[4].ae_revenue + data.result[3].ae_revenue + data.result[2].ae_revenue + data.result[1].ae_revenue + data.result[0].ae_revenue)) * 0.7);
        bdlr.innerHTML = Math.round(((data.result[27].ae_revenue + data.result[26].ae_revenue + data.result[25].ae_revenue + data.result[24].ae_revenue + data.result[23].ae_revenue + data.result[22].ae_revenue + data.result[21].ae_revenue + data.result[20].ae_revenue + data.result[19].ae_revenue + data.result[18].ae_revenue + data.result[17].ae_revenue + data.result[16].ae_revenue + data.result[15].ae_revenue + data.result[14].ae_revenue + data.result[13].ae_revenue + data.result[12].ae_revenue + data.result[11].ae_revenue + data.result[10].ae_revenue + data.result[9].ae_revenue + data.result[8].ae_revenue + data.result[7].ae_revenue + data.result[6].ae_revenue + data.result[5].ae_revenue + data.result[4].ae_revenue + data.result[3].ae_revenue + data.result[2].ae_revenue + data.result[1].ae_revenue + data.result[0].ae_revenue)) * 0.7);
    })
    .catch(error => console.error(error));