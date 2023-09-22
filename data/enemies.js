export const Enemies = [
    {
        title: "Slime",
        level: 1,
        health: function(){
            return this.level * 25 + 200;
        },
        attack: function(){
            return this.level * 2 + 21;
        },
        defence: function(){
            return (this.level * 1.1 + 4).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 11).toFixed(0);
        },
    },
    {
        title: "Tapfere Fledermaus",
        level: 1,
        health: function(){
            return this.level * 25 + 180;
        },
        attack: function(){
            return this.level * 2 + 23;
        },
        defence: function(){
            return (this.level * 1.1 + 3).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 9).toFixed(0);
        },
    },
    {
        title: "Hinterhältiger Wolf",
        level: 1,
        health: function(){
            return this.level * 25 + 220;
        },
        attack: function(){
            return this.level * 2 + 24;
        },
        defence: function(){
            return (this.level * 1.1 + 5).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 15).toFixed(0);
        },
    },
    {
        title: "Gemeiner Oger",
        level: 1,
        health: function(){
            return this.level * 25 + 283;
        },
        attack: function(){
            return this.level * 2 + 28;
        },
        defence: function(){
            return (this.level * 1.1 + 12).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 21).toFixed(0);
        },
    },
    {
        title: "Stummer Eber",
        level: 1,
        health: function(){
            return this.level * 25 + 310;
        },
        attack: function(){
            return this.level * 2 + 24;
        },
        defence: function(){
            return (this.level * 1.1 + 25).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 33).toFixed(0);
        },
    },
    {
        title: "Kleiner Drache",
        level: 1,
        health: function(){
            return this.level * 25 + 380;
        },
        attack: function(){
            return this.level * 2 + 41;
        },
        defence: function(){
            return (this.level * 1.1 + 30).toFixed(0);
        },
        loot: [],
        exp: function(){
            return (this.level * 1.5 + 50).toFixed(0);
        },
    },
    {
        title: "Erddrache",
        level: 10,
        health: function(){
            return this.level * 25 + 666;
        },
        attack: function(){
            return this.level * 2 + 100;
        },
        defence: function(){
            return Number((this.level * 1.1 + 50).toFixed(0));
        },
        loot: [],
        exp: function(){
            return Number((this.level * 1.5 + 200).toFixed(0));
        },
    },
]