describe('File upload Example',()=>{
    xit('File upload',()=>{
        cy.visit('https://demo.automationtesting.in/FileUpload.html');
        const file='image1.png';
        cy.get('#input-4').attachFile(file);

    });
    it('File Upload drag drop',()=>
    {
        cy.visit('https://css-tricks.com/drag-and-drop-file-uploading/');
        cy.get(':nth-child(4) > .button').click();
       const file='image1.png';
       cy.get('#file').attachFile(file);
        cy.get('.box__success').should('contain.text','Done! ');
    })
}

)