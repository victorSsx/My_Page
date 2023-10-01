function sim(){
        alert(' 🫵😼 VOCÊ MESMO, MANDA UM OII NO MEU DIRECT.');
        //redireciona para um URL após clicar no sim
        location.href = "https://www.instagram.com/_meu_nome2000/";
    }
    
    function desvia(btn){
        //btn declarado na função
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('Opa, desviei... hehe');
    }
    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min + "%");
    }