const rate = document.querySelector("#rate");
rate.innerHTML = 6.2;

//declear btn
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
  const inputPrice1 = parseFloat(
    document.getElementById("inputPrice1").value || 0
  );
  const inputPrice2 = parseFloat(
    document.getElementById("inputPrice2").value || 0
  );
  const convertPrice = (inputPrice1 / parseFloat(rate.innerHTML)).toFixed(
    2
  );

  const convertPriceText = document.querySelector("#convertPriceText");
  convertPriceText.innerText = convertPrice;

  const changePriceText = document.querySelector("#changePriceText");

  const changePrice = (convertPrice - inputPrice2).toFixed(2);

  changePrice > 0
    ? (changePriceText.style.color = "#FFD700")
    : (changePriceText.style.color = "#FF0000");
  changePriceText.innerText = changePrice;
});

//copyPaste
btn2.addEventListener("click", () => {
  if (convertPriceText) {
    // Create the notification div element
    const noti = document.createElement("div");
    noti.style.position = "fixed";
    noti.style.top = "20px";
    noti.style.left = "50%";
    noti.style.padding = "10px";
    noti.style.backgroundColor = "rgb(255, 215, 0)"; // Green background for success
    noti.style.color = "white";
    noti.style.fontSize = "16px";
    noti.style.borderRadius = "5px";
    noti.style.zIndex = "9999"; // Ensure it's on top of other content

    // Write the text from the element to the clipboard
    navigator.clipboard
      .writeText(convertPriceText.innerText)
      .then(() => {
        // Display success notification
        noti.innerText = "Text copied to clipboard!";
        document.body.appendChild(noti);

        // Remove the notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);
      })
      .catch((err) => {
        // Display error notification
        noti.innerText = "Failed to copy text.";
        noti.style.backgroundColor = "#FF0000"; // Red background for error
        document.body.appendChild(noti);

        // Remove the error notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);

        console.error("Failed to copy: ", err);
      });
  } else {
    console.error("Element with id 'convertPriceText' not found.");
  }
});



btn3.addEventListener("click", () => {
  if (convertPriceText) {
    // Create the notification div element
    const noti = document.createElement("div");
    noti.style.position = "fixed";
    noti.style.top = "20px";
    noti.style.left = "50%";
    noti.style.padding = "10px";
    noti.style.backgroundColor = "#4CAF50"; // Green background for success
    noti.style.color = "white";
    noti.style.fontSize = "16px";
    noti.style.borderRadius = "5px";
    noti.style.zIndex = "9999"; // Ensure it's on top of other content

    // Write the text from the element to the clipboard
    navigator.clipboard
      .writeText(changePriceText.innerText)
      .then(() => {
        // Display success notification
        noti.innerText = "Text copied to clipboard!";
        document.body.appendChild(noti);

        // Remove the notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);
      })
      .catch((err) => {
        // Display error notification
        noti.innerText = "Failed to copy text.";
        noti.style.backgroundColor = "#FF0000"; // Red background for error
        document.body.appendChild(noti);

        // Remove the error notification after 3 seconds
        setTimeout(() => {
          noti.remove();
        }, 3000);

        console.error("Failed to copy: ", err);
      });
  } else {
    console.error("Element with id 'convertPriceText' not found.");
  }
});


const btn = document.getElementById("btn");
const result0 = document.createElement("span");
const result = document.querySelector("#result");
result.parentNode.insertBefore(result0, result);
result0.className = "result0";

btn.addEventListener('click',()=>{
  const Erate =parseFloat( document.getElementById("Erate").value);
  const input = parseFloat(document.getElementById("input").value||0);
  const  price = (input/Erate).toFixed(2);
  result0.innerText = `${input}  ចែកនឹង ${Erate} = ${price}`
  result.innerText = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ $${price} \n	\n\n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា
   \សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន។​​ ម្យ៉ាងវិញទៀតខាងប្អូនធានាទៅលើតែឥវ៉ាន់ដែលបាត់បង់ \
   មិនធានាទៅលើឥវ៉ាន់ដែលបែកបាក់នោះទេ\
  \n ចំពោះសេវាជួយទិញតាមតេលេក្រាមពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេបង។
`
})


//copyText
function copyText(id) {
  const text = document.getElementById(id);
  navigator.clipboard.writeText(text.textContent)
    .then(() => console.log('Text copied'))
    .catch(err => console.error('Failed to copy:', err));
 }

