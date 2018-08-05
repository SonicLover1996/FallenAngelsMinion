var commando = require("discord.js-commando");
var FallenAngelsMinion = new commando.CommandoClient({
    owner: "TheFallenAngel#3524",
    commandPrefix: "#"
});

FallenAngelsMinion.login("NDc1MTkxNjQyNzk0NjIyOTc2.DkghrQ.6aruT6fH8_nKhW5R9XFX_vywqnQ");

FallenAngelsMinion.registry.registerGroup('other', 'other');
FallenAngelsMinion.registry.registerCommandsIn(__dirname+ "/commands")
FallenAngelsMinion.registry.registerDefaults();


