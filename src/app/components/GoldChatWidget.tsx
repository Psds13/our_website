"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function GoldChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "gold",
      text:
        "Olá! Eu sou o Gold, seu assistente virtual.\nComo posso te ajudar hoje?\n1 - Atendimento\n2 - Pagamento",
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [fluxo, setFluxo] = useState<"atendimento" | "pagamento" | null>(null);
  const [motivoAtendimento, setMotivoAtendimento] = useState("");
  const [userData, setUserData] = useState({ semana: "", horario: "" });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = input.trim().toLowerCase();
    let goldResponse = "";

    if (fluxo === null) {
      if (userInput === "1") {
        setFluxo("atendimento");
        setStep(1);
        goldResponse =
          "Certo! Sobre o que você precisa de atendimento?\n1 - Problemas com o site\n2 - Deseja melhorar a qualidade do site\n3 - Criar um novo site\n4 - Outros serviços";
      } else if (userInput === "2") {
        setFluxo("pagamento");
        setStep(1);
        goldResponse =
          "Qual a forma de pagamento?\n1 - Cartão de crédito ou débito\n2 - Via PIX\n3 - Boleto Bancário";
      } else {
        goldResponse =
          "Por favor, escolha uma opção válida:\n1 - Atendimento\n2 - Pagamento";
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "gold", text: goldResponse }]);
      }, 500);

      setInput("");
      return;
    }

    if (fluxo === "atendimento") {
      const nextStep = step + 1;

      switch (step) {
        case 1:
          if (["1", "2", "3"].includes(userInput)) {
            const motivos = {
              "1": "Problemas com o site",
              "2": "Deseja melhorar a qualidade do site",
              "3": "Criar um novo site",
            };
            setMotivoAtendimento(motivos[userInput as "1" | "2" | "3"]);
            goldResponse =
              "Obrigado pelas informações! Podemos agendar um horário para você.\nQual dia seria melhor: segunda, terça, quarta, quinta ou sexta?";
            setStep(nextStep); // step 2
          } else if (userInput === "4") {
            goldResponse = "Por favor, descreva com mais detalhes o serviço que você precisa:";
            setStep(1.5); // aqui ativamos o passo intermediário
          } else {
            goldResponse = "Por favor, escolha uma opção válida de 1 a 4.";
          }
          break;
        case 1.5:
          setMotivoAtendimento(input);
          goldResponse =
            "Obrigado pelas informações! Podemos agendar um horário para você.\nQual dia seria melhor: segunda, terça, quarta, quinta ou sexta?";
          setStep(2);
          break;
        case 2:
          setUserData((prev) => ({ ...prev, semana: input }));
          goldResponse =
            "Perfeito. E qual horário seria melhor pra você?\n1 - Seg a sex = 8h às 12h\n2 - Seg a sex = 14h às 18h";
          setStep(nextStep);
          break;

        case 3:
          const horarioEscolhido =
            userInput === "1"
              ? "8h às 12h"
              : userInput === "2"
                ? "14h às 18h"
                : input;

          const finalData = {
            ...userData,
            horario: horarioEscolhido,
          };

          setUserData(finalData);

          goldResponse = `Perfeito! Vou agendar para ${finalData.semana}, das ${horarioEscolhido}. A pessoa responsável irá te contactar em breve.`;

          setStep(nextStep);

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                from: "gold",
                text: `📄 *Resumo do atendimento:*\n- Motivo: ${motivoAtendimento}\n- Dia: ${finalData.semana}\n- Horário: ${finalData.horario}`,
              },
            ]);

            setTimeout(() => {
              setMessages((prev) => [
                ...prev,
                { from: "gold", text: "Volte sempre 😊" },
              ]);

              setTimeout(() => {
                setFluxo(null);
                setStep(0);
                setMotivoAtendimento("");
                setUserData({ semana: "", horario: "" });
                setMessages([
                  {
                    from: "gold",
                    text:
                      "Olá! Eu sou o Gold, seu assistente virtual.\nComo posso te ajudar hoje?\n1 - Atendimento\n2 - Pagamento",
                  },
                ]);
              }, 2000);
            }, 2000);
          }, 1000);
          break;

        default:
          goldResponse = "Se precisar de mais alguma coisa, estou por aqui!";
      }
    } else if (fluxo === "pagamento") {
      const formas = {
        "1": "Cartão de crédito ou débito",
        "2": "PIX",
        "3": "Boleto Bancário",
      };

      const forma = formas[userInput as "1" | "2" | "3"];
      if (forma) {
        const confirmMessage = `Certo! Você escolheu: ${forma}.\nNosso setor financeiro entrará em contato com você em breve.`;

        setTimeout(() => {
          setMessages((prev) => [...prev, { from: "gold", text: confirmMessage }]);

          setTimeout(() => {
            setMessages((prev) => [...prev, { from: "gold", text: "Volte sempre 😊" }]);

            setTimeout(() => {
              setFluxo(null);
              setStep(0);
              setMotivoAtendimento("");
              setUserData({ semana: "", horario: "" });

              setMessages([
                {
                  from: "gold",
                  text:
                    "Olá! Eu sou o Gold, seu assistente virtual.\nComo posso te ajudar hoje?\n1 - Atendimento\n2 - Pagamento",
                },
              ]);
            }, 2000);
          }, 2000);
        }, 500);
        setInput("");
        return;
      } else {
        goldResponse = "Por favor, escolha uma forma de pagamento válida (1, 2 ou 3).";
      }
    }

    if (goldResponse) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "gold", text: goldResponse }]);
      }, 500);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
        >
          <MessageCircle />
        </button>
      ) : (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-yellow-300">
          <div className="bg-yellow-500 text-white flex items-center px-4 py-2 gap-3">
            <img
              src="/gold.jpg"
              alt="Avatar do assistente Gold"
              className="w-8 h-8 rounded-full object-cover border border-white"
            />
            <span className="font-semibold">Assistente Gold</span>
            <button onClick={() => setOpen(false)} className="ml-auto">
              <X />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line ${msg.from === "user"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-yellow-100 text-gray-800"
                    }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-2 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreva aqui..."
              className="flex-1 border rounded px-3 py-2 text-sm text-black placeholder-gray-500"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-yellow-500 text-white px-4 rounded hover:bg-yellow-600 text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
