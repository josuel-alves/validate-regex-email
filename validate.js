function isEmail(email)
{
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    return regex.test(email); 
}

function printResult(result)
{
    var elementResult = $('#result');
    var printElementResult = elementResult.empty().append(result); 
    return printElementResult;
}

$("form#consult-cep-form").submit(function(){

    var email = $("#input_email").val();
    if(email.length > 0)
    {
        if ((isEmail(email)) == false)
        {
            printResult('Por favor, preencha um e-mail válido para continuar!'); 
            return false;
        }
        printResult('O e-mail é válido!');
        // return true to send form
        return false;
    }
    printResult('Por favor, preencha seu e-mail!');
    return false;
});