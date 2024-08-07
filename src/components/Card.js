import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Ensure you have this package installed
import "./card.css"; // Import the CSS file
import Cardimg from "./Resource/cardimg.jpg";
import Favicon from "./Resource/favicon.png";
import Logo from "./Resource/logo2.png";
import "jspdf-autotable"; // Ensure you have this package installed
import "./card.css"; // Import the CSS file
import Loader from "./Svgloader";

const parseMealPlanData = (mealPlan) => {
  if (typeof mealPlan !== "string" || mealPlan.trim() === "") {
    return [];
  }

  const meals = [];
  const dayRegex = /Day (\d+):/;
  const daySections = mealPlan.split(dayRegex);

  // Start from index 1 to skip the first empty section
  for (let i = 1; i < daySections.length; i += 2) {
    const dayNumber = daySections[i];
    const dayContent = daySections[i + 1].trim();
    let [mealSection, ingredientsSection, instructionsSection] =
      dayContent.split(/Ingredients:|Instructions:/);

    // Extract meal title and side dish
    const mealLines = mealSection.split("\n").filter((line) => line.trim());
    const mainDish = mealLines[1] ? mealLines[1].trim() : "";
    const sideDish = mealLines[2] ? mealLines[2].trim() : "";
    const mealTitle = `Day ${dayNumber}: ${mainDish}${
      sideDish ? "\n" + sideDish : ""
    }`;

    // Extract ingredients
    const ingredients = ingredientsSection ? ingredientsSection.trim() : "";

    // Extract instructions
    const instructions = instructionsSection ? instructionsSection.trim() : "";

    // Add day data to the meals array
    meals.push([mealTitle, ingredients, instructions]);
  }

  return meals;
};

const cards = [
  {
    //card 1
    subtitle: "Discover",
    title: "Choose Your Diet Plan",
    description:
      "Select the type of diet plan that suits your preferences and goals.",
    image: "image1.jpg",
    section1: [
      {
        heading: "Benefits",
        description:
          "Explore the benefits of the Mediterranean and Centenarian diets.",
      },
    ],
    section2: [
      {
        heading: "Customization",
        description:
          "Personalize your meal plan based on your allergies, dislikes, and servings.",
      },
    ],
  },
  {
    //card 2
    subtitle: "Discover",
    title: "Tell Us About Your Food Allergies",
    description:
      "We want to make sure your meal plan is tailored to your needs. Let us know if you have any food allergies so we can provide you with delicious and safe recipes.",
    image: "image1.jpg",
  },
  {
    //card 3
    subtitle: "Discover",
    title: "Choose Your Preferred Meal Plan",
    description: "Tell us about your food preferences and dislikes.",
    image: "image1.jpg",
    elements: [
      { type: "radio", name: "preferredMeal", label: "Vegetarian" },
      { type: "radio", name: "preferredMeal", label: "Gluten-free" },
      { type: "radio", name: "preferredMeal", label: "Dairy-free" },
    ],
  },
  {
    //card 4
    subtitle: "Choose",
    title: "How Many Servings Do You Need?",
    description: "Select the number of servings you need per meal.",
    image: "image1.jpg",
    section1: [
      { heading: "Servings" },
      { type: "radio", name: "servings", label: "1 Serving" },
      { type: "radio", name: "servings", label: "2 Servings" },
      { type: "radio", name: "servings", label: "3 Servings" },
      { type: "radio", name: "servings", label: "4+ Servings" },
    ],
    section2: [
      {
        heading: "Customize",
        description: "Adjust servings based on your preferences.",
      },
    ],
  },
  {
    //card 5
    subtitle: "Customize",
    title: "Customize Your Meal Plan",
    description: "Answer a few questions to personalize your meal plan.",
    image: "image1.jpg",
  },
  {
    //card 6
    subtitle: "Details",
    title: "Please Fill Out the Form Below",
    description:
      "We appreciate your feedback and will respond as soon as possible.",
    image: "image1.jpg",
    elements: [
      { type: "text", placeholder: "Your Name" },
      { type: "email", placeholder: "Email Address" },
      { type: "tel", placeholder: "Phone" },
      { type: "text", placeholder: "Subject" },
    ],
  },
  {
    //card 7
    subtitle: "Sign up",
    title: "Sign Up for Exclusive Updates and Offers",
    description:
      "Join our community and stay informed about the latest fitness tips, products, and promotions.",
    image: "image1.jpg",
    elements: [
      { type: "text", placeholder: "Your Name" },
      { type: "email", placeholder: "Email Address" },
      { type: "password", placeholder: "Password" },
    ],
  },
];

const CardNavigator = ({ setLoading }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedPreferredMeal, setSelectedPreferredMeal] = useState("");
  const [selectedServings, setSelectedServings] = useState("");
  const [mealPlanData, setMealPlanData] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const [card6Values, setCard6Values] = useState({
    "Your Name": "",
    "Email Address": "",
    Phone: "",
    Subject: "",
  });

  // State variables for card 7
  const [card7Values, setCard7Values] = useState({
    "Your Name": "",
    "Email Address": "",
    Password: "",
  });

  // Handle input changes for card 6
  const handleCard6Change = (e) => {
    const { placeholder, value } = e.target;
    setCard6Values((prevValues) => ({
      ...prevValues,
      [placeholder]: value,
    }));
  };

  // Handle input changes for card 7
  const handleCard7Change = (e) => {
    const { placeholder, value } = e.target;
    setCard7Values((prevValues) => ({
      ...prevValues,
      [placeholder]: value,
    }));
    if (placeholder === "Email Address" || placeholder === "Password") {
      setLoginData((prevData) => ({
        ...prevData,
        [placeholder === "Email Address" ? "email" : "password"]: value,
      }));
    }
  };

  const thankyou = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "Thank You";
  };
  const signupsuccess = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "Sign-Up Successful!";
  };
  const loginsuccess = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "Login successful!";
  };
  const signuperror = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "An error occurred during signup. Please try again.";
  };
  const pdfmsg = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "Generating PDF...";
  };
  const sendingtomail = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "Sending to Email...";
  };
  const pdfgenerated = () => {
    let cardcontaier = document.getElementsByClassName("cardContainer")[0];
    let h2form = document.getElementsByClassName("h2form")[0];
    cardcontaier.style.display = "none";
    h2form.innerHTML = "PDF Generated!";
  };
  const hidecard = () => {
    let card = document.getElementsByClassName("cardContainer")[0];
    card.style.display = "none";
  };

  const handleSignUp = () => {
    hidecard();
    setLoading(true);

    const formData = card7Values;
    const email = formData["Email Address"];

    fetch("http://127.0.0.1:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
         
          setTimeout(() => {
            signupsuccess();
            
          }, 2000);
         
          setIsLoggedIn(true);
          localStorage.setItem("user", JSON.stringify({ email: email }));
          setCurrentCardIndex(5); // Move to card 6
        

          
          generateAndSendPDF(email);
          
        }
      })
      .catch((error) => {
       
        signuperror()
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };







  const handleLogin = () => {
    setLoading(true);
    hidecard();
    setLoginError("");

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setLoginError(data.error);
        } else {

          
          setTimeout(() => {
            setLoading(false)
            loginsuccess()
            
          }, 2000);
          
          setIsLoggedIn(true);
          localStorage.setItem("user", JSON.stringify(data));
          setCurrentCardIndex(5); // Move to card 6


          generateAndSendPDF(loginData.email);
        }
      })
      .catch((error) => {
        setLoginError(`An error occurred: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const generateAndSendPDF = (email) => {
    pdfmsg()
    setLoading(true)
    fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        preferredMeal: selectedPreferredMeal,
        servings: selectedServings,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
       
        const pdfData = generatePDF(data);
        setLoading(false)
        setTimeout(() => {
          
          pdfgenerated()
        }, 2000);

        setLoading(true)
        sendingtomail()
        return fetch("http://127.0.0.1:5000/send-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            pdf: pdfData,
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        
        
        setLoading(false)
        thankyou()
      })
      .catch((error) => {
        alert("Error generating or sending PDF:", error);
        alert(
          "An error occurred while generating or sending the PDF. Please try again."
        );
      });
  };

  const handleGeneratePDF = () => {
    hidecard();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) {
     
      generateAndSendPDF(user.email);
      
      setLoading(false)
    } else {
      
      setLoading(false)
      alert("User email not found. Please log in again.");
    }
  };

  const savePDFToLocalStorage = (pdfData) => {
    try {
      const pdfList = JSON.parse(localStorage.getItem("pdfList")) || [];
      const currentDate = new Date();
      const newPDF = {
        id: Date.now(),
        name: `MealPlan_${currentDate.toISOString()}.pdf`,
        data: pdfData,
        generatedDate: currentDate.toISOString(),
      };

      // Limit to storing only the last 5 PDFs
      if (pdfList.length >= 5) {
        pdfList.shift(); // Remove the oldest PDF
      }

      pdfList.push(newPDF);
      localStorage.setItem("pdfList", JSON.stringify(pdfList));
      console.log("PDF saved to localStorage");
    } catch (error) {
      console.error("Error saving PDF to localStorage:", error);
      // Handle the error (e.g., show a message to the user)
    }
  };

  const generatePDF = (mealPlanData) => {
    setLoading(true)
    const doc = new jsPDF();

    const tableData = parseMealPlanData(mealPlanData.meal_plan);

    doc.setFontSize(20);
    doc.text("Meal Plan", 105, 15, null, null, "center");
    doc.addImage(Logo, "PNG", 160, 8, 40, 10);

    doc.autoTable({
      head: [["Meals", "Ingredients", "Instructions"]],
      body: tableData,
      startY: 25,
      theme: "grid",
      headStyles: {
        fillColor: [115, 128, 101],
        textColor: [255, 255, 255],
        fontSize: 12,
        fontStyle: "bold",
        valign: "middle",
        halign: "center",
      },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 75 },
        2: { cellWidth: 75 },
      },
      styles: {
        fontSize: 10,
        cellPadding: 5,
      },
      didParseCell: function (data) {
        if (data.section === "body" && data.column.index === 0) {
          data.cell.styles.fontStyle = "bold";
        }
      },
    });

    doc.setFontSize(10);
    doc.text(
      `Total Servings: ${mealPlanData.servings} per meal.`,
      14,
      doc.lastAutoTable.finalY + 10
    );

    // Generate PDF data as a data URI string
    const pdfData = doc.output("datauristring");

    // Save PDF to local storage
    savePDFToLocalStorage(pdfData);

    // Save the PDF file
    doc.save("MealPlan.pdf");
    setLoading(false)

    // Return the PDF data
    return pdfData;
  };

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleSubmit = () => {
    if (currentCardIndex === 4) {
      setCurrentCardIndex(5); // Move to the 6th card
    }
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    if (name === "preferredMeal") {
      setSelectedPreferredMeal(value);
    } else if (name === "servings") {
      setSelectedServings(value);
    }
  };

  const renderElement = (element, index) => {
    switch (element.type) {
      case "radio":
        return (
          <div key={index} className="radio">
            <input
              type="radio"
              id={element.label}
              name={element.name}
              value={element.label}
              onChange={handleRadioChange}
            />
            <label htmlFor={element.label}>{element.label}</label>
          </div>
        );
      case "text":
      case "email":
      case "tel":
      case "password":
        const value =
          currentCardIndex === 5
            ? card6Values[element.placeholder]
            : card7Values[element.placeholder];
        const handleChange =
          currentCardIndex === 5 ? handleCard6Change : handleCard7Change;
        return (
          <div key={index} className="formElement">
            <input
              type={element.type}
              placeholder={element.placeholder}
              value={value}
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderSection = (section, index) => (
    <div
      key={index}
      className={`section ${
        currentCard.title === "How Many Servings Do You Need?" && index === 0
          ? "column"
          : ""
      }`}
    >
      <h5>{section.heading}</h5>
      {section.description && <p>{section.description}</p>}
      {section.type === "radio" && renderElement(section, index)}
    </div>
  );

  const currentCard = cards[currentCardIndex];

  return (
    <div className="cardContainer">
      <div className="cardcontent">
        <h4 className="cardfancytext text-2xl">{currentCard.subtitle}</h4>
        <h2>{currentCard.title}</h2>
        <p className="cardp">{currentCard.description}</p>
        <div className="cardsections">
          {currentCard.section1 && (
            <div className="section column">
              {currentCard.section1.map((section, index) =>
                renderSection(section, index)
              )}
            </div>
          )}
          {currentCard.section2 && currentCard.section2.map(renderSection)}
        </div>
        {currentCard.elements && (
          <div className="elementsContainer">
            {currentCard.elements.map((element, index) =>
              renderElement(element, index)
            )}
          </div>
        )}
        <div className="buttonContainer1">
          {currentCardIndex === 0 && (
            <button className="cardbtn" onClick={handleNext}>
              Next
            </button>
          )}
          {currentCardIndex > 0 && currentCardIndex < 4 && (
            <>
              <button className="cardbtn2" onClick={handleBack}>
                Back
              </button>
              <button className="cardbtn" onClick={handleNext}>
                Next
              </button>
            </>
          )}
          {currentCardIndex === 4 && (
            <button className="cardbtn submitButton" onClick={handleSubmit}>
              Submit
            </button>
          )}
          {currentCardIndex === 5 && (
            <>
              {isLoggedIn ? (
                <button className="cardbtn" onClick={handleGeneratePDF}>
                  Generate PDF
                </button>
              ) : (
                <>
                  <button className="cardbtn2" onClick={handleBack}>
                    Back
                  </button>
                  <button className="cardbtn" onClick={handleNext}>
                    Next
                  </button>
                </>
              )}
            </>
          )}
          
          {
            currentCardIndex === 6 &&
            !isLoggedIn && (
              <div className="flex flex-wrap ">
                <button className="cardbtn signupButton" onClick={handleSignUp}>
                  Sign&nbsp;Up
                </button>
                <button
                  className="cardbtn signupButton"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>
            )
          }
        </div>
      </div>
      <div className="cardfimg">
        <div className="cardimage">
          <img className="cardfaviconinimg" src={Favicon} alt="" />
        </div>
      </div>
      <img className="cardfavicon" src={Favicon} alt="" />
    </div>
  );
};

export default CardNavigator;
