// The World Translator
//
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// The Grade Assigner
var helloWorld= function(language){
  if (language==='es')
  {
    return "halo mundo";
  }else if ('de' === language)
  return "Hello World";
}
else{
  return "Hellow World";
}
  }

  console.log(hellowWorld('es'));
  console.log(helloWorld('de'));
  console.log(helloWorld('en'));
  console.log(hellowWorld('fr'));
