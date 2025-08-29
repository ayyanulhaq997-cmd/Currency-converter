
async function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    try {
      let url = `https://open.er-api.com/v6/latest/${from}`;
      let res = await fetch(url);
      let data = await res.json();

      console.log("API Response:", data);

      if (data.result === "success" && data.rates[to]) {
        let rate = data.rates[to];
        let converted = (amount * rate).toFixed(2);
        document.getElementById("result").innerText =
          `${amount} ${from} = ${converted} ${to}`;
      } else {
        document.getElementById("result").innerText =
          "Error: Could not fetch rate for " + to;
      }
    } catch (err) {
      document.getElementById("result").innerText = "Error fetching data.";
      console.error(err);
    }
  }
