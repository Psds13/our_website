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
  const [formaPagamento, setFormaPagamento] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

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
              "Certo! Por favor, informe seu nome e de onde você é, separados por vírgula.\nEx: João, São Luís - MA";
            setStep(1.7);
          } else if (userInput === "4") {
            goldResponse =
              "Por favor, descreva com mais detalhes o serviço que você precisa:";
            setStep(1.5);
          } else {
            goldResponse = "Por favor, escolha uma opção válida de 1 a 4.";
          }
          break;

        case 1.5:
          setMotivoAtendimento(input);
          goldResponse =
            "Certo! Por favor, informe seu nome e de onde você é, separados por vírgula.\nEx: João, São Luís - MA";
          setStep(1.7);
          break;

        case 1.7:
          const [nome, local] = input.split(",").map((s) => s.trim());

          if (!nome || !local) {
            goldResponse =
              "Por favor, informe seu nome e de onde você é, separados por vírgula.\nEx: João, São Luís - MA";
            break;
          }

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

          goldResponse = `Perfeito! Vou agendar para ${finalData.semana}, das ${finalData.horario}. A pessoa responsável irá te contactar em breve.`;

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

              setTimeout(resetChat, 2000);
            }, 2000);
          }, 1000);
          break;

        default:
          goldResponse =
            "Se precisar de mais alguma coisa, estou por aqui!";
      }
    } else if (fluxo === "pagamento") {
      const formas = {
        "1": "Cartão de crédito ou débito",
        "2": "PIX",
        "3": "Boleto Bancário",
      };

      if (step === 1 && formas[userInput as "1" | "2" | "3"]) {
        const forma = formas[userInput as "1" | "2" | "3"];
        setFormaPagamento(forma);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { from: "gold", text: `Certo! Você escolheu: ${forma}.` },
          ]);

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                from: "gold",
                text:
                  "Antes de prosseguir, por favor informe seu nome, cidade e estado separados por vírgula.\nEx: Ana, São Paulo, SP",
              },
            ]);
            setStep(2);
          }, 500);
        }, 500);

        setInput("");
        return;
      }

      if (step === 2) {
        const [nome, cidade, estado] = input.split(",").map((s) => s.trim());

        if (!nome || !cidade || !estado) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                from: "gold",
                text:
                  "Por favor, informe corretamente os três dados: nome, cidade e estado separados por vírgula.\nEx: Ana, São Paulo, SP",
              },
            ]);
          }, 500);
          setInput("");
          return;
        }

        const resumo = `📄 *Resumo do pagamento:*\n- Forma: ${formaPagamento}\n- Nome: ${nome}\n- Cidade: ${cidade}\n- Estado: ${estado}`;
        setTimeout(() => {
          setMessages((prev) => [...prev, { from: "gold", text: resumo }]);


          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                from: "gold",
                text:
                  "Nosso setor financeiro entrará em contato com você em breve.",
              },
            ]);

            setTimeout(() => {
              setMessages((prev) => [
                ...prev,
                { from: "gold", text: "Volte sempre 😊" },
              ]);

              setTimeout(resetChat, 2000);
            }, 2000);
          }, 1000);
        }, 500);
        setInput("");
        return;
      }

      goldResponse =
        "Por favor, escolha uma forma de pagamento válida (1, 2 ou 3).";
    }

    if (goldResponse) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "gold", text: goldResponse }]);
      }, 500);
    }

    setInput("");
  };

  const resetChat = () => {
    setFluxo(null);
    setStep(0);
    setMotivoAtendimento("");
    setUserData({ semana: "", horario: "" });
    setFormaPagamento("");
    setMessages([
      {
        from: "gold",
        text:
          "Olá! Eu sou o Gold, seu assistente virtual.\nComo posso te ajudar hoje?\n1 - Atendimento\n2 - Pagamento",
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <div className="absolute bottom-16 right-0 bg-white text-black text-sm px-3 py-2 rounded shadow border border-gray-200 animate-bounce">
          Dúvidas? Fale comigo! 👇
        </div>
      )}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-yellow-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/gold.jpg" // Substitua pelo caminho correto da sua imagem
                alt="Gold"
                className="w-6 h-6 rounded-full"
              />
              <span>Gold - Assistente Virtual</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`whitespace-pre-line p-2 rounded max-w-[80%] ${
                  msg.from === "gold"
                    ? "bg-gray-100 text-left"
                    : "bg-yellow-200 self-end text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 border px-2 py-1 rounded text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
