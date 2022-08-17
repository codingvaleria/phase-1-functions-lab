// Code your solution in this file!


const hQ = 42;
function distanceFromHqInBlocks(block) {
    return Math.abs(hQ - block);

}

function distanceFromHqInFeet(block) {

    return distanceFromHqInBlocks(block) * 264;

}

function distanceTravelledInFeet(blockA, blockB) {

    return Math.abs(distanceFromHqInFeet(blockA) - distanceFromHqInFeet(blockB));
}

function calculatesFarePrice(blockA, blockB) {
    const distance = distanceTravelledInFeet(blockA, blockB);
    if (distance <= 400) {
        return 0;
    }
    if (distance > 2000 && distance < 2500) {
        return 25;
    }
    if (distance > 2500) {
        return "cannot travel that far";
    }
    return (distance - 400) * 0.02;
}




