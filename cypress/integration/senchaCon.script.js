describe("Go to the login page", () => {
    it('Open the login page', () => {
        cy.clearLocalStorage();
        cy.visit('http://localhost:1962/#homeview')
        cy.hash().should('eq', '#homeview')
    })
    it('Our E2E testing Scenario', () => {
        describe('Drag n Drop', function () {
            /* Login */
            cy.get('[data-cy=username]')
                .type('Akir'/*, { delay: 100 }*/).should("have.value", "Akir");
            cy.task('log', 'This will be output to the terminal');
            cy.get('[data-cy=password]')
                .type('1234'/*, { delay: 100 }*/).should("have.value", "1234");
            cy.get('[data-cy=loginBtn]').should('be.visible').click().wait(2000)
            /* Go to the home page, then go to the first screen From Fields*/
            cy.get('[data-cy=formFieldsview]').should('be.visible')
                .click()//.pause()
            cy.hash().should('eq', '#formFieldsview')
            cy.get('[data-cy=extjsVersion]').click().clear().type(' Welcome to SenchaCon 2020'/*, { delay: 100 }*/);

            cy.get('[data-cy=formPwd]').should('be.visible')
                .type('formPwd');

            cy.get('[data-cy=TextArea]').click().clear().type(' This is a textarea...{enter} this is a new line ! '/*, { delay: 100 }*/);

            cy.get('[data-cy=displayfield]').contains("Display field value").should("have.text", "Display field value");
            cy.get('[data-cy=numberfield]').click().clear().type('15'/*, { delay: 100 }*/);
            cy.get('.x-form-spinner-up').click({ delay: 500 }).click({ delay: 500 });

            cy.get('.x-form-spinner-down').click({ delay: 1500 }).click({ delay: 500 }).click({ delay: 500 }).click({ delay: 500 }).click({ delay: 500 });
            cy.get('[data-cy=checkboxfield]').click({ delay: 500 })
            cy.get('[data-cy=radiofield1]').click({ delay: 500 })
            cy.get('[data-cy=radiofield2]').click({ delay: 500 })
            cy.get('[data-cy=checkboxfield]').click({ delay: 500 })
            cy.get('[data-cy=timefield]').click({ delay: 500 }).type("12")
            cy.get('.x-form-time-trigger').click({ delay: 500 });
            cy.get('li').last();
            cy.get('.x-form-time-trigger').click({ delay: 500 });
            cy.get('li').first();
            cy.get('[data-cy=email]').click({ delay: 500 }).type('akir.oussama').clear({ delay: 300 }).type('akir.oussama@gmail.com');
            cy.get('[data-cy=startDate]').click({ delay: 500 }).type('28/04/2020')
            cy.get('#demoEndDate').within(() => {
                cy.get('.x-form-date-trigger').click({ delay: 500 })
            });
            cy.get('#demoEndDate-picker-nextEl').click();
            cy.get('.x-datepicker-date').contains('29').click({ force: true });
            cy.get('[data-cy=combobox]').click({ delay: 500 }).type('Cy')//.should("have.value", "Cypress");;
            cy.get('.x-boundlist-item').contains('Cypress').click();
            cy.get('.x-form-arrow-trigger').click();
            cy.get('.x-boundlist-item').contains('ExtJS').click();
            /* load the grid and scroll all data */
            cy.get('[data-cy=BufferedRendererView]')
                .click()//.pause()
            cy.hash().should('eq', '#BufferedRendererView')
            cy.get('[data-cy=load]').click({ delay: 1500 }).wait(2000);
            cy.get('[data-cy=BufferedRendererGrid]').within(() => {
                cy.get('.x-grid-body').within(() => { cy.get('.x-scroller').scrollTo('bottom') });
            });
            /* Play with widgets in a grid */

            cy.get('[data-cy=ColumnWidgetsView]')
                .click()//.pause()
            cy.hash().should('eq', '#ColumnWidgetsView')

            cy.get('[data-cy=widget-grid]').within(() => {
                cy.get('.x-form-arrow-trigger').first().click();
            })
            cy.get('.x-list-plain').contains('Local').click();
            cy.get('[data-cy=widget-grid]').within(() => {
                cy.get('.x-slider-thumb').first()
                    .invoke('attr', 'style', 'left: 23%').wait(200)
                    .invoke('attr', 'style', 'left: 28%').wait(200)
                    .invoke('attr', 'style', 'left: 33%').wait(200)
                    .invoke('attr', 'style', 'left: 38%').wait(200)
                    .invoke('attr', 'style', 'left: 43%').wait(200)
                    .invoke('attr', 'style', 'left: 48%').wait(200)
                    .invoke('attr', 'style', 'left: 53%').wait(200)
                cy.get('.x-slider-thumb').last()
                    .invoke('attr', 'style', 'left: 23%').wait(200)
                    .invoke('attr', 'style', 'left: 28%').wait(200)
                    .invoke('attr', 'style', 'left: 33%').wait(200)
                    .invoke('attr', 'style', 'left: 38%').wait(200)
                    .invoke('attr', 'style', 'left: 43%').wait(200)
                    .invoke('attr', 'style', 'left: 48%').wait(200)
                    .invoke('attr', 'style', 'left: 53%').wait(200)
            });
        })
    })

    it('cy.viewport() - set the viewport size and dimension', () => {
        // https://on.cypress.io/viewport

        // cy.get('#navbar').should('be.visible')
        cy.viewport(320, 480)

        // the navbar should have collapse since our screen is smaller
        // cy.get('#navbar').should('not.be.visible')
        // cy.get('.navbar-toggle').should('be.visible').click()
        // cy.get('.nav').find('a').should('be.visible')

        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999)

        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height

        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)

        cy.viewport('macbook-15')
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.wait(200)

        // cy.viewport() accepts an orientation for all presets
        // the default orientation is 'portrait'
        cy.viewport('ipad-2', 'portrait')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.wait(200)

        // The viewport will be reset back to the default dimensions
        // in between tests (the  default can be set in cypress.json)
    })
})