document.addEventListener('DOMContentLoaded', () => {
    // Elementos das fases
    const faseApresentacao = document.getElementById('fase-apresentacao');
    const faseEscolha = document.getElementById('fase-escolha');
    const faseResultado = document.getElementById('fase-resultado');
    
    // Botões
    const btnVerProvas = document.getElementById('btn-ver-provas');
    const btnIntuicao = document.getElementById('escolher-intuicao');
    const btnProva = document.getElementById('escolher-prova');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    
    // Áreas de resultado
    const resultadoTexto = document.getElementById('resultado-texto');
    const feedbackCientifico = document.getElementById('feedback-cientifico');
    const casoBrasil = document.getElementById('caso-brasil');

    // Função para mudar de fase
    function mostrarFase(faseAtivar) {
        document.querySelectorAll('.fase').forEach(f => f.classList.remove('ativa'));
        faseAtivar.classList.add('ativa');
    }

    // Avançar para a fase de escolha
    btnVerProvas.addEventListener('click', () => {
        mostrarFase(faseEscolha);
    });

    // ESCOLHA: Intuição (Desconfiar do vídeo)
    btnIntuicao.addEventListener('click', () => {
        // Preencher feedback
        resultadoTexto.innerText = '⚡ Você prendeu Carlos com base na intuição.';
        resultadoTexto.className = 'resultado-destaque resultado-culpado';
        
        feedbackCientifico.innerHTML = `
            <strong>📌 O que diz a pesquisa (Elaad, 2022):</strong><br>
            Estudos mostram que taxas de acerto de detecção de mentiras baseadas apenas em comportamento (como desvio de olhar, hesitação) são próximas de 54% — praticamente cara ou coroa. 
            A ilusão de competência faz com que delegados superestimem sua capacidade de detectar mentiras "na lábia". 
            Neste caso, o vídeo era legítimo. Carlos estava nervoso porque estava em um hotel caro e foi acusado injustamente — reação comum em inocentes.
        `;

        casoBrasil.innerHTML = `
            <strong>🇧🇷 Caso real brasileiro similar:</strong><br>
            Em 2019, no Paraná, um homem foi detido por furto baseado em "atitude suspeita". 
            Imagens de segurança posteriormente provaram que ele estava no local por engano, mas passou 15 dias preso. 
            O nervosismo diante da autoridade é um péssimo indicador de culpa.
        `;

        mostrarFase(faseResultado);
    });

    // ESCOLHA: Prova (Confiar no vídeo)
    btnProva.addEventListener('click', () => {
        resultadoTexto.innerText = '🔍 Você inocentou Carlos com base na prova de vídeo.';
        resultadoTexto.className = 'resultado-destaque resultado-inocente';
        
        feedbackCientifico.innerHTML = `
            <strong>📌 O que diz a pesquisa (Elaad, 2022):</strong><br>
            Pessoas tendem a ignorar provas concretas quando o comportamento do suspeito ativa nossos vieses. 
            No experimento, apenas 32% dos participantes confiaram no vídeo quando o suspeito parecia nervoso. 
            Porém, a prova objetiva (especialmente vídeo com horário) tem muito mais valor preditivo do que a linguagem corporal.
        `;

        casoBrasil.innerHTML = `
            <strong>🇧🇷 Caso real brasileiro similar:</strong><br>
            Caso "Fábio" (nome fictício) em Minas Gerais: acusado de furto em loja, com base em testemunha que o viu "agindo estranho". 
            As câmeras do local, porém, mostraram que ele estava no caixa pagando outro produto no momento do furto. 
            O delegado de plantão confiou na prova e liberou Fábio em 2 horas, evitando um erro judiciário.
        `;

        mostrarFase(faseResultado);
    });

    // Reiniciar o simulador
    btnReiniciar.addEventListener('click', () => {
        mostrarFase(faseApresentacao);
    });

    // Iniciar na fase de apresentação
    mostrarFase(faseApresentacao);
});
