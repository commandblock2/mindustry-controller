unitBind(Units.flare)
const bank = getBuilding("bank1");
const memory = new Memory(bank, 512);

if (!Vars.unit.flag)
    unitControl.flag(memory[0]++)

unitControl.approach({
    x: Vars.unit.flag * 20,
    y: 0,
    radius: 20
})