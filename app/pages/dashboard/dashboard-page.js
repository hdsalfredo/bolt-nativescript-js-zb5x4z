import { DashboardViewModel } from './dashboard-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new DashboardViewModel();
}