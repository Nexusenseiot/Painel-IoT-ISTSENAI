<script>
    function enviarPergunta(texto = null) {
        const problemas = [
            {
                keywords: ["luz", "não acende", "nao acende", "lâmpada", "lampada"],
                resposta: "Verifique se a lâmpada está queimada ou se há disjuntor desarmado."
            },
            {
                keywords: ["tomada", "sem energia", "não funciona", "nao funciona"],
                resposta: "Pode ser um fio solto ou disjuntor desligado. Verifique com um multímetro."
            },
            {
                keywords: ["disjuntor", "desarma", "desligando", "desligou"],
                resposta: "Pode haver curto-circuito ou sobrecarga. Revise os circuitos ligados."
            },
            {
                keywords: ["fio", "queimado", "fiação", "curto-circuito", "curto circuito"],
                resposta: "Verifique a fiação para identificar possíveis fios queimados ou curto-circuitos."
            },
            {
                keywords: ["interruptor", "não funciona", "nao funciona", "botão"],
                resposta: "Pode ser um interruptor com defeito ou mau contato. Teste ou substitua o interruptor."
            },
            {
                keywords: ["lâmpada", "pisca", "piscando", "intermitente"],
                resposta: "Pode ser um problema na lâmpada ou na fiação. Verifique conexões e substitua a lâmpada se necessário."
            },
            {
                keywords: ["energia", "queda", "oscilação", "queda de energia"],
                resposta: "Pode ser problema na rede elétrica ou no disjuntor. Consulte a companhia elétrica se persistir."
            }
        ];

        let pergunta = texto || document.getElementById("pergunta").value.toLowerCase();
        let resposta = "Desculpe, não entendi o problema. Tente descrever de outra forma.";

        for (let problema of problemas) {
            let match = problema.keywords.some(keyword => pergunta.includes(keyword));
            if (match) {
                resposta = problema.resposta;
                break;
            }
        }

        document.getElementById("resposta").innerText = resposta;
        falar(resposta);
    }

function ativarVoz() {
    const reconhecimento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    reconhecimento.lang = "pt-BR";
    reconhecimento.start();

    reconhecimento.onresult = function(event) {
        const textoFalado = event.results[0][0].transcript;
        document.getElementById("pergunta").value = textoFalado;
        enviarPergunta(textoFalado.toLowerCase());
    };

    reconhecimento.onerror = function(event) {
        alert("Erro no reconhecimento de voz: " + event.error);
    };
}

<style>
#btnVoz {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00aaff;
  color: white;
  font-size: 28px;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 999;
}

#btnVoz:hover {
  background-color: #0077cc;
}
</style>