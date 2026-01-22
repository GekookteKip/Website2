const jobCategories = {
  "Technology 💻": [
    { name: "Software Developer 💻", explanation: "AI will definitely help with coding, but the fine tuning of the code and making changes to the code is still something humnas have to do. The chances of this job getting taken over is Medium🟡" }, 
    { name: "Data Scientist 📊", explanation: "Artificial Intelligence will help with anylyzing data, but humnas still need to use creative thinking for the right strategy. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Web Designer 🎨", explanation: "Artificial Intelligence can most definitely generate many designs, but that doesnt mean humans are not needed anymore. Humnas will still be needed for fine tuning. The chances of this job getting taken over is Medium🟡" },
    { name: "IT Support 🛠️", explanation: "Artificial Intelligence will most likely take over routine tasks, but many support taks are already automated by AI and their are more to come. The chances of this job getting taken over is High🔴" },
    { name: "Database Administrator 🗄️", explanation: "Artificial Intelligence will most likely be taking a lot of work from database administrators, but that does not mean humans do not have any work at all their anymore. For more complex databases human creativity is still needed. The chances of this job getting taken over is Medium🟡" },
    { name: "Cybersecurity Specialist 🔐", explanation: "With Artificial Intelligence problems will be spotted way faster, but humans must still be needed if an real threat has been spotted. An AI cannot solve every threat. The chances of this job getting taken over is Low🟢" },
    { name: "Network Engineer 🌐", explanation: "Artificial Intelligence is already automating many routine tasks. Humans do still have to many things like security management and reporting, but AI is taking over tasks like monitoring and sometimes maintenance. The chances of this job getting taken over is Medium🟡" },
    { name: "Mobile App Developer 📱", explanation: "Artificial Intelligence will be speeding up the process. You can create apps with AI but the fine tuning needa an real coder behind the screen. The chances of this job getting taken over is Medium🟡" }
  ],
  "Healthcare 🏥": [
    { name: "Doctor 🩺", explanation: "AI will definitely help doctors analyze many things, but the doctors care and knowledge is essential for an patient. The chances of this job getting taken over is Low🟢" },
    { name: "Nurse 👩‍⚕️", explanation: "Artificial Intelligence will help with monitoring patients, but they still need care from real people. The chances of this job getting taken over is Low🟢" },
    { name: "Medical Researcher 🧪", explanation: "Artificial intelligence will be researching data, but the testing in laboratorium can not be done by AI. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Therapist 🧠", explanation: "Artificial Intelligence is incapable of replaceing real human emotions that that is why this job is very safe from AI. The chances of this job getting taken over is Low🟢" },
    { name: "Dentist 🦷", explanation: "Artificial Intelligence is helping making dedicated plans for people who for example need braces, but the procedures have to be done by humans. The chances of this job getting taken over is Low🟢" },
  ],
  "Education 🎓": [
    { name: "Teacher 🍎", explanation: "Artificial Intelligence will help teachers make a lesson plans and more, but the teaching cannot be automated. The chances of this job getting taken over is Low🟢" },
    { name: "Professor 🎓", explanation: "AI  will assists with research and grading, but professors still have to be teaching. The chances of this job getting taken over is Low🟢" },
    { name: "School Counselor 🧭", explanation: "AI cannot replace human support for student mental health and life guidance that. The chances of this job getting taken over is Low🟢" },
    { name: "Education Administrator 🏫", explanation: "AI will be helping with many thinks in administration, but many questions and calls have to be done by humans. The Chances of this job gettin taken over is Medium🟡 " },
    { name: "Librarian 📚", explanation: "Artificial Intelligence will help in the databases with storing books, where they are in the library or who the book has at the moment, but librarions still need to put the books in the right places. The Chances of this job gettin taken over is Medium🟡" }
  ],
  "Business 💼": [
    { name: "Accountant 📒", explanation: "AI will be automating many things like reports, deposit and more, but you still have to discuss strategy with an human accountant. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Marketing Manager 📢", explanation: "AI analyzes campaigns, but humans still have to make strategies and make good connections with other important people. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Business Analyst 📈", explanation: "AI will be doing a lot like analyzing data and making some decisions with that, but humans still make recommended plans for the buisnessses. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Project Manager 🗂️", explanation: "Ai will be tracking things like timelines and budgets but an manager still needs to lead their team to get withing those deadliens. The chances of this job getting taken over is Low🟢 " },
    { name: "Operations Manager ⚙️", explanation: "AI optimizes operations, but human strategy is still the most important part here. The Chances of this job gettin taken over is Medium🟡" }
  ],
  "Creative 🎨": [
    { name: "Graphic Designer 🎨", explanation: "AI generates many cool designs, but humans create original concepts and solve many visual problems and more. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Video Editor 🎬", explanation: "AI will be helping with editing tasks, but editors  many cool creative choices thatreally can tell a very good story. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Copywriter ✍️", explanation: "AI can generate texts much better than most humans can, but copywriters create very good messages that for audiences. The chances of this job getting taken over is High🔴" },
    { name: "Musician 🎵", explanation: "AI can create music and, but musicians create many emotional moments that an AI cannot do and perform. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Photographer 📸", explanation: "AI can make beautiful photos but nothing compares to real photographers that go around the world to make photos. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Content Creator 📱", explanation: "AI will be making many content ideas, but the creators have a way of making the content and connecting with their audiences. The chances of this job getting taken over is High🔴" },
  ],
  "Trades 🛠": [
    { name: "Electrician ⚡", explanation: "Artificial Intelligence might be able to create the shortest way for elektricty to go through a house, but you need hand skills to do this. The chances of this job getting taken over is Low🟢" },
    { name: "Plumber 🚰", explanation: "AI might have solutions, but you have to this job your hands. It is not possible to this with AI. The chances of this job getting taken over is Low🟢" },
    { name: "Carpenter 🪚", explanation: "AI can help with creating design, but carpenters need their hands to build quality structures and install them. The chances of this job getting taken over is Low🟢" },
    { name: "Mechanic 🔧", explanation: "AI can sometimes diagnoses car issues, but mechanics to work on the car physically and need skills to repair vehicles. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Construction Worker 🏗️", explanation: "AI can definitely help with planning projects, but workers need physical skills to make buildings. The chances of this job getting taken over is Low🟢" },
    { name: "Welde 🔥r", explanation: "AI can program some welding machines, but not everything is done through machines welders still need precision for most things they do. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Solar Technician ☀️", explanation: "AI is designing the best sytems, but technicians physical skills to install solar panels and make sure they work. The chances of this job getting taken over is Low🟢" }
  ],
  "Service 🧑‍🍳": [
    { name: "Cashier 🧾", explanation: "Artificial Intelligence has already made sure auto check-outs are possible now so cashiers will be doing a lot less. The chances of this job getting taken over is High🔴" },
    { name: "Restaurant Server 🍽️", explanation: "Arificial Intelligence can manage orders, but servers still make connections and talk with people they are serving making the experience better. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Hotel Manager 🏨", explanation: "AI is handeling most of the resevation, but managers are making sure the quest are sastisfided. The chances of this job getting taken over is Low🟢" },
    { name: "Security Guard 🛡️", explanation: "AI can monitors cameras and see unusual things, but guards respond to threats and have to be making in the moment decisions. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Receptionist 🛎️", explanation: "Artificial intelligence can already easily make appoinments, but receptionists greet people and sometimes manage some complexe situations. The chances of this job getting taken over is High🔴 " },
    { name: "Flight Attendant ✈️", explanation: "AI is assisting and helping with tasks, but flight attendants make sure the passangers feel safe. The chances of this job getting taken over is Low🟢" },
  ],
  "Transportation 🚗": [
    { name: "Truck Driver 🚛", explanation: "AI can most definitely help with optimizing routs, the drivers navigate, make decisions, and ensure safety for themself and others on the road. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Taxi Driver 🚕", explanation: "AI can most definitely help with optimizing routs, but drivers navigate through the city and the streets and interact with their passengers. The Chances of this job gettin taken over is Medium🟡" },
    { name: "Delivery Driver 📦", explanation: "AI can most definitely help with optimizing routs, but drivers still have to handle deliveries and many customer interactions The chances of this job getting taken over is High🔴." },
    { name: "Bus Driver 🚌", explanation: "AI creates and manages good schedules for the busses and the bus drivers navigate and ensure passenger safety The Chances of this job gettin taken over is Medium🟡." },
    { name: "Pilot ✈️", explanation: "AI can make and assist flight plans but pilots make critical in the moment decisions and ensur for the safety of the passangers. The chances of this job getting taken over is Low🟢" },
    { name: "Ship Captain 🚢", explanation: "AI can detect unusual activities in the route, but the captain makes critical commands for in the moment. The chances of this job getting taken over is Low🟢" },
    { name: "Delivery Coordinator 🗺️", explanation: "AI optimizes many routes and a lot schedules, but coordinators are able to solve problems that AI might not be able to do and they manage teams. The Chances of this job gettin taken over is Medium🟡" }
  ],
  "Other 📦": [
    { name: "Lawyer ⚖️", explanation: "AI can sometimes research some cases, but lawyers make good legal statemants in court and have to make many decisions for their clients. The Chances of this job gettin taken over is Medium🟡." },
    { name: "Journalist 📰", explanation: "Journalists have to go to places where they can report news on AI can help with the production. The chances of this job getting taken over is High🔴" },
    { name: "Chef 👨‍🍳", explanation: "AI could make recipes, but most chefs use either their own recipes or recipes from sometimes hunderds of years ago. The chances of this job getting taken over is Low🟢" },
    { name: "Farmer 🌾", explanation: "Artificial Intelligence helps with the water supply the crops need, but farmers make decisions about planting and harvesting and also have to do the hard work. The Chances of this job gettin taken over is Medium🟡." },
    { name: "Architect 🏛️", explanation: "AI can generate designs, but architects will be modifying those designs to make them better, stronger and make sure they meet the demands of the clients. The Chances of this job gettin taken over is Medium🟡." },
    { name: "Social Worker 🤝", explanation: "AI can help identifying cases in the systems, but social workers provide support and change lives of so many young people around the country. The chances of this job getting taken over is Low🟢" }
  ]
};

const jobs = [
  {
    name: "Teacher",
    aiTasks: ["Grading tests", "Planning lessons"],
    humanTasks: ["Explaining topics", "Supporting students"],
    impact: "Medium"
  },
  {
    name: "Cashier",
    aiTasks: ["Self-checkout", "Scanning products"],
    humanTasks: ["Helping customers", "Handling problems"],
    impact: "High"
  }
];
