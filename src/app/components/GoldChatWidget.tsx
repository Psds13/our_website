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

  const [userData, setUserData] = useState({
    nome: "",
    contato: "",
    motivo: "",
    semana: "",
    horario: "",
  });

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
        goldResponse = "Perfeito! Qual é o seu nome?";
      } else if (userInput === "2") {
        setFluxo("pagamento");
        setStep(1);
        goldResponse = "Vamos falar sobre pagamentos. Qual dúvida você tem?";
      } else {
        goldResponse = "Por favor, escolha uma opção válida:\n1 - Atendimento\n2 - Pagamento";
      }
    } else if (fluxo === "atendimento") {
      const nextStep = step + 1;

      switch (step) {
        case 1:
          setUserData((prev) => ({ ...prev, nome: input }));
          goldResponse = `Prazer, ${input}! Com quem você gostaria de falar?`;
          break;
        case 2:
          setUserData((prev) => ({ ...prev, contato: input }));
          goldResponse = "Entendi! E qual é o motivo do seu atendimento?";
          break;
        case 3:
          setUserData((prev) => ({ ...prev, motivo: input }));
          goldResponse =
            "Obrigada pelas informações! Podemos agendar um horário para você. Qual dia seria melhor: segunda, terça, quarta, quinta ou sexta?";
          break;
        case 4:
          setUserData((prev) => ({ ...prev, semana: input }));
          goldResponse = "Perfeito. E qual horário seria melhor pra você?";
          break;
        case 5:
          const finalData = { ...userData, horario: input };
          setUserData(finalData);
          goldResponse = `Perfeito! Vou agendar para ${input}. A pessoa responsável irá te contactar em breve.`;

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                from: "gold",
                text: `🔎 *Resumo do atendimento:*\n- Nome: ${finalData.nome}\n- Contato: ${finalData.contato}\n- Motivo: ${finalData.motivo}\n- Dia: ${finalData.semana}\n- Horário: ${finalData.horario}`,
              },
            ]);
          }, 1000);
          break;
        default:
          goldResponse = "Se precisar de mais alguma coisa, estou por aqui!";
          break;
      }

      setStep(nextStep);
    } else if (fluxo === "pagamento") {
      // Aqui você pode colocar uma lógica mais complexa depois
      goldResponse = "Nosso setor financeiro irá entrar em contato com você em breve. Mais alguma dúvida?";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "gold", text: goldResponse }]);
    }, 500);

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
          {/* Header */}
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

          {/* Mensagens */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line ${
                    msg.from === "user"
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

          {/* Input */}
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
