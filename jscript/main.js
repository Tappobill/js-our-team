const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let percorso = "./img/";

for (let i = 0; i < team.length; i++) {
    let elementoCorrente = team[i];
    console.log(elementoCorrente.name);
    console.log(elementoCorrente.role);
    console.log(elementoCorrente.image);

    document.getElementById("names").innerHTML +=
    `
        <div class="card" style="width: 18rem;">
            <img src="${percorso + elementoCorrente.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${elementoCorrente.name}</h5>
            <p class="card-text">${elementoCorrente.role}</p>    
            </div>
        </div>
    `
}