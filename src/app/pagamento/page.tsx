import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const PaymentPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<'boleto' | 'pix' | 'cartao'>('pix');
  const [discountCode, setDiscountCode] = useState('');
  const [installments, setInstallments] = useState(1);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyDiscount = () => {
    // Lógica para aplicar desconto
    alert(`Código de desconto "${discountCode}" aplicado!`);
  };

  return (
    <>
      <Head>
        <title>YNNOTHIVIX - Finalizar Pagamento</title>
        <meta name="description" content="Finalize seu pagamento de forma segura" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Finalizar Pagamento</h1>
            <p className="text-lg text-gray-600">Escolha a forma de pagamento e complete sua assinatura</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Resumo do Plano */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Resumo da Assinatura</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-700">Plano Premium</p>
                  <p className="text-gray-500">Assinatura mensal</p>
                </div>
                <p className="text-2xl font-bold text-indigo-600">R$ 15,00/mês</p>
              </div>
            </div>

            {/* Opções de Pagamento */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Método de Pagamento</h2>
              
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('pix')}
                  className={`px-4 py-2 font-medium ${activeTab === 'pix' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                >
                  Pix
                </button>
                <button
                  onClick={() => setActiveTab('boleto')}
                  className={`px-4 py-2 font-medium ${activeTab === 'boleto' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                >
                  Boleto Bancário
                </button>
                <button
                  onClick={() => setActiveTab('cartao')}
                  className={`px-4 py-2 font-medium ${activeTab === 'cartao' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
                >
                  Cartão de Crédito
                </button>
              </div>

              {/* Formulário de Pix */}
              {activeTab === 'pix' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">Pagamento via Pix</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Instantâneo</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Escaneie o QR Code ou copie o código para pagar no seu app bancário.</p>
                    
                    <div className="flex flex-col items-center mb-4">
                      <div className="bg-white p-4 rounded border border-gray-200 mb-3">
                        {/* QR Code Placeholder */}
                        <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">QR Code</span>
                        </div>
                      </div>
                      <button className="text-indigo-600 font-medium text-sm">Copiar código Pix</button>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            O pagamento via Pix é processado instantaneamente. Após a confirmação, sua assinatura será ativada automaticamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formulário de Boleto */}
              {activeTab === 'boleto' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">Boleto Bancário</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Até 3 dias úteis</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">O boleto será gerado após a finalização da compra e pode levar até 3 dias úteis para ser processado.</p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Sua assinatura só será ativada após a confirmação do pagamento do boleto, o que pode levar até 3 dias úteis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formulário de Cartão de Crédito */}
              {activeTab === 'cartao' && (
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-800">Cartão de Crédito</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Pagamento recorrente</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="number"
                          value={cardData.number}
                          onChange={handleCardInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Nome no Cartão</label>
                        <input
                          type="text"
                          id="cardName"
                          name="name"
                          value={cardData.name}
                          onChange={handleCardInputChange}
                          placeholder="Como escrito no cartão"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="expiry"
                            value={cardData.expiry}
                            onChange={handleCardInputChange}
                            placeholder="MM/AA"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            id="cardCvv"
                            name="cvv"
                            value={cardData.cvv}
                            onChange={handleCardInputChange}
                            placeholder="123"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="installments" className="block text-sm font-medium text-gray-700 mb-1">Parcelamento</label>
                        <select
                          id="installments"
                          value={installments}
                          onChange={(e) => setInstallments(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                            <option key={num} value={num}>
                              {num}x de R$ {(15 / num).toFixed(2)} {num > 1 ? '(sem juros)' : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-600">Pagamento seguro criptografado</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Cupom de Desconto */}
              <div className="mt-6">
                <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700 mb-1">Cupom de Desconto</label>
                <div className="flex">
                  <input
                    type="text"
                    id="discountCode"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Digite seu cupom"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    onClick={applyDiscount}
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Aplicar
                  </button>
                </div>
              </div>

              {/* Resumo do Pagamento */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">Resumo do Pagamento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assinatura mensal</span>
                    <span className="font-medium">R$ 15,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Desconto</span>
                    <span className="font-medium text-green-600">- R$ 0,00</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">R$ 15,00</span>
                  </div>
                </div>
              </div>

              {/* Termos e Condições */}
              <div className="mt-6 flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  Eu concordo com os <a href="#" className="text-indigo-600 hover:text-indigo-500">Termos de Serviço</a> e <a href="#" className="text-indigo-600 hover:text-indigo-500">Política de Privacidade</a> da YNNOTHIVIX
                </label>
              </div>

              {/* Botão de Finalizar */}
              <div className="mt-8">
                <button className="w-full bg-indigo-600 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Finalizar Pagamento
                </button>
              </div>

              {/* Segurança */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <svg className="h-8 w-auto" fill="none" viewBox="0 0 109 31" aria-hidden="true">
                  <path fill="#1428A0" d="M14.732 15.284h3.206v3.206h-3.206z" />
                  <path fill="#1428A0" d="M0 0h109v8.284H0z" />
                  <path fill="#1428A0" d="M0 22.716h109V31H0z" />
                  <path fill="#259C41" d="M0 8.284h109v6.632H0z" />
                  <path fill="#259C41" d="M0 16.084h109v6.632H0z" />
                </svg>
                <span className="text-xs text-gray-500">Pagamento 100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;