unitBind(Units.flare)
const bank = getBuilding("bank1");
const switch1 = getBuilding("switch1");
const memory = new Memory(bank, 512);


if (switch1.enabled) {
    // takes 1 unit per loop and give it a task
    if (!Vars.unit.controlled) {
        unitControl.flag(memory[0]);
        memory[memory[0] + 1] = 1;
        memory[0]++;
    }


    unitControl.approach({
        x: Vars.unit.flag * 10,
        y: Math.rand(30),
        radius: 0
    });
}
else {
    if (Vars.unit.controlled) {
        // unbind 1 unit per loop and resetting memory to 0
        const flag = Vars.unit.flag
        memory[flag + 1] = 0;
        memory[0]--;
        unitControl.flag(0);
        unitControl.unbind();
    }
}

