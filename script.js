function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

        
    if (input.startsWith('pet_') && /^[0-9]{4}/.test(input.substring(4, 8)) && /^[a-zA-Z]+$/.test(input.substring(8))) {

      result ='Valid Syntax 🟢'; 

    } else {
        result ='Invalid Syntax🔴';
    }


 document.getElementById('result').innerText = result;


}
