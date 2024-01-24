// Select Landing Page Element
let landingPage = document.querySelector(".Landing-page");

//Get Array of images
let imgsArray = ["1.avif","2.avif","3.avif","4.avif","5.avif","6.avif","7.avif","8.avif","9.avif","10.avif"];


// get random number
setInterval(() =>
{
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // change background image url
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber]+'")';
}, 5000);

//cearte popup with the Image
let ourGallary = document.querySelectorAll(".gallery img");

ourGallary.forEach(img =>
{
    
    img.addEventListener('click', (e) =>
    {
        //create overlay Element
        let overlay = document.createElement("div");

        //add class to overlay
        overlay.className = 'popup-overlay';

        //append  overlay to the body 
        document.body.appendChild(overlay);

        //CREATE  the popup
        let popupbox = document.createElement("div");

        //add class to popup
        popupbox.className = "popup-box";

            if (img.alt !== null)
        {
            //create heading 
            let imgheading = document.createElement("h3");
            
            //create  text for heading
            let imgtext = document.createTextNode(img.alt);

            //append the text to the heading
            imgheading.appendChild(imgtext);

            // append the heading   to the popup box
            popupbox.appendChild(imgheading);

            

        }

        //CREATE  the image
        let popupimage = document.createElement("img");
        
        // set images  src
        popupimage.src = img.src;

        //add image to popup box
        popupbox.appendChild(popupimage);

        //append the popup box to body
        document.body.appendChild(popupbox);

        //create the close span
        let closebutton = document.createElement("span");

        //create  the close  button text
        let closebuttontext = document.createTextNode("X");

        //append text to close button 
        closebutton.appendChild(closebuttontext);

        // add class to close button
        closebutton.className = 'close-button';

        //add close button to popup box
        popupbox.appendChild(closebutton);
    }); 
});

//close popup 
document.addEventListener("click", function (e)
{
    
    if (e.target.className == "close-button")
    {
    //remove the current popup
        document.querySelector(".close-button").remove();

    //remove overlay
        document.querySelector(".popup-overlay").remove();
    //remove the current popup-box
        document.querySelector(".popup-box").remove();

    }
});