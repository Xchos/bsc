describe('Testing app', function() {

    it('creating a note', function() {

        browser.waitForAngularEnabled(false);
        browser.get('/');
        browser.driver.sleep(1000);

        $('#action-create').click();
        $('#title').sendKeys('a text of note');
        $('#action-save').click();
        browser.driver.sleep(1000);

        expect($$(".list-group-item").count()).toBe(3);
    });

    it('update a note', function() {

        browser.waitForAngularEnabled(false);
        browser.get('/');
        browser.driver.sleep(1000);

        $('#action-edit-1').click();
        $('#title').clear().then(function() {
            $('#title').sendKeys('Jogging in parktest');
        })
        $('#action-save').click();
        browser.driver.sleep(1000);

        $('#note-1').getText().then(function (text) {
            expect(text).toBe('Jogging in parktest');
        });
    });

    it('deleting a note', function() {

        browser.waitForAngularEnabled(false);
        browser.get('/');
        browser.driver.sleep(1000);
        const list = element.all(by.css('.btn-danger'));
        list.last().click();
        console.log(list);
        browser.driver.sleep(1000);
        
        expect($$(".list-group-item").count()).toBe(2);
    });

});