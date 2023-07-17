print`Total block count ${Vars.blockCount}\n`
print`Total unit count ${Vars.unitCount}\n`
const currentUnitCount = Vars.unitCount
for (let index = 0; index < currentUnitCount; index++) {
    const unit = lookup.unit(index);
    print`${index}, ${unit}\n`
    
}
const blockCount = Vars.blockCount
for (let index = 0; index < blockCount; index++) {
    const element = lookup.block(index);
    print`${index}, ${element}\n`
}
printFlush()