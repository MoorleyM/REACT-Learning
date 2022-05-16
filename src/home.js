import React from 'react';

import ListOne from './components/lists/list-one.component';
import LessonThree from './components/lessons/lesson-three/lesson-three.component';
import Footer from './components/footer/footer.component';
import MainNav from './components/navbars/main-nav.components';
import Notes from './components/notes/note';
import Card from './components/cards/card.component';

import './home.styles.scss'

// Lesson One
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const fName = "Michael";
const lName = "Moorley";


// Lesson Three
const currentHour = currentDate.getHours();
let heading;

const customStyles = {
    color: ""
}

if (currentHour < 12) {
    heading = "Good Morning"
    customStyles.color = "red"
} else if (currentHour < 18) {
    heading = "Good Afternoon"
    customStyles.color = "green"
} else {
    heading = "Good Night"
    customStyles.color = "blue"
}


const Home = () => {
    return (
        <section className='body-container'>
            <MainNav />
            <section className='first-lesson'>
                <h1>Hello, I'm {fName}</h1>
                <p>Developed by {fName} {lName}</p>
                <p>Copyright &#169;{currentYear}</p>
            </section>
            <section className='second-lesson'>
                <h1>My Favourite Foods</h1>
                <img alt='Pizza' src="https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg" className='basic-images'></img>
                <img alt='Kraft Dinner' src="https://media.blogto.com/articles/2022126-kraft.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" className='basic-images'></img>
                <img alt='Mc Donalds' src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/hero/Hero_McDelivery_Desktop_1168x520.jpg" className='basic-images'></img>
            </section>
            <section className='third-lesson'>
                {/* Create a React app from scratch.
                Show a single h1 that says " Good Morning " if between midnight and 12pm
                or " Good Afternoon " if between 12pm and 6pm
                or " Good Evening " if between 6Pm and midnight
                Dynamically change the color of the h1 using inline css styles
                Morning = red, Afternoon = green and Night = blue. */}
                <h1 className='lesson-three-heading' style={customStyles}>{heading}</h1>
            </section>
            <section className='fourth-lesson' >
                {/* Create a list component and display it */}
                <ListOne />
            </section>
            <section className='lesson-five'>
                {/* Turn lesson three into a component and import here */}
                <LessonThree />
            </section>
            <section className='lesson-six'>
                {/* 1. Create Header.jsx component
                2. Add H1 "Keep App" name to Header
                3. Create Footer.jsx component that renders a footer getElementById
                4. Add copyright message that dynamically updates year to year
                5. Create a note.jsx component to show div element with h1 for title and
                p for content
                6. Make sure that the final website is styled like the example */}
                <Notes />
            </section>
            <section className='lesson-seven'>
                <h1>Props Lesson</h1>
                <Card 
                    name='Jeff Gordon' 
                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Jeff_gordon_%2847223209121%29.jpg/800px-Jeff_gordon_%2847223209121%29.jpg' 
                    tel='519-226-7878'
                    email='jeff@hotmail.com'
                />
            </section>
            <Footer />
        </section>
    );
  };
  
  export default Home;
  