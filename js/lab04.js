let freelancers = [
    {
        id: 1,
        name: "Ayesha Khan",
        skill: "UI/UX Designer",
        category: "Design",
        experience: "Expert",
        rating: 4.9,
        availability: "Available"
    },
    {
        id: 2,
        name: "Hamza Ahmed",
        skill: "Frontend Developer",
        category: "Development",
        experience: "Intermediate",
        rating: 4.7,
        availability: "Available"
    },
    {
        id: 3,
        name: "Sara Malik",
        skill: "Content Writer",
        category: "Writing",
        experience: "Expert",
        rating: 4.8,
        availability: "Busy"
    },
    {
        id: 4,
        name: "Usman Ali",
        skill: "Digital Marketer",
        category: "Marketing",
        experience: "Intermediate",
        rating: 4.5,
        availability: "Available"
    },
    {
        id: 5,
        name: "Hassan Raza",
        skill: "Video Editor",
        category: "Video",
        experience: "Beginner",
        rating: 4.2,
        availability: "Available"
    }
];


let cards = document.getElementById("cards");


// DISPLAY USING MAP()
function displayFreelancers(list) {

    cards.innerHTML = "";

    list.map(function (f) {

        cards.innerHTML += `
            <div class="freelancer-card">

                <h3>${f.name}</h3>

                <p>${f.skill}</p>

                <p><b>Category:</b> ${f.category}</p>

                <p><b>Experience:</b> ${f.experience}</p>

                <p><b>Rating:</b> ⭐ ${f.rating}</p>

                <p><b>Status:</b> ${f.availability}</p>

                <button onclick="editFreelancer(${f.id})">
                    Edit
                </button>

                <button onclick="deleteFreelancer(${f.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


// INITIAL DISPLAY
displayFreelancers(freelancers);


// ADD USING PUSH()
document.getElementById("addForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let newFreelancer = {

        id: Date.now(),

        name: document.getElementById("name").value,

        skill: document.getElementById("skill").value,

        category: document.getElementById("category").value,

        experience: document.getElementById("experience").value,

        rating: Number(document.getElementById("rating").value),

        availability: document.getElementById("availability").value
    };

    freelancers.push(newFreelancer);

    displayFreelancers(freelancers);

    this.reset();
});


// DELETE USING FILTER()
function deleteFreelancer(id) {

    freelancers = freelancers.filter(function (f) {
        return f.id !== id;
    });

    displayFreelancers(freelancers);
}


// EDIT USING FIND()
function editFreelancer(id) {

    let f = freelancers.find(function (item) {
        return item.id === id;
    });

    let name = prompt("Enter name:", f.name);
    let skill = prompt("Enter skill:", f.skill);
    let rating = prompt("Enter rating:", f.rating);

    if (name && skill && rating) {

        f.name = name;
        f.skill = skill;
        f.rating = Number(rating);

        displayFreelancers(freelancers);
    }
}


// SEARCH + 5 FILTER OPTIONS
function filterFreelancers() {

    let search = document.getElementById("search").value.toLowerCase();

    let category = document.getElementById("categoryFilter").value;

    let experience = document.getElementById("experienceFilter").value;

    let rating = document.getElementById("ratingFilter").value;

    let availability = document.getElementById("availabilityFilter").value;

    let sort = document.getElementById("sortFilter").value;


    let result = freelancers.filter(function (f) {

        return (

            f.name.toLowerCase().includes(search) &&

            (category === "all" || f.category === category) &&

            (experience === "all" || f.experience === experience) &&

            (rating === "all" || f.rating >= Number(rating)) &&

            (availability === "all" || f.availability === availability)

        );

    });


    if (sort === "name") {

        result.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

    }

    if (sort === "rating") {

        result.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }


    displayFreelancers(result);

}


// FILTER EVENTS
document.getElementById("search").addEventListener("input", filterFreelancers);

document.getElementById("categoryFilter").addEventListener("change", filterFreelancers);

document.getElementById("experienceFilter").addEventListener("change", filterFreelancers);

document.getElementById("ratingFilter").addEventListener("change", filterFreelancers);

document.getElementById("availabilityFilter").addEventListener("change", filterFreelancers);

document.getElementById("sortFilter").addEventListener("change", filterFreelancers);


// 5 IF / ELSE CONDITIONS
function checkStatus(f) {

    if (f.rating >= 4.8) {
        return "Top Rated";
    }

    else if (f.rating >= 4.5) {
        return "Highly Rated";
    }

    else if (f.rating >= 4) {
        return "Good";
    }

    else if (f.rating >= 3) {
        return "Average";
    }

    else {
        return "Needs Improvement";
    }
}


// FOR LOOP
function runForLoop() {

    let output = "";

    for (let i = 0; i < freelancers.length; i++) {

        output += freelancers[i].name + "<br>";
    }

    document.getElementById("forOutput").innerHTML = output;
}


// WHILE LOOP
function runWhileLoop() {

    let output = "";
    let i = 0;

    while (i < freelancers.length) {

        output += freelancers[i].skill + "<br>";

        i++;
    }

    document.getElementById("whileOutput").innerHTML = output;
}


// LOOP + CONDITIONS
function runConditions() {

    let output = "";

    for (let i = 0; i < freelancers.length; i++) {

        output +=
            freelancers[i].name +
            " - " +
            checkStatus(freelancers[i]) +
            "<br>";
    }

    document.getElementById("conditionOutput").innerHTML = output;
}


// RUN LOOPS
runForLoop();
runWhileLoop();
runConditions();