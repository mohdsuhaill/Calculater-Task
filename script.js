function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList=classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  
  const Heading = element("h1","text-center mt-5","title","");
  const Description = element("p","text-center","description","")
  const Content = element("div","content w-100 d-flex justify-content-center align-items-center","","");
  const Calculator = element("div","calculator m-auto px-3 py-4","","");
  const Display = element("input","display w-100 ","result","");
  const NumRow = element("div","row g-2 p-2","rows","");
  const C = element("button","btn col-3 text-danger ","clear","C");
  const Arrow = element("button","btn col-3 p-3","arrow","&larr;");
  const Point = element("button","btn col-3 p-3","point",".");
  const Multi = element("button","btn col-3 p-3","multi","X");
  const Seven = element("button","btn col-3 p-3","7","7");
  const Eight = element("button","btn col-3 p-3","8","8");
  const Nine = element("button","btn col-3 p-3","9","9");
  const Slash = element("button","btn col-3 p-3","divide","/");
  const Four = element("button","btn col-3 p-3","4","4");
  const Five = element("button","btn col-3 p-3","5","5");
  const Six = element("button","btn col-3 p-3","6","6");
  const Sub = element("button","btn col-3 p-3","subtract","-");
  const One = element("button","btn col-3 p-3","1","1");
  const Two = element("button","btn col-3 p-3","2","2");
  const Three = element("button","btn col-3 p-3","3","3");
  const Add = element("button","btn col-3 p-3","add","+");
  const Zero = element("button","btn col-3 p-3","zero","0");
  const DoubleZero = element("button","btn col-3 p-3","double","00");
  const Equal = element("button","btn btn-primary h-75 mt-3 d-flex justify-content-center align-items-center col-6","equal","<div>=</div>");

  let equalRequest = false;

  Display.type="text"
  Display.placeholder = "0"
  C.addEventListener("click",()=>{
    Display.value ="";
  })
  Arrow.addEventListener("click",()=>{
    Display.value=Display.value.slice(0,-1);
  })
  Point.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value=".";
    }else{
      return Display.value+=".";
    }
  })

  Multi.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="*";
    }else{
      return Display.value+="*";
    }
  })
  Slash.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="/";
    }else{
      return Display.value+="/";
    }
  })
  Sub.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="-";
    }else{
      return Display.value+="-";
    }
  })
  Add.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="+";
    }else{
      return Display.value+="+";
    }
  })
  Equal.addEventListener("click",()=>{
    Display.value=eval(Display.value);
    equalRequest = true;
  })
  Seven.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="7";
    }else{
      return Display.value+="7";
    }
   
  })
   Eight.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="8";
    }else{
      return Display.value+="8";
    }
  })
  Nine.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="9";
    }else{
      return Display.value+="9";
    }
  })
  Four.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="4";
    }else{
      return Display.value+="4";
    }
  })
  Five.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="5";
    }else{
      return Display.value+="5";
    }
  })
  Six.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="6";
    }else{
      return Display.value+="6";
    }
  })
  One.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="1";
    }else{
      return Display.value+="1";
    }
  })
  Two.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="2";
    }else{
      return Display.value+="2";
    }
  })
  Three.addEventListener("click",()=>{
    if(Display.value.charAt(0)==="0" || equalRequest){
      equalRequest =false
      return Display.value="3";
    }else{
      return Display.value+="3";
    }
  })
  Zero.addEventListener("click",()=>{
    if(Display.value !== "0"){
      Display.value+="0";
    }else{
      Display.value="0";
    }
  })
  DoubleZero.addEventListener("click",()=>{
    if(Display.value !== "0"){
      Display.value+="00";
    }else{
      Display.value="00";
    }
  })

  Heading.innerHTML="Calculator";
  Description.innerHTML = "This is a calculator created with Javascript DOM Manipulation";



  NumRow.append(C,Arrow,Point,Multi,Seven,Eight,Nine,Slash,Four,Five,Six,Sub,
One,Two,Three,Add,Zero,DoubleZero,Equal);
  Calculator.append(Display,NumRow);
  Content.append(Calculator);
  document.body.append(Heading,Description,Content);