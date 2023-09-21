import express from 'express';
import cors from 'cors';
import { users } from './data/users.js';
import { GameData } from './data/gameData.js';
import { Weapons } from './data/weapons.js';
import { Skills } from './data/skills.js';

const app = express();

app.use(cors());
app.use(express.json({limit: '3MB'}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send(
        `
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
            <div style="display:flex;flex-wrap:wrap;justify-content:space-around;">
                <p style="width:35rem" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
                    http://localhost:5500/users/
                </p>
                <p style="width:50%;">
                    Hier sind die vor eingestellten User mit denen man sich einloggen kann.
                </p>
                <p style="width:35rem" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
                    http://localhost:5500/game/
                </p>
                <p style="width:50%;">
                    Hier sind die Statistiken der Charaktere.
                </p>
                <p style="width:35rem" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
                    http://localhost:5500/items/
                </p>
                <p style="width:50%;">
                    Hier findest du einige wenige Items um dem Spiel etwas würze zu verleihen..
                </p>
                <p style="width:35rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
                    http://localhost:5500/skills/
                </p>
                <p style="width:50%;">
                    Hier sind einige Skills für die unterschiedlichen Klassen.
                </p>
            </div>
        </main>
    `
    );
});

// Open API
app.use('/users', (req, res) => {
    res.send(users)
})
app.use('/game', (req, res) => {
    res.send(GameData)
})
app.use('/items', (req, res) => {
    res.send(Weapons)
})
app.use('/skills', (req, res) => {
    res.send(Skills)
})