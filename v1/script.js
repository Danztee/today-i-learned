const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-list");

//factList.innerHTML = "";

// load data from database
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://yojgjjrqerybmzzpvybo.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamdqanJxZXJ5Ym16enB2eWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NTg1OTksImV4cCI6MTk5NDUzNDU5OX0.2aQlZCtn0unUIjljdoqjpF_-q_wzTKN48FHkeORlTQI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvamdqanJxZXJ5Ym16enB2eWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NTg1OTksImV4cCI6MTk5NDUzNDU5OX0.2aQlZCtn0unUIjljdoqjpF_-q_wzTKN48FHkeORlTQI",
      },
    }
  );

  const data = await res.json();
  console.log(data);
}

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

let votesInteresting = 23;
let votesMindblowing = 5;

const text = "Daniel is a boy";

function calcFactAge() {
  const currYear = new Date().getFullYear();
}
