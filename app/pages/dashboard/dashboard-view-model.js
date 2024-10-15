import { Observable } from '@nativescript/core';

export function DashboardViewModel() {
    const viewModel = new Observable();

    viewModel.saldoTotal = "R$ 200,58";
    viewModel.ultimaOperacao = "R$ 28,55";
    viewModel.totalEntrada = "R$ 18532,52";
    viewModel.totalPendencias = "R$ 137,43";
    viewModel.totalDespesas = "R$ 5000,00";
    viewModel.receitas = "R$ 201,48";

    viewModel.recentTransactions = [
        { icon: "~/assets/icons/home.png", description: "Pagamento Aluguel", category: "Custo Fixo", amount: "-R$ 3500,00", amountClass: "text-red" },
        { icon: "~/assets/icons/wifi.png", description: "Internet", category: "Boletos", amount: "-R$ 158,00", amountClass: "text-red" },
        { icon: "~/assets/icons/phone.png", description: "Telefones", category: "Boletos", amount: "-R$ 310,00", amountClass: "text-red" },
        { icon: "~/assets/icons/transfer-in.png", description: "Transferença de Saldos", category: "Banco Caixa", amount: "+R$ 3000,58", amountClass: "text-green" },
        { icon: "~/assets/icons/transfer-out.png", description: "Transferença de Saldos", category: "Banco do Brasil", amount: "-R$ 35,00", amountClass: "text-red" }
    ];

    viewModel.onMenuTap = () => {
        console.log("Menu Principal tapped");
    };

    viewModel.onCategoriasTap = () => {
        console.log("Categorias tapped");
    };

    viewModel.onContasTap = () => {
        console.log("Contas tapped");
    };

    viewModel.onRelatoriosTap = () => {
        console.log("Relatórios tapped");
    };

    viewModel.onTransacoesTap = () => {
        console.log("Transações tapped");
    };

    viewModel.onConfigurarTap = () => {
        console.log("Configurar tapped");
    };

    viewModel.onAjudaTap = () => {
        console.log("Ajuda tapped");
    };

    viewModel.onSairTap = () => {
        console.log("Sair do Sistema tapped");
    };

    viewModel.onVerOperacoes = () => {
        console.log("Ver Operações tapped");
    };

    viewModel.onVerDespesas = () => {
        console.log("Ver Despesas tapped");
    };

    return viewModel;
}