/*
You have a bank of switches before you, numbered from 1 to count. 
Every switch is connected to exactly one light that is initially off. 
You walk down the row of switches and toggle every one of them, that is, you flip every switch. 
All the lights are now on. You walk back to the beginning of the row and start another pass. 
On this second pass, you toggle switches 2, 4, 6, and so on. 
Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. 
You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.
*/

/*
- Initialize object
SET switchBank = empty object
SET lightSwitch = 1
WHILE lightSwitch <= count
  SET object key = lightSwitch
  SET object value = false (false represents that switch is off)
*/

function InitializeSwitchBank(count) {
  let switchBank = {};

  for (let lightSwitch = 1; lightSwitch <= count; lightSwitch += 1) {
    switchBank[lightSwitch] = false;
  }

  return switchBank;
}

/*
- Conduct passes
SET currentPass = 1
WHILE currentPass <= count
  Conduct a pass
*/

function conductPasses(count, switchBank) {
  for (let currentPass = 1; currentPass <= count; currentPass +=1) {
    singlePass(currentPass, count, switchBank);
  }
}

/*
- Conduct a pass
SET switchMultiple = currentPass
SET currentSwitch = currentPass
WHILE currentSwitch <= count
  SET value in 'switchBank' at key 'currentSwitch' to the opposite boolean from its current value
  SET currentSwitch = currentSwitch + switchMultiple
*/

function singlePass(switchMultiple, count, switchBank) {
  
  for (let currentSwitch = switchMultiple; currentSwitch <= count; currentSwitch += switchMultiple) {
    switchBank[currentSwitch] = !switchBank[currentSwitch];
  }
}

/*
- Create output array
SET switchBank = return value of initializeSwitchBank  
SET switchedOn = empty array
  FOR every switch (key) in switchBank (object)
  IF the value for the switch = true (i.e. if the switch is on)
    SET new element in array = key of the current switch

RETURN switchedOn
*/

function lightsOn(count) {
  let switchedOn = [];
  let switchBank = InitializeSwitchBank(count);

  conductPasses(count, switchBank);

  for (let currentSwitch in switchBank) {
    if (switchBank[currentSwitch] === true) {
      switchedOn.push (Number(currentSwitch));
    }
  }

  return switchedOn;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
