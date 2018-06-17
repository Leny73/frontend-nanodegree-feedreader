/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Urls are defined', function(){
            for(i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function(){
            for(i=0;i<allFeeds.length;i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function(){
        it('menu is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          * It also ensures that the menu displays when
          * clicked and hides when clicked again.
          */
        it('menu is working', function(){
            var check = $('body').hasClass('menu-hidden');
            var clicked = false; //using a flag 
            $('.icon-list').on('click',function(){ //event listener for click
                clicked = true;
            });
            expect(check).not.toEqual(clicked);
            if(clicked = true){ //check to see if the flag is active
                $('.icon-list').on('click',function(){
                    clicked = false
                });
                expect(check).toEqual(clicked);
            }
        });
    });
    describe('Initial Entries',function(){
        /* This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * My reviewer helped me to see where my mistake is
         */ 
    
        beforeEach(done => {
            loadFeed(0,done);
        });
        it('loadFeed loads at least one resource',function(done){
           expect($(".feed .entry").length).toBeGreaterThan(0);
           done();
        });
    });

        //I had implemented the same function but insted I was calling done()
        //Looked it up in the knowledge platform and there was an accepted answer that I used 
        
        /* This test-suite checks to see if the information is loaded
        * when a new Feed is added in the application
         */

    describe('New Feed Selection', () => {
        beforeEach(done => {
          loadFeed(1, () => { 
            window.first = document.querySelector('.entry-link').innerHTML;
            loadFeed(2, () => {
              window.second = document.querySelector('.entry-link').innerHTML;
              done();
            });
          });
        });
        it('loads new feed ',function(done){
            expect(second !== first).toBe(true);
            done();
        })
    });
    //Knowledge platform helped about the syntax

}());
