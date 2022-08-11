$(document).ready(
    function () {
        
        // Erases existing comments and displays updated list
        function comDisplay() {
            $('.comSection').empty();
            $('.comSection').append(localStorage.comments);    
        }

        function clear() {
            //Removes the empty text area warning
                $('#check').remove(); 
                $('#remove').remove();
        }
        clear();
        comDisplay(); // This always runs when the page is ready.

        // Clicking the send button runs this function
        $('#comment_btn').click(() => {
            let text = $('#comment').val(); // Gets the comments from the textarea
            
            if (text === "") {

                // If the comment section is empty
                clear();
                $('textarea').after(`<br id="remove"><span id="check"></span>`);
                $('#check').append('Please type a comment...');
            } else {

                // If there is a comment in the box
                text = `<p>${text}</p><small id="user">@Anonymous</small>`;
                let comments = localStorage.comments || '';
                localStorage.comments = comments.concat(text);
                comDisplay();
                $('textarea').val(""); // clears textarea
                clear();
            }         

        });





    });