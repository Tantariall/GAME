function Delay(time){
   return new Promise(resolve => setTimeout(resolve, time));
};
let display = document.getElementById("Stats");
let Actions = "Nothing"
let Player = {
   Power: 0,
   Gold: 100,
   Distance: 1,
};
function Display(){
  display.innerHTML =`Your Power is ${Player.Power.toFixed(2)}, Gold ${Player.Gold.toFixed(2)}, Distance ${Player.Distance.toFixed(2)}`;
};
async function Act(x){
   if (x==1){
      Actions = "Travel"
   } else if (x==2){
      Actions = "Fight"
   } else if (x==3){
      Actions = "Train"
   } else if (x==0){
      Actions = "Nothing"
   }
}
async function Eternal_Act(){
   while (1>0){
   if (Actions=='Travel'){
      Travel();
   }
   else if (Actions=='Fight'){
      Fight();
   }
   else if (Actions=='Train'){
      Train();
   }
   else if (Actions=="Nothing"){
      //NOTHING;
   }
   Display()
   await Delay(10)
   }
}
function Fight(){
   Player.Gold += 0.01+(Player.Distance**0.3)
   Player.Power += Player.Distance**0.2
};
Eternal_Act()
