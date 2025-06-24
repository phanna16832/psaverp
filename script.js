const date = new Date().toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const dateText = document.createElement("span");
dateText.textContent = `Current date and time: ${date}`;
const langDiv = document.querySelector(".language-div");
langDiv.appendChild(dateText);
dateText.style.color = "purple";
dateText.style.fontSize = "16px";
dateText.style.fontWeight = "bold";

function mainCal() {
  const price = document.querySelector("#price").value;
  // priceShow = parseFloat(price);
  const rate = document.querySelector("#rate");
  const result = document.querySelector("#result");
  const result0 = document.querySelector("#result0");

  result.style.paddingTop = "20px";
  console.log(price);
  console.log(rate.value);
  if (isNaN(price) || price <= 0) {
    result.innerText = "输入错误，请重新输入";
    result.style.color = "red";
    result.style.fontSize = "14px";
  } else {
    const cal = price / rate.value;
    result0.innerText = `${price} / ${rate.value} = $${cal.toFixed(3)}`;
    console.log(result0);
    result0.style.color = "orange";
    result0.style.fontWeight = "bold";
    result0.style.textAlign = "center";
    result.innerText = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ $${cal.toFixed(2)} 	  \n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា   សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន។​​ ម្យ៉ាងវិញទៀតខាងប្អូនធានាទៅលើតែឥវ៉ាន់ដែលបាត់បង់    មិនធានាទៅលើឥវ៉ាន់ដែលបែកបាក់នោះទេ   ចំពោះសេវាជួយទិញតាមតេលេក្រាមពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេបង។`;
    result.style.color = "#000";
    result.style.fontSize = "14px";
    result.style.fontWeight = "500px";
  }
}

const rateOutput = 6.1;
const sysRate = document.querySelector("#sysRate");
sysRate.innerHTML = rateOutput;

const sysCal = () => {
  const nPrice = document.querySelector("#nPrice").value;
  const sysPrice = document.querySelector("#sysPrice").value;
  const syConvertPrice = document.querySelector("#syConvertPrice");
  const syChangePrice = document.querySelector("#syChangePrice");
  const systemCal = (nPrice / rateOutput).toFixed(2);
  console.log(systemCal);
  if (systemCal <= 0) {
    syConvertPrice.innerText = "0";
    syConvertPrice.style.color = "red";
  } else {
    syConvertPrice.innerText = systemCal;
    syConvertPrice.style.color = "green";
  }
  changePrice = (systemCal - sysPrice).toFixed(2);
  console.log(changePrice);
  changePrice <= 0
    ? (syChangePrice.style.color = "red")
    : (syChangePrice.style.color = "green");
  syChangePrice.innerText = changePrice;
};
function clearSyscal() {
  const fields = {
    input: ["#nPrice", "#sysPrice"],
    text: ["#syConvertPrice", "#syChangePrice"],
  };

  fields.input.forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) el.value = "";
  });

  fields.text.forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) el.innerText = "";
  });
}

const form = document.getElementById('trackingForm');
const outputContainer = document.getElementById('outputContainer');
const copyAllBtn = document.getElementById('copyAllBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawInput = document.getElementById('trackingNum').value;
  const batchCode = document.getElementById('batchCode').value;

  // Split, trim spaces, remove internal spaces
  const cleaned = rawInput
    .split(',')
    .map(entry => entry.trim().replace(/\s/g, ''))
    .filter(entry => entry.length > 0); // remove empty

  if (!batchCode) {
    alert("Please enter batch code.");
    return;
  }
  if (cleaned.length === 0) {
    alert("Please enter tracking numbers.");
    return;
  }

  // Clear output container
  outputContainer.innerHTML = '';

  // Create header line
  const header = document.createElement('div');
  header.textContent = `${batchCode} 集${cleaned.length}件包：`;
  header.style.fontWeight = 'bold';
  header.style.marginBottom = '8px';
  outputContainer.appendChild(header);

  // Create each tracking number line with copy button
  cleaned.forEach(trackingNum => {
    const lineDiv = document.createElement('div');
    lineDiv.style.display = 'flex';
    lineDiv.style.alignItems = 'center';
    lineDiv.style.marginBottom = '4px';

    const numSpan = document.createElement('span');
    numSpan.textContent = trackingNum;
    numSpan.style.marginRight = '8px';

    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'copy';
    copyBtn.style.padding = '2px 6px';
    copyBtn.style.fontSize = '12px';
    copyBtn.type = 'button';

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(trackingNum).then(() => {
        alert(`Copied: ${trackingNum}`);
      });
    });

    lineDiv.appendChild(numSpan);
    lineDiv.appendChild(copyBtn);
    outputContainer.appendChild(lineDiv);
  });
});

// Copy all combined result
copyAllBtn.addEventListener('click', () => {
  const header = outputContainer.querySelector('div:first-child');
  const lines = Array.from(outputContainer.querySelectorAll('div')).slice(1); // skip header

  if (!header || lines.length === 0) {
    alert('Nothing to copy!');
    return;
  }

  const batchLine = header.textContent;
  const trackingNumbers = lines.map(lineDiv => lineDiv.querySelector('span').textContent);

  const fullText = `${batchLine}\n${trackingNumbers.join('\n')}`;

  navigator.clipboard.writeText(fullText).then(() => {
    alert('Copied full result!');
  });
});



// JavaScript function
function copyText(id) {
  const text = document.getElementById(id);
  navigator.clipboard
    .writeText(text.textContent)
    .then(() => {
      // Create a success message element
      let copySuccessText = document.getElementById("copy-success");
      if (!copySuccessText) {
        copySuccessText = document.createElement("span");
        copySuccessText.id = "copy-success";
        const button = document.querySelector("button[onclick*='copyText']"); // Target the last button
        button.parentNode.appendChild(copySuccessText);
      }
      copySuccessText.textContent =
        "សារបានត្រូវចម្លង | Text copied successfully!";
      copySuccessText.style.color = "#00F71D";
      copySuccessText.style.visibility = "visible";
      copySuccessText.style.fontSize = "14px";
      // Hide the message after 2 seconds
      setTimeout(() => {
        copySuccessText.style.visibility = "hidden";
      }, 2000);
    })
    .catch((err) => console.error("Failed to copy:", err));
}
