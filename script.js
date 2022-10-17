let myname = "Sam Hopkins";
let degreetype = "BS";
let degreename = "Computer Science";
let university = "University of Miami";
let email = "samjhopkins9@gmail.com";
let phonenumber = "415-480-9033";
let linkedin = "https://www.linkedin.com/in/sam-hopkins-6656a6205/";
let bio = "I was born in Boston, experienced my earliest memories living in Hong Kong, but primarily grew up in Mill Valley, CA, right outside of San Francisco. Now, I am at the University of Miami pursuing a B.S. in Computer Science and minors in Math, Music Business and Music, with an expected graduation of May 2025. I spent my first two years in Miami pursuing a degree in Music Production/Engineering in the Frost School of Music. I have been writing and producing original music since I was 12 and playing the drums since I was 4, so I entered the Frost School of Music with hopes of turning these passions into careers. I learned to code the summer after my Sophomore year of college in order to work on an algorithm for trading options (another interest of mine) and absolutely fell in love with it beyond the scope of just that one project. I wrote simple swift scripts to track my assignments, to-dos and workouts. I wrote a bash script that interfaces with python to copy all files of a specific type in all subfolders in a directory into selected folders based on user input, to ease any kind of file sorting operation. I made this website. I switched my major to computer science during the Fall of 2022 when I realized that the idea of having a job in software engineering, and cultivating my knowledge of it as much as possible, was extremely appealing to me. Additionally, I felt that my passions in music weren't directly translating to careers in the way that I had hoped, and I was not particularly enthralled by the idea of working in the music industry in another capacity. Music will forever be a passion for me, but my newfound passion for code has been extremely exciting for me as of late and I would love nothing more than to spend all day at work writing programs. I want to be a software engineer because I want to be paid to do something I love, to work with others on larger, more detailed projects than those I can do by myself, and to be in an environment where I can always keep learning more more about computers and code.";

let skills = ['C++', 'Python', 'Swift', 'JavaScript', 'Command Line/Bash', 'HTML', 'CSS', 'Microsoft Excel', 'Ableton Live', 'Logic Pro X', 'Avid Pro Tools', 'DJing', 'Drums', 'Spanish', 'Customer Service'];

let Job = (position, employer, location, jobdescription, hours_week, months_worked) => {
    return {
        position,
        employer,
        location,
        jobdescription,
        hours_week,
        months_worked
    }
}
let jobs = [
    Job("Busser/Dishwasher/Food Runner", "The Contented Sole", "Pemaquid, ME",
        "Bussed tables, ran food, and washed dishes in a fast-paced seasonal dockside restaurant in Pemaquid, ME.",
        "15-25", "June-August 2018"),
    Job("Host/Busser", "The Cantina", "Mill Valley, CA",
        "Bussed tables, stocked items, took phone orders and sat customers in a full-service Mexican restaurant in Mill Valley, CA.",
        "15-25", "June-August 2020, 2021, 2022")
];

let School = (school, location, timedescription) => {
    return {
        school,
        location,
        timedescription
    }
}
let schools = [
    School("Marin Academy", "San Rafael, CA", "Class of 2020."),
    School("University of Miami", "Coral Gables, FL", "BS in Computer Science, minors in Math, Music Business and Music. Zeta Beta Tau Fraternity.")
];

let Course = (certificate, coursename, coursesite) => {
    return {
        certificate,
        coursename,
        coursesite
    }
}

let courses = [
    Course('Certificates/C++.pdf', 'Learn C++', 'Codecademy'),
    Course('Certificates/C++_for_programmers.pdf', 'C++ for Programmers', 'Codecademy'),
    Course('Certificates/Python.pdf', 'Learn Python', 'Codecademy'),
    Course('Certificates/Swift.pdf', 'Learn Swift', 'Codecademy'),
    Course('Certificates/JavaScript.pdf', 'Learn JavaScript', 'Codecademy'),
    Course('Certificates/Command_Line.pdf', 'Learn the Command Line', 'Codecademy'),
    Course('Certificates/Bash_Scripting.pdf', 'Learn Bash Scripting', 'Codecademy'),
    Course('Certificates/HTML.pdf', 'Learn HTML', 'Codecademy'),
    Course('Certificates/CSS.pdf', 'Learn CSS', 'Codecademy')
];

let Project = (projlink, projname, projdesc, projid) => {
    return {
        projlink,
        projname,
        projdesc,
        projid
    }
}

let projects = [
    Project('https://github.com/samjhopkins9/quantitative-trading-model', 'Quantitative Trading Model',
            'Stock and ETF option trading algorithm designed to consistently predict small, short-term movements in symbols such as SPY, AAPL and TSLA. The reason for these symbols is that their options chains contain high-volume, consistently short-expiry out-of-the-money contracts that have a tendency to move closely relative to small changes in the underlying symbol, and because of these pricing factors can consistently yield very large returns without much needing to happen in the underlying at all. The algorithm is written in C++, and I am running it in command line. The program currently takes user-input determining which technical indicators to use to read patterns and entry/exit signals in the underlying stock using minutely and five-minutely data (EMA, ROC, RSI, various mathematical permutations, etc.). This portion of the program has been completed and my code is on GitHub for showcase. My current area of focus is writing it to loop through many combinations of technical inputs for reading patterns and entry signals and output the ones which generate the consistently highest rates of success it can find when backtested over both a recent and longer periods of time.', 'quant'),
    Project('REDWAVE./songs.html', 'REDWAVE.',
            "Current EDM/Hip-Hop DJing/Production project. All in all for this project, I have completed 9 songs, 3 in collaboration with singers, 3 remixes, and 3 instrumental originals, as well as a number of near finished drafts. I have also DJed at several fraternity parties, two at another fraternity and many of my own, and will continue to do so throughout the rest of my time in college. I haven't officially released anything for this project yet, but have been working on a lot of material for it since I began my time at University of Miami, and plan on beginning to release sometime in 2023. The provided link is one of the remixes I have finished, which was a submission for a contest, and is a good showcase of my recent production/sound design work. When I begin releasing again for this project, I will do so with more of a strategic marketing approach and my now much more professionally engineered music than I had the last time I released.", 'redwave'),
    Project('https://open.spotify.com/artist/3NaStpwKZfkncUveomQEIq', "Blue Heights",
            "Released 4 self-written, produced and engineered singles and an EP under the name Blue Heights.", 'blue'),
    Project('https://www.youtube.com/watch?v=dembujuTyI4', "Spacegoat", "Contemporary jazz and neo-soul band I was the drummer of during my junior year at Marin Academy. We recorded this video for the Marin Independent Journal in February 2019, and played in the showcase of their selection of Marin County's best high school musicians in April of that same year.", 'space')
];

function loadHTML(){
    document.getElementById('headshotp').innerHTML = `<img src="headshot.jpeg" id="headshot"></img>`;
    document.getElementById('title').innerHTML = myname;
    document.getElementById('name').innerHTML = myname;
    document.getElementById('description').innerHTML = `${degreetype} in ${degreename} at ${university}`;
    document.getElementById('bio').innerHTML = bio;
    
    let jobshtml = "";
    for (let i=jobs.length-1; i>=0; i--){
        jobshtml += `<li>${jobs[i].position} \@${jobs[i].employer}, ${jobs[i].location}</li>
                        <p class="jobdesc">${jobs[i].jobdescription}</p>
                        <p class="timedesc">${jobs[i].hours_week} hours/week, ${jobs[i].months_worked}</p> \n`;
    }
    document.getElementById('jobslist').innerHTML = jobshtml;
    
    let schoolshtml = "";
    for (let i=schools.length-1; i>=0; i--){
        schoolshtml += `<li>${schools[i].school}, ${schools[i].location}</li>
                            <p class="jobdesc">${schools[i].timedescription}</p> \n`;
    }
    document.getElementById('schoolslist').innerHTML = schoolshtml;
    
    let courseshtml = "";
    for (let i=0; i<courses.length; i++){
        courseshtml += `<li><a href=${courses[i].certificate}>${courses[i].coursename}</a> (${courses[i].coursesite})</li> \n`;
    }
    document.getElementById('courseslist').innerHTML = courseshtml;
    
    let skillshtml = "";
    for (let i=0; i<skills.length; i++){
        skillshtml += `<li>${skills[i]}</li> \n`;
    }
    document.getElementById('skillslist').innerHTML = skillshtml;
    
    let projectshtml = "";
    for (let i=0; i<projects.length; i++){
        projectshtml += `<li id="${projects[i].projid}"><a href='${projects[i].projlink}'>${projects[i].projname}</a></li>
                            <p class="jobdesc">${projects[i].projdesc}</p>`;
    }
    document.getElementById('projectslist').innerHTML = projectshtml;
    
    document.getElementById('email').innerHTML = `Email: ${email}`;
    document.getElementById('phone').innerHTML = `Phone: ${phonenumber}`;
    document.getElementById('linkedin').innerHTML = `<a href="${linkedin}">Linkedin</a>`;
}

loadHTML();
