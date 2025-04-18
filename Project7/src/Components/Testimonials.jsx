import React, { useState } from 'react'
import "../style.css"
const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            id: 1,
            name: "Aarav Patel",
            designation: "Full Stack Developer",
            company: "Cognizant",
            message: "This platform completely transformed the way I manage my projects. Super smooth experience and excellent support.",
            rating: 5
        },
        {
            id: 2,
            name: "Sneha Reddy",
            designation: "Data Scientist",
            company: "Capgemini",
            message: "The tools are highly intuitive and saved me countless hours on model training and deployment. Highly recommended!",
            rating: 4
        },
        {
            id: 3,
            name: "Raj Malhotra",
            designation: "DevOps Engineer",
            company: "IBM",
            message: "Amazing automation features! It fits perfectly into our CI/CD pipeline and improved our delivery speed.",
            rating: 5
        },
        {
            id: 4,
            name: "Meera Das",
            designation: "AI Researcher",
            company: "IIT Madras",
            message: "A brilliant resource for AI enthusiasts! The documentation is clear and the community is super helpful.",
            rating: 5
        },
        {
            id: 5,
            name: "Kunal Verma",
            designation: "Software Tester",
            company: "Tech Mahindra",
            message: "Reliable, fast, and user-friendly — what more can you ask for? Loved using this on multiple projects.",
            rating: 4
        },
        {
            id: 6,
            name: "Neha Kapoor",
            designation: "Product Manager",
            company: "Microsoft",
            message: "Fantastic features and seamless collaboration options. It really made our product development cycle smoother.",
            rating: 5
        },
        {
            id: 7,
            name: "Vikram Sinha",
            designation: "Backend Developer",
            company: "Amazon",
            message: "Robust, scalable, and extremely well-documented. I integrated it into our microservices architecture effortlessly.",
            rating: 5
        },
        {
            id: 8,
            name: "Ishita Jain",
            designation: "Cloud Solutions Architect",
            company: "Google",
            message: "The cloud integration support is fantastic. It played a huge role in improving our deployment strategies.",
            rating: 5
        },
        {
            id: 9,
            name: "Aditya Rao",
            designation: "Game Developer",
            company: "Ubisoft",
            message: "The graphics rendering tools were a game-changer for my projects. Super efficient and easy to implement.",
            rating: 4
        },
        {
            id: 10,
            name: "Divya Sen",
            designation: "UI/UX Designer",
            company: "Adobe",
            message: "Absolutely loved the interface and attention to detail. It elevated the user experience across all our apps.",
            rating: 5
        }
    ];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    }
    const handlePrev = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    }

    return (
        <div className="card">
            <p>{testimonials[currentIndex].id}</p>
            <p>{testimonials[currentIndex].message}</p>
            <p>-{testimonials[currentIndex].name}</p>
            <p>({testimonials[currentIndex].designation})</p>
            <p>({testimonials[currentIndex].company})</p>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>


    )
}

export default Testimonials