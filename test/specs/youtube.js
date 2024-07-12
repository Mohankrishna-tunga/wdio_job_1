describe("youtube",async()=>{
    it("",async()=>{
    await browser.url('https://www.youtube.com/');

     const searchInput = await browser.$('//button[@id="search-icon-legacy"]');
    await searchInput.setValue('automation practice');
    const searchButton = await browser.$('button#search-icon-legacy');
    await searchButton.click();

    // Example: Click on the first video
    const firstVideo = await browser.$('(//div[@id="title-wrapper"])[1]');
    await firstVideo.click();

    // Example: Wait for video to load and play
    await browser.pause(5000); // Adjust time as necessary

        
    })
})