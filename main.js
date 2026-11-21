// Naya tool add karna ho to sirf is list mein ek line add karein
const TOOLS=[
 {name:"Word Counter",desc:"Count words & characters",icon:"🔤",cat:"text",url:"tools/word-counter.html"},
 {name:"Case Converter",desc:"UPPER, lower, Title case",icon:"🔠",cat:"text",url:"tools/case-converter.html"},
 {name:"Lorem Ipsum Generator",desc:"Placeholder text",icon:"📝",cat:"text",url:"tools/lorem-ipsum-generator.html"},
 {name:"Password Generator",desc:"Strong random passwords",icon:"🔐",cat:"text",url:"tools/password-generator.html"},
 {name:"Percentage Calculator",desc:"Calculate percentages",icon:"％",cat:"calculator",url:"tools/percentage-calculator.html"},
 {name:"BMI Calculator",desc:"Check your BMI",icon:"⚖️",cat:"calculator",url:"tools/bmi-calculator.html"},
 {name:"Loan EMI Calculator",desc:"Monthly installment",icon:"🏦",cat:"calculator",url:"tools/emi-calculator.html"},
 {name:"Discount Calculator",desc:"Sale price & tip",icon:"🏷️",cat:"calculator",url:"tools/discount-calculator.html"},
 {name:"Unit Converter",desc:"Convert units easily",icon:"🔁",cat:"converter",url:"tools/unit-converter.html"},
 {name:"Age Calculator",desc:"Find your exact age",icon:"🎂",cat:"date",url:"tools/age-calculator.html"},
 {name:"Date Difference",desc:"Days between two dates",icon:"📆",cat:"date",url:"tools/date-difference-calculator.html"},
 {name:"Image Compressor",desc:"Reduce image size",icon:"🖼️",cat:"image",url:"tools/image-compressor.html"},
 {name:"QR Code Generator",desc:"Create QR codes",icon:"🔳",cat:"image",url:"tools/qr-code-generator.html"}
 ,{name:"Text Compare",desc:"Find text differences",icon:"🧾",cat:"text",url:"tools/text-compare.html"}
 ,{name:"Remove Duplicate Lines",desc:"Keep unique lines",icon:"🧹",cat:"text",url:"tools/remove-duplicate-lines.html"}
 ,{name:"Time Zone Converter",desc:"Convert time worldwide",icon:"🌍",cat:"date",url:"tools/time-zone-converter.html"}
 ,{name:"Image Converter",desc:"JPG, PNG, WebP",icon:"🔄",cat:"converter",url:"tools/image-converter.html"}
 ,{name:"JPG to PDF",desc:"Images to PDF",icon:"📄",cat:"converter",url:"tools/jpg-to-pdf.html"}
 ,{name:"Text to Speech",desc:"Listen to your text",icon:"🔊",cat:"converter",url:"tools/text-to-speech.html"}
 ,{name:"Compound Interest",desc:"Grow your savings",icon:"📈",cat:"calculator",url:"tools/compound-interest-calculator.html"}
 ,{name:"GPA Calculator",desc:"4.0 scale GPA",icon:"🎓",cat:"calculator",url:"tools/gpa-calculator.html"}
 ,{name:"Random Number Generator",desc:"Pick random numbers",icon:"🎲",cat:"calculator",url:"tools/random-number-generator.html"}
 ,{name:"Color Converter",desc:"HEX, RGB and HSL",icon:"🎨",cat:"converter",url:"tools/color-converter.html"}
 ,{name:"JSON Formatter",desc:"Format and validate JSON",icon:"🧩",cat:"text",url:"tools/json-formatter.html"}
 ,{name:"Base64 Encoder Decoder",desc:"Encode and decode text",icon:"🔐",cat:"text",url:"tools/base64-encoder-decoder.html"}
 ,{name:"Stopwatch and Timer",desc:"Stopwatch and countdown",icon:"⏱️",cat:"date",url:"tools/stopwatch-timer.html"}
 ,{name:"Roman Numeral Converter",desc:"Numbers to Roman numerals",icon:"🏛️",cat:"converter",url:"tools/roman-numeral-converter.html"}
 ,{name:"Text to Binary",desc:"Text to 0s and 1s",icon:"💾",cat:"converter",url:"tools/text-to-binary.html"}
 ,{name:"Zakat Calculator",desc:"Calculate your Zakat",icon:"🕌",cat:"calculator",url:"tools/zakat-calculator.html"}
 ,{name:"Tola to Gram Converter",desc:"Tola, masha, ratti, gram",icon:"🥇",cat:"converter",url:"tools/tola-gram-converter.html"}
 ,{name:"Marla Kanal Converter",desc:"Land area for Pakistan",icon:"🏠",cat:"converter",url:"tools/marla-kanal-converter.html"}
 ,{name:"Urdu Word Counter",desc:"Count Urdu text",icon:"✍️",cat:"text",url:"tools/urdu-text-counter.html"}
 ,{name:"Hijri Date Converter",desc:"Islamic and English dates",icon:"🌙",cat:"date",url:"tools/hijri-date-converter.html"}
 ,{name:"Marks Percentage",desc:"Percentage and grade",icon:"📝",cat:"calculator",url:"tools/marks-percentage-calculator.html"}
 ,{name:"Fuel Average Calculator",desc:"km per liter and cost",icon:"⛽",cat:"calculator",url:"tools/fuel-average-calculator.html"}
 ,{name:"Amount in Words",desc:"Rupees in words",icon:"💵",cat:"text",url:"tools/amount-in-words.html"}
 ,{name:"Lakh Crore Converter",desc:"Numbers to lakh, crore",icon:"🔢",cat:"converter",url:"tools/lakh-crore-converter.html"}
 ,{name:"Typing Speed Test",desc:"Check your WPM",icon:"⌨️",cat:"text",url:"tools/typing-speed-test.html"}
];
const grid=document.getElementById("toolGrid"),q=document.getElementById("q");
let cat="all";
function render(){
 const t=q.value.toLowerCase().trim();
 const list=TOOLS.filter(x=>(cat==="all"||x.cat===cat)&&(x.name+x.desc).toLowerCase().includes(t));
 grid.innerHTML=list.length?list.map(x=>`<div class="tcard ${x.url?"":"soon"}"><i>${x.icon}</i><h3>${x.name}</h3><p>${x.desc}</p>${x.url?`<a href="${x.url}">Try now</a>`:`<a>Coming soon</a>`}</div>`).join(""):"<p>No tool found. Try another word.</p>";
}
q.addEventListener("input",render);
document.getElementById("searchBtn").addEventListener("click",()=>{render();document.getElementById("popular").scrollIntoView({behavior:"smooth"})});
document.querySelectorAll(".cat").forEach(b=>b.addEventListener("click",()=>{
 cat=b.dataset.cat===cat?"all":b.dataset.cat;
 document.querySelectorAll(".cat").forEach(c=>c.classList.toggle("on",c.dataset.cat===cat));
 render();document.getElementById("popular").scrollIntoView({behavior:"smooth"});
}));
render();
