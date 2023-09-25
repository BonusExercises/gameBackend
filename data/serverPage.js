export const ServerPage =  `
<main style="background-color:#404050; color:#ccc;
font-family:'Century Schoolbook',serif; font-size:1.8rem; letter-spacing:0.3rem;
padding:4rem; border:double #ccc 0.4rem;"
title="Zitat von Francis Picabia">
    <h1 style="text-align:center;">API World</h1>
    <p style="font-size:1.6rem;">
        Willkommen auf meinem kleinen Server. Hier findest du einige vorbereitete API´s zum Üben im Umgang mit Fetch und Axios. Wähle eines der folgenden Unterpunkte aus um die API-URl zu erhalten. Aktuell arbeitet der Server ohne jegliche Verbindung zu Datenbanken und die Abrufbaren Daten sind Hardcoded. Daher sind bisher nur GET requests möglich. Im Laufe dieses Übungsprojektes werden eventuell weitere Features hinzugefügt. 
    </p>
    <div style="display:flex;flex-wrap:wrap;justify-content:space-around;font-size:1.5rem;">
        <h2 style="width:100%;margin-top:0.4rem;text-align:center;color:red;">
            NAVIGATION
        </h2>
        <button style="background-color:#232323;width:40rem;margin-top:1rem;padding:1rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            <a style="color:#ccc;text-decoration:none;font-size:1.4rem;"  href="https://createagame.onrender.com/employees/">
                Mitarbeiter (Data-Manangement)
            </a>
        </button>
        <button style="background-color:#232323;width:40rem;margin-top:1rem;padding:1rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'" disabled>
            <a style="color:#ccc;text-decoration:none;font-size:1.4rem;"  href="https://createagame.onrender.com/">
                Zu den Game Dateien
            </a>
        </button>
        <button style="background-color:#232323;width:40rem;margin-top:1rem;padding:1rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'">
            <a style="color:#ccc;text-decoration:none;font-size:1.4rem;"  href="https://createagame.onrender.com/game/">
                Zu den Game Dateien
            </a>
        </button>
        <button style="background-color:#232323;width:40rem;margin-top:1rem;padding:1rem;" onMouseOver="this.style.color='red'" onMouseOut="this.style.color='#ccc'" disabled>
            <a style="color:#ccc;text-decoration:none;font-size:1.4rem;"  href="https://createagame.onrender.com/">
                Zu den Game Dateien
            </a>
        </button>
    </div>
</main>
`