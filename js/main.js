const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const seeView = (vistaAMostrar) => {
$$(".view").forEach((view) => view.classList.add("is-hidden"));
$(`#${vistaAMostrar}`).classList.remove("is-hidden");
};

$("#trabajos").addEventListener("click", () => 
    seeView("list-jobs"));

$("#crear").addEventListener("click", () => seeView("create-job"));


renderJobs = (jobs) => {
    console.log(jobs);
    seeView('list-jobs');
}



