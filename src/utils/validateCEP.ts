const CEP_VALIDATION_URL = 'https://viacep.com.br/ws/';

interface CepValido {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

interface CepInvalido {
	erro: true;
}

type CepResponse = CepValido | CepInvalido;

async function fetchCepData(cep: string): Promise<CepResponse> {
	try {
		const response = await fetch(`${CEP_VALIDATION_URL}${cep}/json/`);
		const data = (await response.json()) as CepResponse;
		return data;
	} catch (error) {
		console.error('Error fetching CEP data:', error);
		throw error;
	}
}

export async function validateCEP(cep: string): Promise<CepResponse> {
	const cleanCEP = cep.replace(/\D/g, '');
	const response = await fetchCepData(cleanCEP);
	if ('erro' in response) return { erro: true };
	return response;
}
