import { expect, test } from '@playwright/test';
import { AddEmployeePageModel } from '../pageModels/add-employee-page-model';

test('Same email should not create two employees ', async ({ page }) => {
	const addEmployeePage = new AddEmployeePageModel(page);
	const email = 'aaaaaaaaaaaa@gmail.com';
	await addEmployeePage.fillForm(
		'Daniel',
		email,
		'12 rue de la liberté',
		'Paris',
		'75008',
		'2024-01-16',
		'Developer'
	);

	await addEmployeePage.clickOnAddButton();

	const emailCell = page
		.locator('table > tbody > tr')
		.last()
		.locator('td', { hasText: email });

	expect(emailCell).toBeTruthy();

	const addEmployeePage2 = new AddEmployeePageModel(page);

	await addEmployeePage2.fillForm(
		'Daniel2',
		email,
		'12 rue de la liberté',
		'Paris',
		'75008',
		'2023-09-09',
		'accountant n'
	);

	const emailInput = addEmployeePage2.getByName('email');
	await addEmployeePage2.clickOnAddButton();
	expect(addEmployeePage2.isTheSamePage).toBe(true);
	expect(addEmployeePage2.isInputValid(emailInput)).toBe(false);
});
