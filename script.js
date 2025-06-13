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

function mainCal(){
    const price = document.querySelector("#price").valueAsNumber;
    // priceShow = parseFloat(price);
    const rate = document.querySelector("#rate");
    const result = document.querySelector("#result");
    
    result.style.paddingTop = "20px";
    console.log(price);
    console.log(rate.value);
    if(isNaN(price) || price <= 0){
        result.innerText = "输入错误，请重新输入";
        result.style.color = "red";
        result.style.fontSize = "14px";
    }
    else{
        const cal = (price/rate.value).toFixed(2);
        result.innerText = `សួស្តីបង សរុបហាងទំនិញទាំងអស់ $${cal} 	  \n***បញ្ជាក់: ចំពោះទំនិញទិញក្នុងហាងតែមួយ ប្រសិនខាងហាងបំបែកកញ្ចប់ទំនិញ ខាងប្អូននឹងរាប់កញ្ចប់ទំនិញគិតថ្លៃដឹកតាមចំនួនកញ្ចប់ទំនិញដូចគ្នា   សំរាប់កញ្ចប់ដែលក្រោម1គីឡូ ខាងប្អូនគិតមួយគីឡូ លើស1គីឡូយក ទំហំនិង ទម្ងង់ប្រៀបធៀបគ្នាមួយណាធំជាងយកមួយនឹងជាគោលគិតថ្លៃដឹកជញ្ចូន។​​ ម្យ៉ាងវិញទៀតខាងប្អូនធានាទៅលើតែឥវ៉ាន់ដែលបាត់បង់    មិនធានាទៅលើឥវ៉ាន់ដែលបែកបាក់នោះទេ   ចំពោះសេវាជួយទិញតាមតេលេក្រាមពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេបង។`;
        result.style.color = "green";
        result.style.fontSize = "14px";
    }
   }

   const sysCal = () =>{
    
   }


   // JavaScript function
   function copyText(id) {
  const text = document.getElementById(id);
  navigator.clipboard.writeText(text.textContent)
      .then(() => {
          // Create a success message element
          let copySuccessText = document.getElementById("copy-success");
          if (!copySuccessText) {
              copySuccessText = document.createElement("span");
              copySuccessText.id = "copy-success";
              const button = document.querySelector("button[onclick*='copyText']"); // Target the last button
              button.parentNode.appendChild(copySuccessText);
          }
          copySuccessText.textContent = "សារបានត្រូវចម្លង | Text copied successfully!"; 
          copySuccessText.style.color = "green";
          copySuccessText.style.visibility = "visible";
          copySuccessText.style.fontSize = "14px";       
          // Hide the message after 2 seconds
          setTimeout(() => {
              copySuccessText.style.visibility = "hidden";
          }, 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
}
