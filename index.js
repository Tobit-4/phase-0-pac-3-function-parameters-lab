function introduction(name="Aki"){
    console.log(`Hi,my name is ${name}.`)

}
function introductionWithLanguage(name = "Aki" , language="Ember.js"){
    console.log(`Hi,my name is ${name} and am learning to program in ${language}.`)
}
function introductionWithLanguageOptional(name="Aki", language = "JavaScript"){
    console.log(`Hi,my name is ${name} and am learning to program in ${language}.`)
}