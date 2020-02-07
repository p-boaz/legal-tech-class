(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(1),o=n(6),i=(n(0),n(165)),r={id:"python",title:"The Python programming language",sidebar_label:"Understanding Python"},l={id:"python",title:"The Python programming language",description:"## About Python",source:"@site/docs/python.md",permalink:"/docassemble-class/docs/python",editUrl:"https://github.com/nonprofittechy/docassemble-class/edit/master/open-class/docs/python.md",sidebar_label:"Understanding Python",sidebar:"someSidebar",previous:{title:"The Mako templating language",permalink:"/docassemble-class/docs/mako"},next:{title:"Working With Repeated Information",permalink:"/docassemble-class/docs/repeated-information"}},b=[{value:"About Python",id:"about-python",children:[]},{value:"The basics of programming",id:"the-basics-of-programming",children:[{value:"Variables",id:"variables",children:[]},{value:"Datatypes, Datastructures, and Objects",id:"datatypes-datastructures-and-objects",children:[]},{value:"Tests and logical operators",id:"tests-and-logical-operators",children:[]},{value:"Assignment operators",id:"assignment-operators",children:[]},{value:"Control structures",id:"control-structures",children:[]},{value:"Functions and methods",id:"functions-and-methods",children:[]}]},{value:"Learning more about Python",id:"learning-more-about-python",children:[{value:"Books and tutorials",id:"books-and-tutorials",children:[]},{value:"Online Python interpreter (run Python without installing it to your computer)",id:"online-python-interpreter-run-python-without-installing-it-to-your-computer",children:[]}]}],s={rightToc:b};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about-python"},"About Python"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://python.org"}),"Python")," is one of the worlds ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.infoworld.com/article/3401536/python-popularity-reaches-an-all-time-high.html"}),"most popular programming languages")," for a good reason. It is easy to use, while familiar enough that people who have tried other languages can jump right in."),Object(i.b)("p",null,"Two unique features of Python for people who come from other programming languages are that indentation marks the end and beginning of Python statements (rather than curly braces {}); and that you do not need to use a semi-colon at the end of lines."),Object(i.b)("p",null,"Python has a very large collection of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/"}),'pre-built "modules"')," and an even larger library of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org"}),"modules contributed by third-party developers"),". This can make it fast and easy to build very capable applications."),Object(i.b)("h2",{id:"the-basics-of-programming"},"The basics of programming"),Object(i.b)("p",null,"Docassemble developers may use only a few features of Python. Still, let's take some time to put the different aspects of any programming language in context, and then talk about how they are used in Python and in Docassemble."),Object(i.b)("p",null,"Programming involves two basic concepts: data, and instructions. Data is stored in variables which usually are provided when the program is run. Instructions tell the computer what to do with the data it receives."),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,'Variables could be considered "buckets" that hold information. Just like ',Object(i.b)("inlineCode",{parentName:"p"},"x")," in an algebra equation, we don't know the value until our program is run. Docassemble variables (or fields) are also Python variables."),Object(i.b)("h3",{id:"datatypes-datastructures-and-objects"},"Datatypes, Datastructures, and Objects"),Object(i.b)("p",null,'Variables each have an associated "type". For example, a number is treated differently by the computer than a piece of written text. ',Object(i.b)("inlineCode",{parentName:"p"},'"Roger" + "Helicopter"')," should really do something different than ",Object(i.b)("inlineCode",{parentName:"p"},"1 + 2"),". Unlike many languages, in Python variables can change type dynamically. The same variable can be a number at one time, and text later in the same program."),Object(i.b)("p",null,"Python uses the following ",Object(i.b)("em",{parentName:"p"},"basic")," or ",Object(i.b)("em",{parentName:"p"},"primitive")," datatypes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int")," (integer, or whole numbers)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"float")," (floating point, or fractional numbers)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"str")," (string, or text)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bool")," (Boolean, or ",Object(i.b)("inlineCode",{parentName:"li"},"True"),"/",Object(i.b)("inlineCode",{parentName:"li"},"False"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"None")," (null value, or undefined)")),Object(i.b)("p",null,"Python includes the following built-in data structures:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"list")," (an array, or list of one or more variables)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dict")," (a dictionary, or associative array)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tuple")," (like a list, but cannot be changed (immutable))"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set")," (like a list, but has unique values)")),Object(i.b)("p",null,"Docassemble has its own implementation of these datastructures, named ",Object(i.b)("inlineCode",{parentName:"p"},"DAList"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DADict"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"DASet")," respectively."),Object(i.b)("p",null,"Python also supports object oriented programming principles that allow you to create your own complex types. A ",Object(i.b)("inlineCode",{parentName:"p"},"class")," is a blueprint for an ",Object(i.b)("inlineCode",{parentName:"p"},"object"),". When you use objects, you gather a list of ",Object(i.b)("inlineCode",{parentName:"p"},"attributes")," together with ",Object(i.b)("inlineCode",{parentName:"p"},"methods")," that can act on the attributes to provide standardized behavior and model your program against the real world."),Object(i.b)("p",null,"When you want to create a new class, you can ",Object(i.b)("inlineCode",{parentName:"p"},"inherit")," the properties of an existing class. For example, if you had a class ",Object(i.b)("inlineCode",{parentName:"p"},"apple")," it may inherit properties from a ",Object(i.b)("inlineCode",{parentName:"p"},"fruit")," class."),Object(i.b)("p",null,"In Docassemble, you are encouraged to have every object inherit from the base object named ",Object(i.b)("inlineCode",{parentName:"p"},"DAObject"),". You will make frequent use of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/objects.html#Individual"}),Object(i.b)("inlineCode",{parentName:"a"},"Individual"))," object in Docassemble, which collects attributes of a person together: such as a first and last name, birthdate, address, and more."),Object(i.b)("h3",{id:"tests-and-logical-operators"},"Tests and logical operators"),Object(i.b)("p",null,"You will use ",Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," values again and again in Docassemble. Sometimes you will get a True/False value directly from the user. Other times, you will use a logical test. Python's comparison operators should look familiar to you."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"==")," (tests for equality. ",Object(i.b)("strong",{parentName:"li"},"Note"),": ",Object(i.b)("inlineCode",{parentName:"li"},"=")," is reserved as the assignment operator)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"!=")," (tests for inequality)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">")," (greater than)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<")," (less than)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">=")," (greater than or equal)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<=")," (less than or equal)")),Object(i.b)("p",null,"Logical operators include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"and")," (combines two tests and will be True if both are True)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"or")," (combines two tests and will be True if either is True)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"not")," (returns True if the test is False)")),Object(i.b)("p",null,"Operators can be grouped with round brackets ",Object(i.b)("inlineCode",{parentName:"p"},"()"),"."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/python/python_operators.asp"}),"W3Schools")," for a more complete list."),Object(i.b)("h3",{id:"assignment-operators"},"Assignment operators"),Object(i.b)("p",null,"In Python, you ",Object(i.b)("inlineCode",{parentName:"p"},"assign")," a value to a variable using an assignment operator. You can get by with just one operator: ",Object(i.b)("inlineCode",{parentName:"p"},"="),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'z = 1 # Assigns the value 1 to z\nz = "Hello, World" # Assigns the text Hello, World to z.\n')),Object(i.b)("p",null,"You may also find yourself using the shorthands ",Object(i.b)("inlineCode",{parentName:"p"},"+="),", ",Object(i.b)("inlineCode",{parentName:"p"},"-=")," to add a value and subtract a value in one statement. "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"z = 1\nz += 1 # the value of z is now 2\nz -= 3 # the value of z is now -1.\n")),Object(i.b)("p",null,"Python also supports basic arithmetic operators."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"+")," (addition)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-")," (subtraction)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"*")," (multiplication)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/")," (division)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%")," (modulus, or remainder)")),Object(i.b)("p",null,"There are many more assignment operators. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/python/python_operators.asp"}),"W3Schools")," for a more complete list."),Object(i.b)("h3",{id:"control-structures"},"Control structures"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Control structures")," let you dictate the sequence of operations that your program will take in different circumstances. There are three basic types of control structures: ",Object(i.b)("inlineCode",{parentName:"p"},"sequence"),", ",Object(i.b)("inlineCode",{parentName:"p"},"selection")," and ",Object(i.b)("inlineCode",{parentName:"p"},"repetition"),"."),Object(i.b)("h4",{id:"sequence-ordering-instructions"},"Sequence (ordering instructions)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sequence")," controls the order that your instructions to the computer are executed. In Python, the order is implied, top to bottom, in the order that you write each instruction in the file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"operation1\noperation2\noperation3\n")),Object(i.b)("h4",{id:"selection-if-then-statements"},"Selection (if then statements)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Selection")," controls which instructions are executed, and which ones remain idle. In Python, the basic ",Object(i.b)("inlineCode",{parentName:"p"},"selection")," statement is the ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement."),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement is composed of the keyword ",Object(i.b)("inlineCode",{parentName:"p"},"if"),", followed by a test, and then a colon. The code that follows will execute if the test resolves to a Boolean True."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"if test1:\n  operation1\n")),Object(i.b)("p",null,"You can add-in additional tests as part of the main ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement with the keywords ",Object(i.b)("inlineCode",{parentName:"p"},"elif")," and ",Object(i.b)("inlineCode",{parentName:"p"},"else"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"if test1:\n  operation1\nelif test2:\n  operation2\nelse:\n  operation3\n")),Object(i.b)("p",null,"If you are familiar with other programming languages, you may be surprised that there is no ",Object(i.b)("inlineCode",{parentName:"p"},"switch")," statement in Python. If not, just ignore it :). ",Object(i.b)("inlineCode",{parentName:"p"},"Switch")," statements are just a series of ",Object(i.b)("inlineCode",{parentName:"p"},"if/elseif")," statements. Python does include the ",Object(i.b)("inlineCode",{parentName:"p"},"ternary")," operator, or one-line ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"x = 1 if test1 else 2 # Sets x to 1 if test1 is true. Otherwise, it sets x to 2\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ternary")," operator can be hard to read so it's usually best to avoid it, but sometimes it's convenient to include in Docassemble in a place where you can only fit one line of code, or inside a Mako statement (",Object(i.b)("inlineCode",{parentName:"p"},"${}"),")."),Object(i.b)("h4",{id:"repetition-loops"},"Repetition (loops)"),Object(i.b)("p",null,"Docassemble can easily give you the power to gather repeated information. You usually gather that information into a ",Object(i.b)("inlineCode",{parentName:"p"},"list")," or ",Object(i.b)("inlineCode",{parentName:"p"},"dictionary"),". You will use Python's repetition control structures to work with those repeated values."),Object(i.b)("h5",{id:"for-loops"},Object(i.b)("inlineCode",{parentName:"h5"},"for")," Loops"),Object(i.b)("p",null,"Suppose you have a list with following values:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"[1,2,3,4]")),Object(i.b)("p",null,"Python makes it simple to ",Object(i.b)("inlineCode",{parentName:"p"},"iterate"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"loop")," over each value in the list without needing to keep track of the total number of elements. If you have used ",Object(i.b)("inlineCode",{parentName:"p"},"C"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Java")," or ",Object(i.b)("inlineCode",{parentName:"p"},"JavaScript"),", this is a convenient built-in feature."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"for number in [1,2,3,4]:\n  print number\n")),Object(i.b)("p",null,"Will print "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"1\n2\n3\n4\n")),Object(i.b)("h4",{id:"while-loops"},Object(i.b)("inlineCode",{parentName:"h4"},"while")," Loops"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"while")," loops combine a test with repeated action. In the example below"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"i = 1\nwhile i <= 4:\n  print(i)\n  i += 1\n")),Object(i.b)("p",null,"Will print "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"1\n2\n3\n4\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Here be dragons")," Be careful with ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loops!"),Object(i.b)("p",{parentName:"blockquote"},"Notice that it's up to you to make sure your ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop actually ends. It's possible (and easy while you're learning) to create a ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop that is stuck in an infinite series of repetitions, crashing the server.")),Object(i.b)("h4",{id:"a-note-on-the-mako-and-jinja-variations"},"A note on the Mako and Jinja variations"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docassemble-class/docs/mako"}),"Mako")," statements let you include Python control structures right inside your interview file, as well as inside Markdown templates. When you want to use the Mako version of a control structure, just include a % symbol at the start of the line. The text underneath does ",Object(i.b)("em",{parentName:"p"},"not")," need to be indented. But you must include the ending keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-markdown"}),"% if statement:\nConditionally displayed text\n% endif\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"jinja.md"}),"Jinja")," statements allow you to include something almost, but not quite entirely unlike Python inside a Docx template. There are many variations to be aware of, but usually it's best to learn about them one at a time. Jinja statements do not need to be on their own line. There is no colon ",Object(i.b)("inlineCode",{parentName:"p"},":")," at the end of the opening keyword. They do require an ending keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{% if mytest %} Some conditionally displayed text {% endif %}\n")),Object(i.b)("h3",{id:"functions-and-methods"},"Functions and methods"),Object(i.b)("p",null,"Python ",Object(i.b)("inlineCode",{parentName:"p"},"functions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"methods"),' are an abstraction that lets you "save" a series of instructions and operations that you will want to use again and again. In some languages, these are called ',Object(i.b)("inlineCode",{parentName:"p"},"procedures"),". You should write some of your own functions. But there is a large ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/functions.html"}),"library of functions")," built-in to Docassemble that you should also peruse when you are about to do something that you think other developers have run into in the past."),Object(i.b)("p",null,"You create a function in Python with the ",Object(i.b)("inlineCode",{parentName:"p"},"def")," keyword. Functions have ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"return value"),". Consider the following useless example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def times(x,y):\n  return x * y\n")),Object(i.b)("p",null,"Notice that the function's contents are indented below the ",Object(i.b)("inlineCode",{parentName:"p"},"def")," keyword."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"methods")," are not logically distinct from ",Object(i.b)("inlineCode",{parentName:"p"},"functions"),". A ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is a function that is part of an ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"'s blueprint, or ",Object(i.b)("inlineCode",{parentName:"p"},"class"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"method")," typically operates on the object itself, or transforms and returns one or more attributes of the object."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"person.age_in_years() # Uses the person's birthdate attribute to calculate their current age and return it\n")),Object(i.b)("p",null,"Docassemble has many ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/objects.html"}),"built-in objects"),". When you are looking in the function library, you might miss a useful shortcut because you do not know that it is considered a method of a class rather than a standalone function."),Object(i.b)("h2",{id:"learning-more-about-python"},"Learning more about Python"),Object(i.b)("h3",{id:"books-and-tutorials"},"Books and tutorials"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.python.org/moin/BeginnersGuide"}),"Python Beginner's Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/tutorial/"}),"Python Tutorial")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://automatetheboringstuff.com/"}),"Automate the Boring Stuff"))),Object(i.b)("h3",{id:"online-python-interpreter-run-python-without-installing-it-to-your-computer"},"Online Python interpreter (run Python without installing it to your computer)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.onlinegdb.com/online_python_interpreter"}),"Online runtime environment"))))}c.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);