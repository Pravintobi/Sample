import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Page3 from "./Page3";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from  "./assets/image3.jpg";
import image2 from "./assets/image4.jpeg"
import image3 from "./assets/image5.jpeg"
import image4 from "./assets/image6.png"
import image5 from "./assets/image7.png"
import image6 from "./assets/image8.jpeg"
import image7 from "./assets/image9.jpeg"
import image8 from "./assets/image10.jpeg"
import image9 from "./assets/image11.jpeg"
import image10 from "./assets/image12.jpeg"
import image11 from "./assets/image13.jpeg"
import image12 from "./assets/image14.jpeg"
import Page4 from "./Page4";


export default function App() {
  const data = [
    {
      tittle: "python objects 101",
      price:"Unlock the power of randomness in Python with our comprehensive course on the random module. This course is designed for both beginners and intermediate Python programmers who want to deepen their understanding of generating random data for simulations, games, testing, and more.",
      image:image1
  },
  {
      tittle: "Machine Learning",
      price:"Embark on a journey into the world of machine learning with this comprehensive course designed for beginners and intermediate Python programmers. This course will guide you through the fundamentals of machine learning, from understanding core concepts to implementing algorithms using Python libraries.",
      image:image2
  },
  {
    tittle: "unlocking the power of NLP",
    price:"Dive into the fascinating field of Natural Language Processing (NLP) with this comprehensive course designed for both beginners and intermediate Python programmers. This course will take you from the basics of text processing to advanced NLP techniques, using Python and its powerful libraries.",
    image:image3
},

  ]
    const data1 = [
    {
      tittle: "Introduction to Data Science with Python",
      price:"Embark on a comprehensive journey into the world of data science with Python. This course is designed for beginners and intermediate learners who want to harness the power of data to derive insights and make data-driven decisions. You'll learn how to collect, clean, analyze, and visualize data, as well as build and evaluate machine learning models.",
      image:image7
  },
  {
      tittle: "Data Analytics for Beginners",
      price:"This course is designed to introduce you to the field of data analytics, equipping you with the skills needed to analyze and interpret data to make informed business decisions. You will learn how to use data analytics tools and techniques to clean, visualize, and analyze data effectively.",
      image:image8
  },
  {
    tittle: "Comprehensive Data Science Course",
    price:"Dive into the fascinating field of Natural Language Processing (NLP) with this comprehensive course designed for both beginners and intermediate Python programmers. This course will take you from the basics of text processing to advanced NLP techniques, using Python and its powerful libraries.",
    image:image9
},

  ]
  const data2 = [
    {
      tittle: "Introduction to Cybersecurity",
      price:"This foundational course provides an overview of cybersecurity principles, threats, and defenses. It is designed for beginners who want to understand the basics of protecting computer systems, networks, and data from cyber threats.",
      image:image10
  },
  {
      tittle: "Intermediate Cybersecurity",
      price:"This course delves deeper into cybersecurity concepts and techniques, focusing on practical skills for identifying, preventing, and responding to cyber threats. Ideal for those with some basic knowledge of cybersecurity who want to enhance their skills.",
      image:image11
  },
  {
    tittle: "Advanced Cybersecurity and Threat Intelligence",
    price:"Dive into the fascinating field of Natural Language Processing (NLP) with this comprehensive course designed for both beginners and intermediate Python programmers. This course will take you from the basics of text processing to advanced NLP techniques, using Python and its powerful libraries.",
    image:image12
},

  ]
  const fdata = [
    {
      tittle: "Javascript",
      price:"This course offers a deep dive into Natural Language Processing (NLP) using JavaScript, tailored for beginners and intermediate developers. You’ll learn how to handle, process, and analyze text data, implement NLP algorithms, and create interactive web applications that leverage NLP. By the end of this course, you'll have the skills to build robust NLP applications, from chatbots to text summarization tools.",
      image:image4
  },
  {
      tittle: "Front End",
      price:"Unlock the potential of modern web development with this comprehensive course on front-end development using JavaScript. This course is designed for beginners and intermediate developers who want to create interactive, dynamic, and responsive web applications. You'll learn how to build web interfaces with HTML, style them with CSS, and add interactivity using JavaScript, along with modern tools and frameworks to streamline your development process.",
      image:image5
  },
  {
    tittle: "data base",
    price:"Learn how to efficiently manage and manipulate data using SQL (Structured Query Language) in this comprehensive course designed for beginners and intermediate learners. This course covers the fundamentals of database design, querying, and administration, enabling you to create and maintain robust databases for various applications.",
    image:image6
},
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route index element={ <Home data={data}/>} />
          <Route path="Full-Stack" element={<Blogs fdata={fdata} />}/>
          <Route path="Data-Stcience" element={<Page3 data={data1}/>}/>
          <Route path="cyber" element={<Page4 data={data2}/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);