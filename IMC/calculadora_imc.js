function calcular(){   
   let peso = document.getElementById('exampleInputEmail1');
   let altura = document.getElementById('exampleInputPassword1');
      
   if ((peso.value/(altura.value * altura.value)).toFixed(2) < 18.5){
      document.getElementById('texto').innerHTML = `<p>Abaixo do Peso</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;      
   } else if ((peso.value/(altura.value * altura.value)).toFixed(2) >= 18.5 && (peso.value/(altura.value * altura.value)).toFixed(2) <= 24.9){
      document.getElementById('texto').innerHTML = `<p>Peso Normal</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;
   }else if ((peso.value/(altura.value * altura.value)).toFixed(2) >= 25 && (peso.value/(altura.value * altura.value)).toFixed(2) <= 29.9){
      document.getElementById('texto').innerHTML = `<p>Sobrepeso</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;
   }else if ((peso.value/(altura.value * altura.value)).toFixed(2) >= 30 && (peso.value/(altura.value * altura.value)).toFixed(2) <= 34.9){
      document.getElementById('texto').innerHTML = `<p>Obesidade Grau I</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;
   }else if ((peso.value/(altura.value * altura.value)).toFixed(2) >= 35 && (peso.value/(altura.value * altura.value)).toFixed(2) <= 39.9){
      document.getElementById('texto').innerHTML = `<p>Obesidade Grau II</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;
   }else if ((peso.value/(altura.value * altura.value)).toFixed(2) > 40){
      document.getElementById('resultado').innerHTML = `<p>Obesidade Grau III</p>\nIMC: ${(peso.value/(altura.value * altura.value)).toFixed(2)}`;
   }   
}   
