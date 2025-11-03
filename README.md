# 🍽️ Cardápio Digital - Sistema de Gestão para Restaurantes

## 📋 Sobre o Projeto

O **Cardápio Digital** é uma plataforma web moderna e completa desenvolvida para digitalizar e otimizar a experiência de pedidos em restaurantes, lanchonetes e estabelecimentos do ramo alimentício. O sistema oferece uma interface intuitiva que conecta clientes aos estabelecimentos, permitindo navegação por cardápios, realização de pedidos e gestão de perfis de forma eficiente e profissional.

Este projeto foi desenvolvido como parte de um trabalho acadêmico da PUC, com foco em aplicar conceitos modernos de desenvolvimento web, arquitetura de software e experiência do usuário.

## 🎯 Objetivo e Propósito

O principal objetivo do sistema é proporcionar uma solução digital completa que atenda às necessidades dos clientes de estabelecimentos:

### Para Clientes
- Navegação intuitiva por categorias e produtos
- Visualização detalhada de produtos com descrições e imagens
- Carrinho de compras inteligente com gestão de itens
- Sistema de busca avançada para localizar produtos rapidamente
- Perfil personalizado com gestão de endereços
- Histórico de pedidos realizados
- Experiência responsiva e otimizada para dispositivos móveis

## 👥 Público-Alvo

O sistema foi projetado para atender:

**Clientes Finais (CUSTOMER)**: Consumidores que desejam visualizar cardápios e realizar pedidos de forma digital

## 🏗️ Arquitetura e Padrões

O projeto foi desenvolvido seguindo boas práticas e padrões modernos de desenvolvimento:

### Arquitetura Model-View-Controller (MVC)
Cada módulo da aplicação segue uma estrutura clara e organizada:
- **Model** (`*.model.ts`): Lógica de negócios e gerenciamento de estado
- **View** (`*.view.tsx`): Componentes de apresentação e interface
- **Page** (`page.tsx`): Composição e integração entre Model e View

## 📱 Funcionalidades Principais

### Sistema de Navegação
- **Home**: Página inicial com destaque para o restaurante
- **Menu**: Visualização completa do cardápio organizado por categorias
- **Busca**: Sistema de pesquisa inteligente para localizar produtos
- **Categorias**: Navegação filtrada por tipo de produto

### Gestão de Pedidos
- **Carrinho**: Adicionar, remover e modificar itens com observações personalizadas
- **Detalhes do Produto**: Visualização completa com imagens, descrição e preço
- **Histórico de Pedidos**: Acompanhamento de pedidos anteriores
- **Status de Pedido**: Feedback visual sobre o estado do carrinho

### Perfil do Usuário
- **Autenticação**: Sistema de login e registro
- **Detalhes do Perfil**: Informações pessoais do usuário
- **Endereços**: Gestão de múltiplos endereços de entrega
- **Configurações**: Personalização da experiência

### Informações do Restaurante
- **Detalhes**: Horários de funcionamento, contato e localização
- **Delivery**: Informações sobre taxa, tempo estimado e pedido mínimo
- **Métodos de Pagamento**: Opções disponíveis para pagamento

## 🎨 Design e Experiência do Usuário

O sistema foi desenvolvido com foco em proporcionar uma experiência moderna e agradável:

- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições fluidas entre páginas usando Framer Motion
- **Feedback Visual**: Indicadores claros de ações e estados
- **Acessibilidade**: Componentes pensados para inclusão
- **Performance**: Otimizações com React Compiler e lazy loading

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação e Execução
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📂 Estrutura do Projeto

```
src/
├── app/                    # Páginas e features da aplicação
│   ├── (bag)/             # Módulo do carrinho
│   ├── (menu)/            # Módulo do cardápio
│   ├── (profile)/         # Módulo de perfil
│   └── ...                # Outros módulos
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de interface base
│   └── ...               # Componentes específicos
├── store/                # Gerenciamento de estado global
├── types/                # Definições de tipos TypeScript
├── utils/                # Funções utilitárias
├── routes/               # Configuração de rotas
└── hooks/                # Custom hooks React
```

## 🔐 Sistema de Permissões

O projeto implementa um sistema robusto de papéis e permissões:

- **SUPER_ADMIN**: Acesso total à plataforma
- **ESTABLISHMENT_ADMIN**: Gestão completa do estabelecimento
- **ESTABLISHMENT_USER**: Operações limitadas no estabelecimento
- **CUSTOMER**: Acesso às funcionalidades de cliente

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como trabalho acadêmico na **PUC (Pontifícia Universidade Católica)**, aplicando conceitos de:
- Engenharia de Software
- Arquitetura de Aplicações Web
- Design de Interfaces
- Desenvolvimento Front-end Moderno
- Gestão de Projetos

## 📄 Licença

Este projeto é privado e foi desenvolvido para fins acadêmicos.

---