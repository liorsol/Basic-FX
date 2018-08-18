import { Router } from 'express';
import * as CurrenciesHttpHandler from './currencies/currencies.http.handler';
import * as FinancialHttpHandler from './financial/financial.http.handler';

export const router = Router();

router.get('/currencies', CurrenciesHttpHandler.list);
router.get('/financialUnits', FinancialHttpHandler.financialUnitsList);
router.get('/positions', FinancialHttpHandler.positionsList);
router.get('/calcFinancialUnits', FinancialHttpHandler.calcUnits);;
router.get('/calcFinancialUnits.csv', FinancialHttpHandler.calcUnitsCSV);
