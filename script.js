const form=document.querySelector("form")
const nlwSetup=new NLWSetup(form)
const button=document.querySelector("header button")

button.addEventListener("click",()=>{
  add()
})
form.addEventListener("change",()=>{save()})

function add(){
  const today=new Date().toLocaleDateString("pt-br").slice(0,-5)
  
  const dayExists=nlwSetup.dayExists(today)
  if(dayExists){
  alert("dia ja existe ❌")  
  return
}

alert("Registrado com sucesso...✔")  
nlwSetup.addDay(today)

}

function save(){
 localStorage.setItem("NlwSetupHabits",JSON.stringify(nlwSetup.data)) 
}

 /* const data={
  run:["01-02","01-03","01-04"],
  water:["01-02","01-03","01-07"],
  food:["01-03","01-05","01-06"],
} */
const data=JSON.parse(localStorage.getItem("NlwSetupHabits"))||{}
nlwSetup.setData(data)
nlwSetup.load() 