let tableFromJson = () => {
  let col = [];
  for (let i = 0; i < userData.length; i++) {
    for (let key in userData[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  const table = document.createElement("table");

  let tr = table.insertRow(-1); // table row.

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th"); // table header.
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  for (let i = 0; i < userData.length; i++) {
    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = userData[i][col[j]];
    }
  }

  const divShowData = document.getElementById("showData");
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
};

function makeTableByID(num) {
  const table = document.createElement("table");
  const tr = table.insertRow(-1); // table header row.

  for (let key in userData[0]) {
    // Create table headers based on keys in the first element of userData.
    let th = document.createElement("th");
    th.innerHTML = key;
    tr.appendChild(th);
  }

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].id == num) {
      // Check if the current element's ID matches the user input.
      const tr = table.insertRow(-1);

      for (let key in userData[i]) {
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = userData[i][key];
      }
    }
  }

  const printDiv = document.getElementById("printDiv");
  printDiv.innerHTML = "";
  printDiv.appendChild(table);
}

function findID() {
  let textID = document.getElementById("textID");
  let num = textID.value;

  if (num < 1) {
    window.alert("ID can't be negative");
  } else {
    let tableData = userData.find((item) => item.id == num);

    if (tableData) {
      console.log("Getting the table for", num);
      makeTableByID(num);
    } else {
      window.alert("ID not found");
    }
  }
}

function loader() {
  let showData = document.getElementById("showData");
  showData.innerHTML = "";
  let printDiv = document.getElementById("printDiv");
  printDiv.innerHTML = "";
}
