
/*
 

                                                Blue Wale's Notify & Prompt Library
                                                Version 0.0.1
                                                Published on 3/5/2023 by *Sathvik*
                                                This library is licensed under the 'BSD 3-Clause "New" or "Revised" License'
                                                Please leave credits if you use this library in your project


*/


    const alert = (message) => {
      const alert = document.createElement("div");
      alert.style.position = "fixed";
      alert.style.top = "0";
      alert.style.left = "0";
      alert.style.width = "100%";
      alert.style.height = "100%";
      alert.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

      const alertBox = document.createElement("div");
      alertBox.style.position = "absolute";
      alertBox.style.top = "50%";
      alertBox.style.left = "50%";
      alertBox.style.transform = "translate(-50%, -50%)";
      alertBox.style.width = "400px";
      alertBox.style.height = "200px";
      alertBox.style.backgroundColor = "white";
      alertBox.style.borderRadius = "10px";
      alertBox.style.display = "flex";
      alertBox.style.flexDirection = "column";
      alertBox.style.justifyContent = "center";
      alertBox.style.alignItems = "center";

      alert.appendChild(alertBox);
      document.body.appendChild(alert);
  
      const alertMessage = document.createElement("p");
      alertMessage.innerText = message;
      alertMessage.style.fontSize = "20px";
      alertMessage.style.fontWeight = "bold";
      alertMessage.style.textAlign = "center";
      alertMessage.style.margin = "0";
      alertMessage.style.padding = "0";
      alertBox.appendChild(alertMessage);

      const alertCancelButton = document.createElement("button");
      alertCancelButton.innerText = "OK";
      alertCancelButton.style.width = "100px";
      alertCancelButton.style.height = "50px";
      alertCancelButton.style.borderRadius = "10px";
      alertCancelButton.style.backgroundColor = "blue";
      alertCancelButton.style.color = "white";
      alertCancelButton.style.fontSize = "20px";
      alertCancelButton.style.fontWeight = "bold";
      alertCancelButton.style.marginTop = "20px";
      alertCancelButton.style.cursor = "pointer";
      alertBox.appendChild(alertCancelButton);

      alertCancelButton.addEventListener("click", () => {
         alert.remove();
         }
      );
      




      };



const prompt = (message) => {
   const prompt = document.createElement("div");
   prompt.style.position = "fixed";
   prompt.style.top = "0";
   prompt.style.left = "0";
   prompt.style.width = "100%";
   prompt.style.height = "100%";
   prompt.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   prompt.style.backdropFilter = "blur(5px)";
   






   const promptBox = document.createElement("div");
   promptBox.style.position = "absolute";
   promptBox.style.top = "50%";
   promptBox.style.left = "50%";
   promptBox.style.transform = "translate(-50%, -50%)";
   promptBox.style.width = "400px";
   promptBox.style.height = "300px";
   promptBox.style.backgroundColor = "white";
   promptBox.style.borderRadius = "10px";
   promptBox.style.display = "flex";
   promptBox.style.flexDirection = "column";
   promptBox.style.justifyContent = "center";
   promptBox.style.alignItems = "center";
   promptBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

   prompt.appendChild(promptBox);
   document.body.appendChild(prompt);

   const promptMessage = document.createElement("p");
   promptMessage.innerText = message;
   promptMessage.style.fontSize = "20px";
   promptMessage.style.fontWeight = "bold";
   promptMessage.style.textAlign = "center";
   promptMessage.style.margin = "0";
   promptMessage.style.padding = "0";
   promptBox.appendChild(promptMessage);
   

   const promptInput = document.createElement("input");
   promptInput.style.width = "300px";
   promptInput.style.height = "50px";
   promptInput.style.borderRadius = "10px";
   promptInput.style.border = "none";
   promptInput.style.fontSize = "20px";
   promptInput.style.fontWeight = "bold";
   promptInput.style.textAlign = "center";
   promptInput.style.marginTop = "20px";
   promptBox.appendChild(promptInput);

   const promptButton = document.createElement("button");
   promptButton.innerText = "OK";
   promptButton.style.width = "100px";
   promptButton.style.height = "50px";
   promptButton.style.borderRadius = "10px";
   promptButton.style.backgroundColor = "blue";
   promptButton.style.color = "white";
   promptButton.style.fontSize = "20px";
   promptButton.style.fontWeight = "bold";
   promptButton.style.marginTop = "20px";
   promptButton.style.cursor = "pointer";
   promptBox.appendChild(promptButton);

   promptButton.addEventListener("click", () => {
      prompt.remove();
      }
   );


   promptButton.addEventListener("click", () => {
      if (promptInput.value === "ExamplePassword") { // Change this to your password
         alert("Correct password!");
      }

      else if (promptInput.value === "") {
         alert("Passwords cannot be empty, please try again.");
      }

   


      else {
         alert("Incorrect password, please try again."); //customise this to your liking
      }
   });





   };



prompt("Enter a password\n This prompt has been created by \n User319183#3149");
