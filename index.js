function introduction(name){
    console.log(`Hi, my name is ${name}.`);
}
introduction(Aki);

function introductionWithLanguage(name , language){
    console.log(`Hi, my name is ${name} and am learning to program in ${language}.`);
}
introductionWithLanguage(Aki, Ember.js);

function introductionWithLanguageOptional(name, language="JavaScript"){
    console.log(`Hi, my name is ${name} and am learning to program in ${language}.`);
}
introductionWithLanguageOptional(Gracie);