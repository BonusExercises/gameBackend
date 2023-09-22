export const ServerPage =  `
<main style="background-color:#404050; color:#ccc;
font-family:'Century Schoolbook',serif; font-size:2rem; letter-spacing:0.3rem;
padding:4rem; border:double #ccc 0.4rem;"
title="Zitat von Francis Picabia">
    <h1 style="text-align:center;">CREATE A GAME</h1>
    <p>
        Hier sind die API´s um an die verschiedenen Daten für das Spiel zu kommen.
        Nutze die Daten, die du für deine Version des Spiels benötigst. Solltest
        du Lust drauf haben dir mehr Details auszudenken, melde dich gerne.
        Viel Spaß bei der Übung! 
    </p>
    <div style="display:flex;flex-wrap:wrap;justify-content:space-around;font-size:1.71rem;">
        <p style="width:40rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            Fetch URL: https://createagame.onrender.com/users/
        </p>
        <p style="width:45%;">
            Hier sind die vor eingestellten User mit denen man sich einloggen kann.
        </p>
        <p style="width:40rem" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            Fetch URL: https://createagame.onrender.com/game/
        </p>
        <p style="width:45%;">
            Hier sind die Statistiken der Charaktere.
        </p>
        <p style="width:40rem" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            Fetch URL: https://createagame.onrender.com/items/
        </p>
        <p style="width:45%;">
            Hier findest du einige wenige Items um dem Spiel etwas würze zu verleihen..
        </p>
        <p style="width:40rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            Fetch URL:  https://createagame.onrender.com/skills/
        </p>
        <p style="width:45%;">
            Hier sind einige Skills für die unterschiedlichen Klassen.
        </p>
    </div>
</main>
`