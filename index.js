function introduction(name){
    console.log(`Hi,my name is ${name}.`)

}
function introductionWithLanguage(name, language){
    console.log(`Hi,my name is ${name} and am learning to program in ${language}.`)
}
function introductionWithLanguage(name, language = "JavaScript"){
    console.log(`Hi,my name is ${name} and am learning to program in ${language}.`)
}