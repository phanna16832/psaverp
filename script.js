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
    result.innerText = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ $${cal.toFixed(2)} 	  \n\n📌 ចំពោះការទិញទំនិញក្នុងហាងតែមួយ បើហាងបំបែកជាច្រើនកញ្ចប់ នឹងគិតថ្លៃដឹកតាមចំនួនកញ្ចប់។ កញ្ចប់ក្រោម 1 គីឡូ គិតជា1គីឡូ។ លើស 1 គីឡូ នឹងយកទំហំនិងទំងន់ប្រៀបធៀបគ្នា ដើម្បីគិតថ្លៃដឹក។
\n\n📌ចំពោះការបញ្ជាទិញនៅក្នុងតេលេក្រាមឆាត ហ្វេសបុកឆាតគឺំពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេ
\n\n📌 ខាងប្អូនធានាតែចំពោះការបាត់បង់ឥវ៉ាន់ ប៉ុន្តែមិនអាចធានាលើទំនិញបែកបាក់ គុណភាព ឬទំនិញដែលខាងហាងដាក់ខុសពីការបញ្ជាទិញទេ។ ទោះជាយ៉ាងណា ខាងប្អូននឹងព្យាយាមទាក់ទងទាមទារដំណោះស្រាយពីហាងជំនួសឱ្យបង ប៉ុន្តែដំណោះស្រាយគឺអាស្រ័យលើគោលការណ៍របស់ខាងហាងបានផ្តល់ជូន។

សូមអរគុណសម្រាប់ការយល់ព្រម និងការគាំទ្ររបស់បង! 🙏`;
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
      const textSpan = document.getElementById('trackingMessage');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  textSpan.textContent = ''; // Clear previous message
  const rawInput = document.getElementById('trackingNum').value;
  const batchCode = document.getElementById('batchCode').value;

  const cleaned = rawInput
    .split(',')
    .map(entry => entry.trim().replace(/\s/g, ''))
    .filter(entry => entry.length > 0);

  if (!batchCode) {
    textSpan.textContent = "Please enter a batch code.";
    textSpan.style.color = 'red';
    return;
  }
  if (cleaned.length === 0) {
    textSpan.textContent = "Please enter tracking numbers.";
    textSpan.style.color = 'red';
    return;
  }

  // Clear previous results
  outputContainer.innerHTML = '';

  const header = document.createElement('div');
  header.textContent = `${batchCode} 集${cleaned.length}件包：`;
  header.style.fontWeight = 'bold';
  header.style.marginBottom = '8px';
  outputContainer.appendChild(header);

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
    copyBtn.type = 'button';
    copyBtn.style.color = '#fff';
    copyBtn.style.backgroundColor = '#007bff';
    copyBtn.style.border = 'none';
    copyBtn.style.borderRadius = '4px';
    copyBtn.style.cursor = 'pointer';
    copyBtn.style.fontSize = '12px';
    copyBtn.style.padding = '2px 6px';

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(trackingNum).then(() => {
        textSpan.textContent = `Copied: ${trackingNum}`;
        textSpan.style.color = 'green';
      });
    });

    lineDiv.appendChild(numSpan);
    lineDiv.appendChild(copyBtn);
    outputContainer.appendChild(lineDiv);
  });
});

copyAllBtn.style.color = '#fff';
copyAllBtn.style.backgroundColor = '#007bff';
copyAllBtn.style.border = 'none';
copyAllBtn.style.borderRadius = '4px';
copyAllBtn.style.cursor = 'pointer';
copyAllBtn.style.fontSize = '12px';
copyAllBtn.style.padding = '2px 6px';

copyAllBtn.addEventListener('click', () => {
  const header = outputContainer.querySelector('div:first-child');
  const lines = Array.from(outputContainer.querySelectorAll('div')).slice(1);

  if (!header || lines.length === 0) {
    textSpan.textContent = 'Nothing to copy!';
    textSpan.style.color = 'red';
    return;
  }

  const batchLine = header.textContent;
  const trackingNumbers = lines.map(lineDiv => lineDiv.querySelector('span').textContent);

  const fullText = `${batchLine}\n${trackingNumbers.join('\n')}`;

  navigator.clipboard.writeText(fullText).then(() => {
    textSpan.textContent = 'Copied full result!';
    textSpan.style.color = 'green';
  });
});



// copy function
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



 